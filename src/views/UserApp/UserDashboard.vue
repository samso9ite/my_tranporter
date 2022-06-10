<template>
<div>
	<UserSideBar />
     <div class="content-body" style="padding-top:0em !important">
            <!-- row -->
		<div class="container-fluid">
			<div class="row">
			<div class="col-lg-12">
				<GMapMap
					:center="center"
					:zoom="15"
					ref="myMapRef"
					map-type-id="terrain"
					style="width: 100% !important; height: 1200px"
					 :options="{
                      zoomControl: true,
                      mapTypeControl: true,
                      scaleControl: true,
                      streetViewControl: true,
                      rotateControl: true,
                      fullscreenControl: true,
                }"
				>
			 	<!-- <DirectionsRenderer travelMode="DRIVING" :origin="{position:center}" :destination="{position:destination_marker}"/> -->
				<GMapMarker
					:key="marker.id"
					v-for="marker in  [
					{position:center},{position:destination_marker}]"
						:position="marker.position"
					/>
			 	</GMapMap>
            </div>

			<div v-show="state === 'location'" class="col-xl-4 col-xxl-4 object overlay" style="background:#fff; opacity:100%; border-radius:40px; margin-right:30px ">
				<SetLocation @setDestination='setDestination' @setOrigin='setOrigin' @change_state="change_state" :pickup_address="pickup_address" :destination_address="destination_address" >
					<!-- Pickup Location Slot -->
					<template v-slot:pickupSlot>
						<div v-if="loading">
							<center>Loading ...</center>
						</div>
						<div v-else v-for="location in locations" :key="location" class="bank" :class="{'bank_active' : location.id  === style_id}" @click="selected_location(location.id)" >
							<div class="row" style="padding:6px 10px">
								<span style="margin-left:4px !important">{{location.address}} <b> {{location.type}} </b> </span>
							</div>
						</div>
					</template>
					<!-- Destination Location Slot  -->
					<template v-slot:destinationSlot>
						<div v-if="loading">
							<center>Loading ...</center>
						</div>
						<div v-else v-for="location in locations" :key="location" class="bank" :class="{'bank_active' : location.id  === destination_style_id}" @click="selected_destination(location.id)" >
							<div class="row" style="padding:6px 10px">
								<span style="margin-left:4px !important">{{location.address}} <b> {{location.type}} </b> </span>
							</div>
						</div>
					</template>
				</SetLocation>
			</div>
			<div v-show="state === 'description'" class="col-xl-4 col-xxl-4 object overlay" style="background:#fff; opacity:100%; border-radius:40px; margin-right:30px ">
				<SetChannel @change_state="change_state" />
			</div>
			<div v-show="state === 'merchant'" class="col-xl-4 col-xxl-4 object overlay" style="background:#fff; opacity:100%; border-radius:40px; margin-right:30px ">
				<ListChannel  @change_state="change_state" />
			</div>
			<div v-show="state === 'preview'" class="col-xl-4 col-xxl-4 object overlay" style="background:#fff;  opacity:100%; border-radius:40px; margin-right:30px ">
				<OrderPreview  @change_state="change_state"  />
			</div>
			<div v-show="state === 'completed'" class="col-xl-4 col-xxl-4 object overlay" style="background:#fff;  opacity:100%; border-radius:40px; margin-right:30px ">
				<Complete  />
			</div>
			</div>
        </div>
        <!--**********************************
            Content body end
        ***********************************-->
	</div>
</div>
</template>

<script>
import UserSideBar from '../../components/UserSideBer.vue'
import { defineComponent } from 'vue'
import SetChannel from '../../components/SetChannel.vue'
import SetLocation from '../../components/SetLocation.vue'
import ListChannel from '../../components/ListChannel.vue'
import OrderPreview from '../../components/OrderPreview.vue'
import Complete from '../../components/Complete.vue'
import { GoogleMap, Marker } from 'vue3-google-map'
import Api from "../Api.js"

export default defineComponent({
name: 'UserDashboard',
components: { GoogleMap, Marker, UserSideBar, SetChannel, SetLocation, ListChannel, OrderPreview, Complete},
data() {
    return {
      positon: null,
	  center:{ lat:  41.689247, lng: -74.044502 },
	  destination_marker:{lat: 40.689247, lng: -74.044502 },
	  travelMode:'DRIVING',
	  state: 'location',
	  merchant_list: [],
	  recommended_merchant:{},
	  loading: false,
	  locations: [],
	  style_id: '',
	  loading: false,
	  pickup_lat: '',
	  pickup_lng: '',
	  pickup_address: '',
	  destination_lat: '',
	  destination_lng: '',
	  destination_address: '',
	  pickup_location_selected: false,
	  destination_location_selected: false,
	  destination_style_id: ''
    }
  },
  mounted(){
	this.getCurrentPosition()
    this.geoId = navigator.geolocation.watchPosition( (position, err) => {
	this.position = position
	this.get_user_details()
	this.getAllLocations()
	})
},

methods: {
	getAllLocations(){
		this.loading = true
		console.log(this.loading);
		Api.axios_instance.get(Api.baseUrl+'/auth/user/locations/get')
		.then(response => {
			this.locations = response.data
		})
		.catch(err => {
			console.log(error.response);
		})
		.finally(() => {
			this.loading = false
		})
	},
	get_user_details(){
		Api.axios_instance.get(Api.baseUrl+'/auth/user/profile/get')
		.then(response => {
			const data = {
				email:response.data.email,
				first_name: response.data.first_name,
				last_name:response.data.last_name,
				wallet_balance: response.data.wallet_balance,
				phone: response.data.phone,
				image: response.data.image,
			}
			this.$store.commit('set_user_details', {data})
		})
	},
	selected_location(id){
		this.pickup_location_selected = true
		let selected_location = this.locations.filter(location => location.id === id)
		this.style_id = id
		this.pickup_lat = parseFloat(selected_location[0].latitude)
		this.pickup_lng = parseFloat(selected_location[0].longitude)
		this.pickup_address = selected_location[0].address
		this.setOrigin()
	},
	selected_destination(id){
		this.destination_location_selected = true
		let selected_location = this.locations.filter(location => location.id === id)
		this.destination_style_id = id
		this.destination_lat = parseFloat(selected_location[0].latitude)
		this.destination_lng = parseFloat(selected_location[0].longitude)
		this.destination_address = selected_location[0].address
		this.setDestination()
	},
	setDestination(place) {
		if (place){
			this.destination_location_selected = false
			this.destination_style_id = ''
		}
		if (this.destination_location_selected){
		}else{
			this.destination_lat = place.geometry.location.lat();
			this.destination_lng = place.geometry.location.lng();
			this.destination_address = place.formatted_address;
		}
		this.destination_marker = {
			lat : this.destination_lat,
         	lng: this.destination_lng
		}
		const data = {
			destination_latitude:this.destination_lat,
			destination_longitude:this.destination_lng,
			destination:this.destination_address,
			type: "destination"
		}
		this.$store.commit('set_location', data)
		let directionsService = new window.google.maps.DirectionsService();
		var directionsDisplay = new google.maps.DirectionsRenderer;
  		directionsDisplay.setMap(this.$refs.myMapRef.$mapObject);

        let { positions:center, position:destination_marker, travelMode } = this;
        if (!"position:center" || !"position:destination_marker" || !travelMode) return;
			directionsService.route(
			{
				origin:this.center,
				destination:this.destination_marker,
				travelMode:this.travelMode
			},
			(response, status) => {
				let distance_in_kilometre = response.routes[0].legs[0].distance.value / 1000
				const data = {distance_in_km:distance_in_kilometre}
				this.$store.commit('set_distance', data)
				if (status !== "OK") return;
				directionsDisplay.setDirections(response);
			}
     
      );
	},
	setOrigin(place){
		if (place){
			this.pickup_location_selected = false
			this.style_id = ''
		}
		if (this.pickup_location_selected){
			
		} else {
			this.pickup_address = place.formatted_address;
			this.pickup_lat = place.geometry.location.lat();
			this.pickup_lng = place.geometry.location.lng();
		}
		this.center = {
			lat : this.pickup_lat,
			lng: this.pickup_lng,
		}
		const data = {
			pickup_latitude: this.pickup_lat,
			pickup_longitude: this.pickup_lng,
			pickup_location: this.pickup_address, 
			type:"origin"
		}
		this.$store.commit('set_location', data)
	
    },
	
	getCurrentPosition() {
		var that = this
		if ("geolocation" in navigator) {
		/* geolocation is available */
		navigator.geolocation.getCurrentPosition(displayLocationInfo);
		function displayLocationInfo(position) {
			const lng = position.coords.longitude;
			const lat = position.coords.latitude;
			that.position = position
			that.center = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			}
		}
	} else {
		console.log('geolocation IS NOT available on your browser');
	}
	},
	change_state(state){
		this.state=state
	},
	check_function(){
		console.log("Checking if this s working");
	},
	
},
// mounted(){
	
// }
})
</script>

  <style scoped>
    .container-fluid{  
		margin: 0px !important;
		padding: 0px !important;
        position: relative;
	}
	.object {
     position: absolute;
       bottom: 8px;
  		right: 16px;
    }
	.overlay {
        z-index: 90;
        margin-bottom: 30px;
		margin-right:50px !important;
      }
	  .vue-map-container{
		  height: 60rem !important
	  }
	  .bank_active{
		background-color: #ff6600;
		color:#fff !important;
		border-radius:15px;
		padding:10px
	}
	.bank:hover{
		background-color: #ff6600;
		color:#fff !important;
		cursor:pointer;
		border-radius:15px;
		
	}
  </style>