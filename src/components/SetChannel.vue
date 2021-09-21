<template>
    				<div class="row" >
						<div class="col-xl-12">
							<div class="row  text-center" style="background-color:#ff6600; border-top-left-radius:30px;  border-top-right-radius:30px">
								<h3 style="padding-top:1em; color:white">Set Delivery Channel </h3>
							</div>
							<div class="row " style="">
								<div class="row" style="margin-top:2.5em; padding-right:1em; padding-left:1em">
								<div class="card-body pb-0 dz-scroll loadmore-content pt-0 " id="LatestSalesContent">
                                    <div class="row  form-material">
										<div class="col-lg-6 transport mb-3" v-for="type in transport_types" :key="type" :class="{'active' : type.code  === transport_type}" @click="change_transport_type(type.code)">
										<img v-bind:src="type.image"><span style="font-weight:500">{{type.name}}</span>
										</div>
									</div>
                                    <br>
									<div class="row">
									<div class="mb-3 col-lg-6">
									<label class="mb-1" style="600">Title Description</label>
										<input type="text" class="form-control" v-model="item_description" placeholder="Title Description " name="item_description">
									</div>
									<div class="col-lg-6">
									<label class="mb-1 " style="600">Expected Delivery Time</label>
										<input type="text" class="form-control" v-model="delivery_time" placeholder="20:00 08:09 " name="delivery_time">
									</div>
									</div>
									<div  class="mb-3">
										<label class="mb-1" style="600" >Short Description</label>
									 <textarea class="form-control" v-model="extra_description" rows="5" id="comment"></textarea>
									</div>

                                <div>
									
                                    <a href="javascript:void(0);" class="btn btn-secondary btn-block text-white" @click="updateState">Proceed</a>
                                </div>
									
							</div>
						</div>
					</div>
				</div>
			</div>	
</template>

<script>
import Api from "../views/Api.js"
 
export default {
    name: 'SetChannel',
    components: { },
	created(){
		this.loadScript()
	},
	
   	data(){
		return{
			transport_type: '',
			extra_description: '',
			delivery_time: '',
			item_description: '',
			activeIndex:0,
			transport_types: [
				{
					id:1,
				   	code:"BIKE",
					image:require('../statics/bike_del.png'),
					name: 'Bike Delivery'
				},
				{
					id:2,
				   	code:"VAN",
					image:require('../statics/van_delivery.png'),
					name: 'Van Delivery'
				},
				{
					id:3,
				   	code:"DRONE",
					image:require('../statics/drone.png'),
					name: 'Drone Delivery'
				},
				{
					id:4,
					code:"BICYCLE",
					image:require('../statics/bicycle.png'),
					name: 'Bicycle Delivery'
				},
				{
					id:5,
				   	code:"TRUCK",
					image:require('../statics/truck_del.png'),
					name: 'Truck Delivery'
				},
				{
					id:5,
				   	code:"CAR",
					image:require('../statics/car_del.png'),
					name: 'Car Delivery'
				}
			],
			state: 'merchant',
		}
	},
	methods:{
		change_transport_type(type){
			console.log(this.transport_type)
			this.transport_type = type
			console.log(this.transport_type)
		},

		loadScript(){
					
		},

		updateState(){
		const formData={
		transport_type:this.transport_type,
		pickup_latitude: this.$store.state.order.pickup_latitude,
		pickup_longitude: this.$store.state.order.pickup_longitude,
		}
		console.log(formData);
		const storeData = {
			extra_description:this.extra_description, 
			set_time:this.delivery_time,
			item_description:this.item_description,
			transport_type:this.transport_type,
		}
		console.log(storeData);
		Api.axios_instance.post(Api.baseUrl+'/transporter/search', formData)
		.then(
			async response => {
			console.log(response);
			const merchant_list = response.data.closest_merchants
			const recommended_merchant = response.data.recommended_list
			const merchant_data = {merchant_list, recommended_merchant}
			this.$store.commit('set_more_info', storeData)
			await this.$store.commit('get_merchant', merchant_data)
			this.$emit('change_state', this.state)
			
		}).catch(error => {
			console.log(error.response);
		})
	
		}
	},
}
</script>

<style scoped>
.event-list .date-bx:after {
    height: 16px;
    width: 16px;
}

.transport:hover{
	background-color: #ff6600;
	color:#fff !important;
	cursor:pointer;
	border-radius:15px
}

.active{
	background-color: #ff6600;
	color:#fff !important;
	border-radius:15px
}
.btn-secondary{
	background-color:#ff6600 ;
	border-color: #fff;
}
.btn-secondary:hover{
	background-color:#473b52 ;
	border-color: #fff;
}
</style>