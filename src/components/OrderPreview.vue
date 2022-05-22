<template>
    	<div class="row" >
			<div class="col-xl-12">
				<div class="row  text-center" style="background-color:#ff6600; border-top-left-radius:30px;  border-top-right-radius:30px">
					<h3 style="padding-top:1em; color:white"> <a @click="preivousComponent"><i class="fa fa-long-arrow-left" aria-hidden="true" style="font-size:25px;margin-top:10px; margin-right:2em"></i> </a> Order Summary</h3>
				</div>
				<div class="row" style="margin-top:2.5em">
					<div class="col-lg-12">
						<h2 style="text-align:center; font-weight:600; color:#000;" >
							₦{{data}}
						</h2>
					<h4 class="d-flex justify-content-between align-items-center mb-3">
							<span class="badge badge-primary badge-pill"></span>
						</h4>
						<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
							</button>
							<span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
						</div>
						<div class="col-lg-12">
							<div class="hover_payment_button mb-3" @click="pay_with_wallet" >
								Pay With Wallet
							</div>
							<div class="hover_payment_button mb-3" @click="pay_on_delivery" >
								Pay With Cash
							</div>
							<div class="hover_payment_button mb-3"  @click="payWithPaystack" >
								Pay With Paystack
							</div>
							<div class="accordion heade_style" id="accordion-one" >
								<div class="accordion-item">
									<div class="accordion-header  rounded-lg" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne"   aria-expanded="false" role="button">
										<span class="accordion-header-icon"></span>
									  <span class="accordion-header-text">Pay With Card</span>
									  <span class="accordion-header-indicator"></span>
									</div>
									<div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-bs-parent="#accordion-one">
									  <div class="accordion-body-text">
											<div class="table-responsive">
												<table class="table   table-bordered table-striped verticle-middle table-responsive-sm">
										<tbody>
											<tr v-for="card in cards" :key="card" class="hover_payment_button" @click="pay_with_card(card.card_id)">
												<td>
													<div class="form-check" style="">
														<img src="../statics/visae.png" width="30" v-if="card.card_type == 'visa '" />
													</div>
												</td>
											
												<td>**** **** **** {{card.last4digits}}</td>
												<td>
													{{card.card_bank}}
												</td>
											</tr>
										</tbody>
									</table>
											</div>
									  </div>
									</div>
									</div>
								  </div>
								  
								<ul class="list-group mb-3">
								</ul>
									<li class="list-group-item d-flex justify-content-between active" style="border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;">
									<div class="text-white">
										<h5 class="my-0 text-white"><strong>Expected Delivery Time</strong></h5>
									</div>
									<strong><span class="text-white"> {{time}} </span></strong>
								</li>
								</div>
						</div>
						<br>
					</div>
			</div>
		</div>
</template>


<script>
import Api from "../views/Api.js"
	export default({
		data(){
			return{
				state: 'completed',
				payment_method: '',
				order_ref: '',
				cards: [],
				transport_fare: '',
				previousState: 'merchant',
				errors: []
			}
		},
		created() {
			this.scriptLoaded = new Promise(resolve => {
				this.loadScript(() => {
					resolve();
				});
			});
		 },
		methods: {
			preivousComponent(){
				this.$emit('change_state', this.previousState)
			},
			pay_with_wallet(){
				const formData = {order_ref:this.$store.state.order.reference, payment_method: '3' }
				Api.axios_instance.post(Api.baseUrl+'/payment/order/pay', formData)
				.then(response => {
					this.$emit('change_state', this.state)
				})
				.catch(error => {
					if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data.detail}`)
                        }
                    }
				})
			},
			pay_on_delivery(){
				const formData = {order_ref:this.$store.state.order.reference, payment_method: '6'}
				Api.axios_instance.post(Api.baseUrl+'/payment/order/pay', formData)
				.then(response => {
					this.$emit('change_state', this.state)
				})
				.catch(error => {
					if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data.detail}`)
                        }
                    }
				})
			},
	
			loadScript(callback) {
            const script = document.createElement("script");
            script.src = "https://js.paystack.co/v1/inline.js";
            document.getElementsByTagName("head")[0].appendChild(script);
            if (script.readyState) {
                // IE
                script.onreadystatechange = () => {
                    if (
                        script.readyState === "loaded" ||
            script.readyState === "complete"
                    ) {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                // Others
                script.onload = () => {
                    callback();
                };
            }
        },
        isDynamicSplit() {
            return this.split.constructor === Object && Object.keys(this.split).length > 0;
        },
		// update_rate(){
		// 	console.log(this.card_id)
		// },
        payWithPaystack() {
			this.scriptLoaded &&
        	this.scriptLoaded.then(() => {
			 const paystackOptions = {
                key: 'pk_live_7f774de7bb00dc0e58ac0ddb8aeaba8dd3f4dab3',
				email: JSON.parse(window.localStorage.getItem('email')),
                firstname: JSON.parse(window.localStorage.getItem('first_name)')),
                lastname: JSON.parse(window.localStorage.getItem('last_name')),
				amount: parseInt(this.$store.state.order.transport_fee)*100, 
                ref: Math.random().toString(36),
				callback: response => {
					const formData = {order_ref:this.$store.state.order.reference, payment_method: '5', token: response.reference}
					Api.axios_instance.post(Api.baseUrl+'/payment/order/pay', formData)
					.then(
						this.$emit('change_state', this.state)
					)
                  
                },
                onClose: () => {
                    this.close();
                },
            };
            if (this.embed) {
                paystackOptions.container = "paystackEmbedContainer";
            }
            const handler = window.PaystackPop.setup(paystackOptions);
            if (!this.embed) {
                handler.openIframe();
            }
        });
        },
			pay_with_card(id){
				const payload = {card_id:id, payment_method:'1', order_ref:this.$store.state.order.reference}
				Api.axios_instance.post(Api.baseUrl+'/payment/order/pay', payload)
				.then(response => {
					this.$emit('change_state', this.state)
				})
				.catch(error => {
					if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data.detail}`)
                        }
                    }
				})
			},
			get_details(){
				this.transport_fare = this.$store.state.order.transport_fee
				Api.axios_instance.get(Api.baseUrl+'/payment/user/card/get')
				.then(response =>{
				this.cards = response.data
			})
			}

		},
		mounted(){
			this.get_details()
			this.$store.state.order.transport_fee
		},
			computed:{
			  	data: function () {
       				return this.$store.state.order.transport_fee
    			},
				time: function(){
					return this.$store.state.order.set_time
				}
		}
	
	})
</script>
 
<style>
.hover_payment_button{
	border:1px solid #f0f0f0; border-radius:20px; padding:17px
}
.hover_payment_button:hover{
		color:#ff6600 !important;
		border-color:#ff6600 ;
		cursor: pointer;
 	}
	 
</style>