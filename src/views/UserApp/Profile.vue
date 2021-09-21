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
						<li class="breadcrumb-item "><a href="/">Dashboard</a></li>
						<li class="breadcrumb-item active"><a href="/update-profile">Profile</a></li>
					</ol>
                </div>
			    <div class="row">
                    <div class="col-lg-8">
                        <div class="profile card card-body px-3 pt-3 pb-0">
                            <div class="profile-head">
                               
                                <div class="profile-info">
									<div class="profile-photo">
										<img src="../../statics/avatar.png" class="img-fluid rounded-circle" alt="">
									</div>
									<div class="profile-details">
										<div class="profile-name px-3 pt-2">
											<h4 class="text-primary mb-0">{{first_name}} {{last_name}}</h4>
                                            <p>User</p>
										</div>
										<div class="profile-email px-2 pt-2">
											<h4 class="text-muted mb-0">{{email}}</h4>
											<p>Email</p>
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
                                            <li class="nav-item "><a href="#profile-settings" data-bs-toggle="tab" class="nav-link active show">Profile Setting</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content active">
                                           
                                            <div id="profile-settings" class="tab-pane fade  active show">
                                                <div class="pt-3">
                                                    <div class="settings-form">
                                                        <form @submit.prevent="update_profile">
                                                            <div class="row">
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">First Name</label>
                                                                    <input type="text" placeholder="" class="form-control" name="first_name" v-model="first_name">
                                                                </div>
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Last Name</label>
                                                                    <input type="text" placeholder="" class="form-control"  name="last_name" v-model="last_name">
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label class="form-label">Address</label>
                                                                <input type="text" placeholder="1234 Main St" class="form-control"  name="address" v-model="address">
                                                            </div>
                                                           
                                                            <div class="row">
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">City</label>
                                                                    <input type="text" class="form-control" name="city" v-model="city">
                                                                </div>
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Gender</label>
                                                                    <select class="form-control default-select wide" id="inputState" name="gender" v-model="gender">
                                                                        <option selected="" value="default">Choose...</option>
                                                                        <option value="Male">Male</option>
                                                                        <option value="Female">Female</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-lg-6 ">  
                                                                    <label class="form-label">Upload Profile Picture</label>
                                                                 <div class="input-group mb-3 ">
                                                                      
                                                                    <span class="input-group-text">Upload</span>
                                                                    <div class="form-file">
                                                                        <input type="file" class="form-file-input form-control" ref="image" v-on:change="handleFileUpload()">
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                           <button class="btn btn-rounded btn-primary" type="submit">Save  </button>

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

					<!-- -->
             
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
		name: "Profile",
		components: {UserSideBar, TopNavBar},
		data(){
			return {
                first_name: '',
                last_name: '',
                email: '',
                address: '',
                gender: 'default',
                city:'',
                image:''
			}
		},
        methods: {
            update_profile(){
                const formData = {
                first_name : this.first_name,
                last_name: this.last_name,
                address: this.address,
                gender: this.gender,
                city: this.city, 
                email:''
                }
                formData.append('image', this.image);
                Api.axios_instance.put(Api.baseUrl+'/auth/user/profile/update', formData)
                .then(response => {
                    createToast('Profile Updated')
                    console.log(response.data.data.first_name);
                    localStorage.setItem('first_name', response.data.data.first_name)
                    localStorage.setItem('last_name', response.data.data.last_name)
                })
                .catch(error =>{
                    console.log(error.response)
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
					this.$store.commit('set_user_details', data)
				})
                // this.first_name =  this.$store.state.user.first_name
                // this.last_name = this.$store.state.user.last_name
                // this.email = this.$store.state.user.email
                // console.log(this.$store.state.user)
            },
            handleFileUpload(){
                this.image = this.$refs.image.files[0];
            }
        },
        
        mounted(){
            this.get_details()
        },
        computed: {
            update_storage: function(){
                window.localStorage.setItem 
            }
        }
	})
</script>