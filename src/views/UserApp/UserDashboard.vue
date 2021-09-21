<template>
<div>
	<UserSideBar />
     <div class="content-body" style="padding-top:0em !important">
            <!-- row -->
		<div class="container-fluid">
			<div class="row">
			<div class="col-lg-12">
				<!-- <GoogleMap
					api-key="AIzaSyAFbHM1j8bJmZ5cqqyFM48HkKMAldFq6qc"
					style="width: 100%; height: 1080px"
					:center="center"
					:zoom="15"
					:getUserLocation="true"
					> -->
					<!-- <Marker :options="{ position: destination_marker }" /> -->
					<!-- <Marker v-for= :options="{ position: center }" /> -->
				<!-- </GoogleMap> -->
				  <GMapMap
					:center="center"
					:zoom="15"
					ref="myMapRef"
					map-type-id="terrain"
					style="width: 100%; height: 970px"
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
					{ position:center},{position:destination_marker}]"
						:position="marker.position"
					/>
			 	</GMapMap>
            </div>
			<div v-show="state === 'location'" class="col-xl-4 col-xxl-4 object overlay" style="background:#fff; height:40%; opacity:100%; border-radius:40px; margin-right:30px ">
				<SetLocation @setDestination='setDestination' @setOrigin='setOrigin' @change_state="change_state" />
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
//   props: ['merchant_id'],
  components: { GoogleMap, Marker, UserSideBar, SetChannel, SetLocation, ListChannel, OrderPreview, Complete },
 
   data() {
    return {
      positon: null,
	  center:{ lat: 41.689247, lng: -74.044502 },
	  destination_marker:{lat: 40.689247, lng: -74.044502 },
	  travelMode:'DRIVING',
	  state: 'location',
	  merchant_list: [],
	  recommended_merchant:{}
    }
  },
  mounted(){
	this.getCurrentPosition()
    this.geoId = navigator.geolocation.watchPosition( (position, err) => {
	this.position = position
	this.get_user_details()
	console.log(this.$store.state.user)
    })
},

methods: {
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
					this.$store.commit('set_user_details', data)
				})
	},
	setDestination(place) {
		console.log(place);
		let ac = place.address_components;
		let lat = place.geometry.location.lat();
		let lon = place.geometry.location.lng();
		let address = place.formatted_address;
		this.destination_marker = {
			lat : lat,
         	lng: lon
		}
		const data = {
			destination_latitude:lat,
			destination_longitude:lon,
			destination:address,
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
			  console.log(distance_in_kilometre);
				const data = {distance_in_km:distance_in_kilometre}
			   this.$store.commit('set_distance', data)
			if (status !== "OK") return;
            directionsDisplay.setDirections(response);
          }
     
      );
	},
	setOrigin(place){
		let ac = place.address_components;
		let address = place.formatted_address;
		let lat = place.geometry.location.lat();
		let lon = place.geometry.location.lng();
		let city = ac[0]["short_name"];
		this.center = {
          lat : lat,
          lng: lon,
		}

		const data = {
			pickup_latitude: lat,
			pickup_longitude: lon,
			pickup_location: address, 
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
		console.log(this.state);
	}
}

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
  </style>