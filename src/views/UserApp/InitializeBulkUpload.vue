<template>
<div>
	<UserSideBar />
	<TopNavBar />
	    <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item "><a href="/">Dashboard</a></li>
						<li class="breadcrumb-item active"><a href="/update-profile">Bulk Upoad Initialize</a></li>
					</ol>
                </div>
			    <div class="row">
                    <div class="col-lg-8">
                        <div class="profile card card-body px-3 pt-3 pb-0">
                            <div class="profile-head">
                               
                                <div class="profile-info">
									<div class="profile-photo">
										<img src="../../statics/cloud-upload.png" class="img-fluid rounded-circle" alt="">
									</div>
									<div class="profile-details">
										<div class="profile-name px-3 pt-2">
											<h4 class="mb-0">Please input all details to proceed with bulk upload </h4>
                                            <p>{{first_name}} {{last_name}}</p>
										</div>
										
									</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-8 mb-4"> 
                        <div class="card">
                            <div class="card-body">
                                <div class="profile-tab">
                                    <div class="custom-tab-1">
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item "><a href="#profile-settings" data-bs-toggle="tab" class="nav-link active show">Enter Description </a>
                                            </li>
                                        </ul>
                                        <div class="tab-content active">
                                            <div id="profile-settings" class="tab-pane fade  active show">
                                                <div class="pt-3">
                                                    <div class="settings-form">
                                                        <form @submit.prevent="set_country">
                                                            <div class="row">
                                                                <div class="mb-3 col-md-12">
                                                                    <label class="form-label"  style="color:#000; font-size:20px">Description</label>
                                                                    <textarea class="form-control"  placeholder="Pleae give more description about this delivery"/>
                                                                </div>
                                                               
                                                            </div>
                                                            <br>
                                                          </div>
                                                        <br>
                                                        <button class="btn btn-rounded btn-primary" type="submit">Proceed bulk upload</button>
                                                        </form> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
								</div>
                            </div>
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
import TopNavBar from '../../components/TopNavBar.vue'
import { createToast } from 'mosha-vue-toastify';
import Api from "../Api.js"
	export default defineComponent({
		name: "InitializeBulkUpload",
		components: {UserSideBar, TopNavBar},
		data(){
			return {
                country: '',
                region: '',
                description: '',
                first_name: '',
                last_name: '',
                transport_type: []
			}
		},
        methods: {
            set_country(){
                console.log(JSON.stringify(this.transport_type));
                const data = {
                    country_code:  this.country,
                    state_code: this.region,
                    transport_type: this.transport_type,
                    // public_key: localStorage.getItem('token')
                }
                Api.axios_instance.post(Api.baseUrl+'/bulkupload/search', data)
                .then( response => {
                   console.log(this.response);
                })
                .catch(error => {
                    console.log(error.response);
                })
            },

            get_details(){
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
                    this.first_name = response.data.first_name
                    this.last_name = response.data.last_name
                    this.email = response.data.email
					// this.$store.commit('set_user_details', data)
				})
            },
            // handleFileUpload(){
            //     this.image = this.$refs.image.files[0];
            // }
        },
        
        mounted(){
            this.get_details()
        },
        // computed: {
        //     update_storage: function(){
        //         window.localStorage.setItem 
        //     }
        
	})
</script>