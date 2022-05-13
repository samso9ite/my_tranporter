<template>
<div>
	<UserSideBar />
	<TopNavBar />
		<!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="/">Dashboard</a></li>
						<li class="breadcrumb-item"><a href="/order-history">Select Preffered Partner</a></li>
					</ol>
                </div>
			<div class="row mb-4 align-items-center" v-for="partner in partners" :key="partner">
					<div class="col-xl-9">
						
						<div class="card m-0 ">
							<div class="card-body px-4 py-3 py-lg-2">
								<div class="row align-items-center">
									<div class="col-xl-3 col-xxl-12 col-lg-12 my-2">
										<div class="media align-items-center style-2">
											<span class="me-3">
											<img :src="partner.logo" v-if="partner.logo" />
											<img src="../../statics/avatar.png" v-else/>
											</span>
											<div class="media-body ml-1">
												<!-- <p class="mb-0 fs-12">Total Order</p> -->	
												<h4 class="mb-0 font-w600  fs-22" v-if="partner.name.length < 15">{{partner.name}}</h4>
												<h4 class="mb-0 font-w600  fs-22" v-else>{{partner.name.substring(0,8)+".." }}</h4>
											</div>
										</div>
									</div>
									<div class="col-xl-7 col-xxl-12 col-lg-12">
										<div class="row align-items-center">
											<div class="col-xl-4 col-md-4 col-sm-4 my-2">
												<div class="media align-items-center style-2">
													<span class="">
														<i class="fa fa-check" style="color:#ff6600; font-size:20px" > </i>
													</span>
													<div class="media-body ml-1">
														<p class="mb-0 fs-12">Completed Deliveries</p>
														<h4 class="mb-0 font-w600  fs-22">{{partner.completedOrder}} deliveries</h4>
													</div>
												</div>
											</div>
											<div class="col-xl-4 col-md-4 col-sm-4 my-2">
												<div class="media align-items-center style-2">
													<span class="me-3">
														<i class="fa fa-money" style="color:#ff6600; font-size:20px" > </i>
													</span>
													<div class="media-body ml-1">
														<p class="mb-0 fs-12">Rate/Km</p>
														<h4 class="mb-0 font-w600  fs-22">#{{partner.rateInKm}}</h4>
													</div>
												</div>
											</div>
											<div class="col-xl-4 col-md-4 col-sm-4 my-2">
												<div class="media align-items-center style-2">
													<div class="media-body ml-1">
														<p class="mb-0 fs-12">Rating</p>
														<h4 class="mb-0 font-w600 fs-22" v-if="partner.ratings == 1">
															<span><i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i></span>
														</h4>
														<h4 class="mb-0 font-w600 fs-22" v-if="partner.ratings == 2">
															<span><i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i>  <i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i></span>
														</h4>
														<h4 class="mb-0 font-w600 fs-22" v-if="partner.ratings == 3">
															<span><i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i>  <i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i> <i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i></span>
														</h4>
														<h4 class="mb-0 font-w600 fs-22" v-if="partner.ratings == 4">
															<span><i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i>  <i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i> <i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i> <i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i></span>
														</h4>
														<h4 class="mb-0 font-w600 fs-22" v-if="partner.ratings == 5">
															<span><i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i><i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i>  <i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i> <i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i> <i class="fa fa-star" style="color:#ff6600; font-size:20px" > </i></span>
														</h4>
													</div>
												</div>
											</div>

											
										</div>
									</div>
									
								</div>							
							</div>
						</div>
					</div>
					<div class="col-xl-3 align-self-start mt-3 mt-xl-0 Generate">
						<a class="btn btn-secondary d-block" @click="initializeOrder(partner.merchant_id)"><i class="fa fa-check scale5 me-3"></i>Select Partner  </a>
					</div>	
				</div>
            </div>		
        </div>
</div>

</template>

<script>
import { defineComponent } from 'vue'
import UserSideBar from '../../components/UserSideBer.vue'
import Api from "../Api.js"
import TopNavBar from '../../components/TopNavBar.vue'
	export default defineComponent({
		name: "ListPartnersBulkUpload",
		components: {UserSideBar, TopNavBar},
		data(){
			return {
				merchant_id: '',
				partners: this.$store.state.bulkUploadStore.partners,
				loading: false
			}
		},
		methods: {
			initializeOrder(merchant_id){
				this.loading = true
				const data = {
					country_code : this.$store.state.bulkUploadStore.country_code,
					state_code: this.$store.state.bulkUploadStore.state_code,
					merchant: merchant_id,
					description: this.$store.state.bulkUploadStore.description,
				}
				Api.axios_instance.post(Api.baseUrl+'/bulkupload/initialize', data)
				.then(response => {
					const refData = { 
						upload_reference: response.data.ref_id,
						partner_id: merchant_id
					}
					this.$store.commit('bulk_upload_reference', refData)
					this.$router.push('/file-upload')
				})
				.catch( error => {
					for (const property in error.response.data){
						this.errors.push(`${property}:${error.response.data.detail}`)
					}
				})
				.finally(() => {
                    this.loading = false
                })
			}
		},

		filters: {
			truncate: function(value, length) {
				if(value.length < length) {
					return value;
				}

				length = length - 3;
				return value.substring(0, length) + '...';
				}
		}
		// filters: {
		// 	truncate: function (str, num=12) {
		// 		return str.split("").slice(0, num).join("");
		// 	}
		// }
	
	})
</script>

<style scoped>
.btn:hover{
	background-color: #ff6905;
}

.media img {
	width: 25%;
}
</style>