<template>
	<div class="row" >
		<div class="col-xl-12">
			<div class="row  text-center" style="background-color:#ff6600; border-top-left-radius:30px;  border-top-right-radius:30px">
				<h3 style="padding-top:1em; color:white"> <a @click="preivousComponent"><i class="fa fa-long-arrow-left" aria-hidden="true" style="font-size:25px;margin-top:10px; margin-right:2em"></i> </a> Available For Delivery</h3>
			</div>
			
				<div class="row" style="margin-top:2.5em">
					<div class="card-body pb-0 dz-scroll loadmore-content pt-0" id="LatestSalesContent" >
						<perfect-scrollbar>
							<div class="media pb-3 border-bottom mb-3 align-items-center" v-for="merchant in merchant_list" :key="merchant" >
								<div  @click="preview_order(merchant.merchant.merchant_id)">
									<div class="media-image me-2 col-lg-12 transport">
										<div class="row">
											<div class="col-lg-2">
												<img src="../statics/fav.png" alt=""> 
											</div>
											<div class="col-lg-8" style="padding-top:0.7em; margin-left:1em; font-weight:500; font-size:18px">
												{{merchant.merchant.name}}
												<span style="padding-left:1em" v-if="merchant.merchant.ratings === 1">
													<i class="fa fa-star fs-16 text-orange"></i>
												</span>
												<span style="padding-left:1em" v-if="merchant.merchant.ratings === 2">
													<i class="fa fa-star fs-16 text-orange"></i>
													<i class="fa fa-star fs-16 text-orange"></i>
												</span>
												<span style="padding-left:1em" v-if="merchant.merchant.ratings === 3">
													<i class="fa fa-star fs-16 text-orange"></i>
													<i class="fa fa-star fs-16 text-orange"></i>
													<i class="fa fa-star fs-16 text-orange"></i>
												</span>
												<span style="padding-left:1em" v-if="merchant.merchant.ratings === 4">
													<i class="fa fa-star fs-16 text-orange"></i>
													<i class="fa fa-star fs-16 text-orange"></i>
													<i class="fa fa-star fs-16 text-orange"></i>
													<i class="fa fa-star fs-16 text-orange"></i>
												</span>
												<span style="padding-left:1em" v-if="merchant.merchant.ratings === 5">
													<i class="fa fa-star fs-16 text-orange"></i>
													<i class="fa fa-star fs-16 text-orange"></i>
													<i class="fa fa-star fs-16 text-orange"></i>
													<i class="fa fa-star fs-16 text-orange"></i>
													<i class="fa fa-star fs-16 text-orange"></i>
												</span>
											</div>
											<div class="col-lg-3"><span class="star-review d-inline-block fs-16 me-auto text-secondary "></span></div>
										</div>
									</div>
								</div>
							</div>
						</perfect-scrollbar>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
import Api from "../views/Api.js"
export default {
    name: 'ListChannel',
	data(){
		return{
			state: 'preview',
	 		recommended_merchant: '',
			active_id:'',
			loading: false,
			errors: [],
			previousState: 'description'
		}
	},
	methods: {
		preivousComponent(){
			this.$emit('change_state', this.previousState)
		},
		preview_order(merchant_id){
			this.errors.splice(0);
			this.$store.commit('set_merchant', merchant_id) 
			const pickup_latitude= this.$store.state.order.pickup_latitude
			const pickup_longitude = this.$store.state.order.pickup_longitude
			const transport_type = this.$store.state.order.transport_type
			const destination = this.$store.state.order.destination
			const destination_latitude = this.$store.state.order.destination_latitude
			const destination_longitude = this.$store.state.order.destination_longitude
			const extra_description = this.$store.state.order.extra_description
			const item_description = this.$store.state.order.item_description
			const pickup_location = this.$store.state.order.pickup_location
			const distance_in_km = this.$store.state.order.distance_in_km
			const expected_pickup_time = '1990-06-20 08:03'
			const formData = { pickup_latitude,pickup_longitude, transport_type, merchant_id,destination, destination_latitude, destination_longitude, extra_description, item_description,distance_in_km, expected_pickup_time, pickup_location}
			this.loading = true
			Api.axios_instance.post(Api.baseUrl+'/transporter/create', formData)
			.then(response => {
				const formData = {
					transport_fee:response.data.data.transport_fee, reference:response.data.data.reference, expected_time:response.data.data.expected_pickup_time
				}
				this.$store.commit('set_transport_fee', formData)
				this.$emit('change_state', this.state)
			}).
			catch(error => {
				console.log(error.response)
			})
			.finally( () => {
				this.finally = false
			})
		}
	},

	computed: {
		merchant_list() {
		return	this.$store.state.order.merchant_list
	}
	}
}
</script>

<style >
.transport:hover{
	/* background-color: ; */
	color:#ff6600 !important;
	cursor:pointer
}

.active{
	color:#ff6600 !important;
	cursor:pointer
}
.ps {
  height: 800px;
}
</style>