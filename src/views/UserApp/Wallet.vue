<template>
<div>
	<UserSideBar />
	<TopNavBar />
		<!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body" >
            <!-- row -->
			<div class="container-fluid" >
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item "><a href="/">Dashboard</a></li>
						<li class="breadcrumb-item active"><a href="/wallet">Wallet</a></li>
					</ol>
                </div>
				<div class="row">
				<div class="col-xl-6 col-xxl-6">
					<div class="col-xl-12">
						<div class="card overflow-hidden">
							<div class="card-body">
								<div class="text-center">
									<div class="profile-photo">
										<img src="images/wallet.svg" width="60" class="img-fluid" alt="">
									</div>
									<h3 class="mt-4 mb-1">Wallet</h3>
									<!-- <p class="text-muted">Senior Manager</p> -->
									<a class="btn btn-outline-primary btn-rounded mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Top Up Wallet</a> <a class="btn btn-outline-primary btn-rounded mt-3 px-5" data-bs-toggle="modal" data-bs-target="#makeWithdrawal">Make Withdrawal</a>
									<div class="modal fade modal fade bd-example-modal-lg" id="exampleModalCenter">
										<div class=" modal-dialog modal-dialog-centered  modal-md" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title"><b>Input Amount</b></h5>
													<button type="button" class="btn-close" data-bs-dismiss="modal" >
													</button>
												</div>
												<div class="modal-body">
												<div class="basic-form">
												<div class="mb-2 col-lg-12" style="margin-right:10px">
													<label class="sr-only">Amount</label>
													<input type="number" class="form-control" placeholder="Amount" name="amount" v-model="amount" pattern="[0-9]*">
												</div><br>
												<button type="submit" class="btn btn-primary mb-2" style="margin-right:1em"  data-bs-toggle="modal" data-bs-target="#cardsModal" >Fund with Card</button>
												<button  class="btn btn-primary mb-2 btn-bg" @click="payWithPaystack">Fund with Paystack</button>
											</div>
														
												</div>
												
											</div>
										</div>
									</div>
									
									<div class="modal fade modal fade bd-example-modal-lg" id="makeWithdrawal">
										<div class=" modal-dialog modal-dialog-centered  modal-md" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title"><b>Withdrawal</b></h5>
													<button type="button" class="btn-close" data-bs-dismiss="modal">
													</button>
												</div>

												<div class="modal-body">
													<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
														<!-- <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
														</button> -->
														<span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
													</div>
												<div class="basic-form">
												<div class="mb-2 col-lg-12" style="margin-right:10px">
													<label class="sr-only">Amount</label>
													<input type="number" class="form-control" placeholder="Amount" name="amount" v-model="withdrawal_amount"> <br>
													<input type="text" class="form-control" placeholder="Account Number" name="account_no" v-model="account_no"> <br>
									 				 <select
														id="bankCode"
													v-model="bank_code"
														class="form-control form-control-alternative"
													>
														<option value="">--Select Bank--</option>

														<option value="801">
														Abbey Mortgage Bank
														</option>

														<option value="044">
														Access Bank
														</option>

														<option value="063">
														Access Bank (Diamond)
														</option>

														<option value="035A">
														ALAT by WEMA
														</option>

														<option value="401">
														ASO Savings and Loans
														</option>

														<option value="50931">
														Bowen Microfinance Bank
														</option>

														<option value="50823">
														CEMCS Microfinance Bank
														</option>

														<option value="023">
														Citibank Nigeria
														</option>

														<option value="559">
														Coronation Merchant Bank
														</option>

														<option value="050">
														Ecobank Nigeria
														</option>

														<option value="562">
														Ekondo Microfinance Bank
														</option>

														<option value="50126">
														Eyowo
														</option>

														<option value="070">
														Fidelity Bank
														</option>

														<option value="51314">
														Firmus MFB
														</option>

														<option value="011">
														First Bank of Nigeria
														</option>

														<option value="214">
														First City Monument Bank
														</option>

														<option value="501">
														FSDH Merchant Bank Limited
														</option>

														<option value="00103">
														Globus Bank
														</option>

														<option value="058">
														Guaranty Trust Bank
														</option>

														<option value="51251">
														Hackman Microfinance Bank
														</option>

														<option value="50383">
														Hasal Microfinance Bank
														</option>

														<option value="030">
														Heritage Bank
														</option>

														<option value="51244">
														Ibile Microfinance Bank
														</option>

														<option value="50457">
														Infinity MFB
														</option>

														<option value="301">
														Jaiz Bank
														</option>

														<option value="082">
														Keystone Bank
														</option>

														<option value="50211">
														Kuda Bank
														</option>

														<option value="90052">
														Lagos Building Investment Company Plc.
														</option>

														<option value="50563">
														Mayfair MFB
														</option>

														<option value="50304">
														Mint MFB
														</option>

														<option value="565">
														One Finance
														</option>

														<option value="999991">
														PalmPay
														</option>

														<option value="526">
														Parallex Bank
														</option>

														<option value="311">
														Parkway - ReadyCash
														</option>

														<option value="999992">
														Paycom
														</option>

														<option value="50746">
														Petra Mircofinance Bank Plc
														</option>

														<option value="076">
														Polaris Bank
														</option>

														<option value="101">
														Providus Bank
														</option>

														<option value="502">
														Rand Merchant Bank
														</option>

														<option value="125">
														Rubies MFB
														</option>

														<option value="51310">
														Sparkle Microfinance Bank
														</option>

														<option value="221">
														Stanbic IBTC Bank
														</option>

														<option value="068">
														Standard Chartered Bank
														</option>

														<option value="232">
														Sterling Bank
														</option>

														<option value="100">
														Suntrust Bank
														</option>

														<option value="302">
														TAJ Bank
														</option>

														<option value="51211">
														TCF MFB
														</option>

														<option value="102">
														Titan Bank
														</option>

														<option value="032">
														Union Bank of Nigeria
														</option>

														<option value="033">
														United Bank For Africa
														</option>

														<option value="215">
														Unity Bank
														</option>

														<option value="566">
														VFD Microfinance Bank Limited
														</option>

														<option value="035">
														Wema Bank
														</option>

														<option value="057">
														Zenith Bank
														</option>
													</select>
												</div><br>
												<!-- <button type="submit" class="btn btn-primary mb-2" style="margin-right:1em"  data-bs-toggle="modal" data-bs-target="#cardsModal" >Fund with Card</button> -->
												<button  class="btn btn-primary mb-2 btn-bg" @click="makeWithdrawal" :disabled="loading">Make Withdrawal</button>
											</div>
														
												</div>
												
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="card-footer pt-0 pb-0 text-center">
								<div class="row">
									<div class="col-4 pt-3 pb-3 border-end">
										<h3 class="mb-1">₦0.00</h3><span>Referal Earnings</span>
									</div>
									<div class="col-4 pt-3 pb-3 border-end">
										<h3 class="mb-1">₦{{wallet_balance}}</h3><span>Available</span>
									</div>
									<div class="col-4 pt-3 pb-3">
										<h3 class="mb-1">₦0.00</h3><span>Refund</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
				<div class="col-xl-6 col-xxl-6">
					<div class="card" style="background-color:#473b52">	
					<div class="card-header border-0 pb-0 align-items-center justify-content-center" v-if="update_cards.length">
						<div class="table-responsive" >
						<table class="table table-responsive-md" style="color:#fff"> 
							<tbody >
								<tr v-for="card in update_cards" :key="card">

									<td v-if="card.card_type == 'visa '"><strong><img src="../../statics/visae.png" /></strong></td>
									<td>**** **** **** {{card.last4digits}}</td>
									<td>{{card.card_holder}}</td>
									<td>
										<div class="d-flex">
											<!-- <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fa fa-pencil"></i></a> -->
											<a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<button type="button" class="btn btn-rounded" style="color:white" @click="AddCardWithPaystack"><span
							class="btn-icon-start text-primary" ><i class="fa fa-plus"></i>
						</span>Add Card</button>
					
						</div>
					</div>
					<div class="card-header border-0 pb-0" v-else>
						<div class="table-responsive" >
							<h3 style="color:white">Card hasn't been added</h3>
						<button type="button" class="btn btn-rounded" style="color:white" @click="AddCardWithPaystack"><span
							class="btn-icon-start text-primary" ><i class="fa fa-plus"></i>
						</span>Add Card</button>
					
						</div>
					</div>
				</div>
				</div>
				<div class="modal fade modal fade bd-example-modal-lg" id="cardsModal">
					<div class=" modal-dialog modal-dialog-centered  modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title"><b>Select Card</b></h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal">
								</button>
							</div>
							<div class="modal-body">
								<div class="table-responsive" v-if="card_id.length">
									<table class="table   table-bordered table-striped verticle-middle table-responsive-sm">
										<tbody>
											<tr v-for="card in update_cards" :key="card" class="bank" :class="{'card_active' : card.card_id  === id}" @click="select_card(card.card_id)"  >
												<td>
													<div class="form-check" style="">
														<input class="form-check-input" type="radio" v-bind:value="card.card_id" v-on:click="update_rate" name="card_id" v-model="card_id" >
														<img src="../../statics/visae.png" width="30" v-if="card.card_type == 'visa '" />
													</div>
												</td>
											
												<td>**** **** **** {{card.last4digits}}</td>
												<td>
													{{card.card_holder}}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<h4 v-else> Chief! Card hasn't been added, add a card first </h4>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-primary" @click="fund_with_card">Fund Now</button>
							</div>
						</div>
					</div>
					</div>

					</div>
					<div class="row" style="margin-top:3em">
					<div class="col-xl-12 card">	
							<div class="table-responsive table-hover fs-14">
							<table class="table mb-4 " id="orderTable">
								<thead> 
									<tr>
										<th>
											<h4> Latest Transactions</h4> 
										</th>
										
									</tr>
								</thead>
								<tbody v-if="this.latest_transactions">
									<tr v-for="transaction in latest_transactions" :key="transaction">
										<td>{{transaction.reference}}</td>
										<!-- <td>*****************567</td> -->
										<td class="wspace-no">{{transaction.order_date}}</td>
										<td>{{transaction.item_description}}</td>
										<td><span class="badge light badge-secondary">{{transaction.status.name}}</span></td>
										<td>
											<a href="javascript:void(0);" class="btn btn-secondary light btn-sm">#{{transaction.transport_fee}}</a>
										</td>
									</tr>
									
								</tbody>
							</table>
						</div>
					</div>
				</div>

				</div>
            </div>
			
        </div>
      
</template>

<script>
import { defineComponent } from 'vue'
import UserSideBar from '../../components/UserSideBer.vue'
import { createToast } from 'mosha-vue-toastify';
import TopNavBar from '../../components/TopNavBar.vue'
import 'mosha-vue-toastify/dist/style.css'
import Api from "../Api.js"
import { dataURItoBlob } from '../../../public/assets/vendor/dropzone/dist/dropzone';
	export default defineComponent({
		name: "Wallet",
		components: {UserSideBar, TopNavBar},
		data(){
			return {
			scriptLoaded: null,
			amount:'',
			card_id:'',
			transactions: [],
			latest_transactions: [],
			url: '', 
			id: '',
			account_no: '',
			bank_code: '',
			withdrawal_amount: '',
			errors: [],
			loading: false
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
			select_card(card){
				this.id = card
			},
			clearErrors(){
                    this.errors.splice(0);
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
		update_rate(){
		},
        payWithPaystack() {
			this.scriptLoaded &&
        	this.scriptLoaded.then(() => {
            const paystackOptions = {
                key: 'pk_live_7f774de7bb00dc0e58ac0ddb8aeaba8dd3f4dab3',
				email: JSON.parse(window.localStorage.getItem('email')),
                firstname: JSON.parse(window.localStorage.getItem('first_name)')),
                lastname: JSON.parse(window.localStorage.getItem('last_name')),
				amount: this.amount,
                ref: Math.random().toString(36),
				callback: response => {
					const data = {token:response.reference, amount:this.amount}
					Api.axios_instance.post(Api.baseUrl+'/payment/wallet/fund/paystack', data)
					.then(response => {
						$('#exampleModalCenter').modal('hide')
						Api.axios_instance.get(Api.baseUrl+'/auth/user/profile/get')
						.then(response => {
							createToast('Wow, easy')
							this.update_user_details()
							})
							
						.catch(error =>{
							console.log(error.response);	
						})
					})
                  
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
		 AddCardWithPaystack() {
		    this.scriptLoaded &&
        	this.scriptLoaded.then(() => {
            const paystackOptions = {
                key: 'pk_live_7f774de7bb00dc0e58ac0ddb8aeaba8dd3f4dab3',
                email: this.$store.state.user.email,
                firstname: this.$store.state.user.first_name,
                lastname: this.$store.state.user.last_name,
                // channels: this.channels,
                amount: 5000,
                // access_code: this.accessCode,
                ref: Math.random().toString(36),
				callback: response => {
					const data={reference:response.reference, amount:50000}
					Api.axios_instance.post(Api.baseUrl+'/payment/paystack/card/add', data)
					.then(response => {
						this.get_card()
					})
					.catch(error => {
						console.log(error.response)
					})
                  
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
		get_card(){
			Api.axios_instance.get(Api.baseUrl+'/payment/user/card/get')
			.then(response =>{
				this.$store.commit('add_card', {cards:response.data})
				this.cards = this.$store.state.user.cards
			})
			.catch(error => {
				console.log(error.response);
			
			});
    	}, 
		fund_with_card(){
			const formData = {card_id:this.card_id, amount:this.amount}
			Api.axios_instance.post(Api.baseUrl+'/payment/wallet/fund/card', formData)
			.then(response => {
				$('#exampleModalCenter').modal('hide')
				$('#cardsModal').modal('hide')
				this.update_user_details()
			})
			.catch(error => {
				console.log(error.response)
			})
		},
		update_user_details(){
			Api.axios_instance.get(Api.baseUrl+'/auth/user/profile/get')
			.then(response =>{
				const response_data = {
					email:response.data.email,
					first_name: response.data.first_name,
					last_name: response.data.last_name,
					wallet_balance: response.data.wallet_balance,
					phone: response.data.phone,
					image: response.data.image
				}
				this.$store.commit('set_user_details', response_data)
			})
			.catch(error => {
				console.log(error.response);
			})
			
		},

		// Funtion to make withdrawal for user
		makeWithdrawal(){
			this.clearErrors()
			this.loading = true
			console.log(this.loading);
			console.log(this.account_no);
			const data = {
				account_no: this.account_no,
				bank_code: this.bank_code,
				amount: this.withdrawal_amount
			}
			console.log(data)
			Api.axios_instance.post(Api.baseUrl +'/auth/user/funds/withdraw', data)
				.then(response => { 
					this.$toast.success(`Withdrawal Request Made`)
					$('#makeWithdrawal').collapse('hide');
					this.account_no = ''
					this.bank_code = ''
					this.withdrawal_amount = ''
				})
				.catch(error =>{
					console.log("Checking if this wrong")
					if(error.response){
						for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data[property]}`)
                        }
                    }
                })
                .finally(() => {
					// this.clearErrors()
					// this.account_no = ''
					// this.bank_code = ''
					// this.withdrawal_amount = ''
                    this.loading = false
            	})
		},
		
		getPaymentHistory(){
				const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
				Api.axios_instance.post(Api.baseUrl +'/payment/user/history', {merchant_id: merchant_token})
				.then(response => {
					this.all_payments = response.data.results
					this.payments = response.data.results
					this.total = response.data.count
				}
				)
				.catch(err => {
					console.log(err.response)
				})
				Api.axios_instance.post(Api.baseUrl+'/merchant/portal/profile/get', {merchant_id:merchant_token})
				.then((res => {
					const data = {
						pending_wallet_balance: res.data.pending_wallet_balance,
						wallet_balance: res.data.wallet_balance
					}
					this.$store.commit('storeProfile', data)
				}))
			},
		getLatestTransactions(){
			Api.axios_instance.get(Api.baseUrl+'/transporter/user/orders/get')
			.then(( res => {
				this.latest_transactions = res.data;
				// console.log(res.data);
			}))
		}
	},
	mounted(){
		this.get_card()	
		this.update_user_details()	
		this.getLatestTransactions()
	},
	computed: {
		wallet_balance: function (){
			const balance = this.$store.state.user.wallet_balance
			return balance.replace(/^"(.*)"$/, '$1')
		},
		update_cards: function(){
			return this.$store.state.user.cards
		}
		
	}
	
	})
</script>

<style scoped>
.btn-bg {
    color: #fff;
    background-color: #473b52;
	border-color: #473b52
}
.btn-bg:hover {
    color: #fff;
    background-color: #ff6600;
	border-color: #ff6600
	}
	.add_btn {
    width: 40px;
    height: 40px;}
.card_active{
	background-color: #473b52;
	color:#fff !important;
	border-radius:15px
}
/* .card:hover{
	background-color: #473b52;
	color:#fff !important;
	cursor:pointer;
	border-radius:15px
} */
	.modal { 
   background-color: rgba(0, 0, 0, 0.5)
}
</style>