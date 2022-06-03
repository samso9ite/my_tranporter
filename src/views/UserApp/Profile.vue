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
                                <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                    </button>
                                    <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                </div>
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
                                                          
                                                           
                                                            <div class="row">
                                                                
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
                                                           <button class="btn btn-rounded btn-primary" type="submit" :disabled="loading"> Save  </button>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="custom-tab-1" style="margin-top:2em">
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item "><a href="#profile-settings" data-bs-toggle="tab" class="nav-link active show">User Locations</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content active">
                                           
                                            <div id="profile-settings" class="tab-pane fade  active show">
                                                <div class="pt-3">
                                                <table class="table" style="margin-bottom: 2em; padding-bottom:4em">
                                                    <tbody>
                                                        <tr v-for="location in locations" :key="location">
                                                            <td>{{location.address}}</td>
                                                            <td>{{location.type}}</td>
                                                        </tr>
                                                    
                                                    </tbody>
                                                </table>
                                <div class="settings-form">
                                    <form @submit.prevent="addLocation">
                                        <div class="row">
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Address</label>
                                                <GMapAutocomplete
                                                    placeholder="Enter Address"
                                                    class="form-control"
                                                    @place_changed="setAddress"
                                                >
                                                </GMapAutocomplete>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">Type</label>
                                                <select class="form-control default-select wide" id="inputState" name="type" v-model="type">
                                                    <option selected="" value="default">Select Type...</option>
                                                    <option value="HOME">Home</option>
                                                    <option value="WORK">Work</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <button class="btn btn-rounded btn-primary" type="submit" :disabled="loading">Add Location </button>

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
		name: "Profile",
		components: {UserSideBar, TopNavBar},
		data(){
			return {
                first_name: '',
                last_name: '',
                email: '',
                address_multiple_location: '',
                gender: 'default',
                lat_multiple_location: '',
                lng_multiple_location: '',
                city:'',
                image:'',
                type: 'default',
                errors: [],
                locations: []
			}
		},
        methods: {
            update_profile(){
                this.loading = true
                const formData = {
                first_name : this.first_name,
                last_name: this.last_name,
                address: this.address,
                gender: this.gender,
                city: this.city, 
                email:'',
                loading: false
                }
                formData.append('image', this.image);
                Api.axios_instance.put(Api.baseUrl+'/auth/user/profile/update', formData)
                .then(response => {
                    createToast('Profile Updated')
                    localStorage.setItem('first_name', response.data.data.first_name)
                    localStorage.setItem('last_name', response.data.data.last_name)
                })
                .catch(error =>{
                    if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data.detail}`)
                        }
                    }
                })
                .finally(() => {
                    this.loading = false
                }
                )
            },
            setAddress(place) {
                this.address_multiple_location = place.formatted_address;
                this.lng_multiple_location = place.geometry.location.lng();
                this.lat_multiple_location = place.geometry.location.lat();
            },
            getAllLocations(){
                Api.axios_instance.get(Api.baseUrl+'/auth/user/locations/get')
                .then(response => {
                    this.locations = response.data
                })
                .catch(err => {
                    console.log(error.response);
                })
            },
            addLocation(){
                this.loading = true;
                const data = {
                    address: this.address_multiple_location,
                    latitude: this.lat_multiple_location,
                    longitude: this.lng_multiple_location,
                    type: this.type
                }
                Api.axios_instance.post(Api.baseUrl+'/auth/user/locations/home', data)
                .then( response => {
                    this.getAllLocations()
                    this.$toast.success(`New location has been added`)
                    }
                )
                .catch(error =>{
                    if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data}`)
                        }
                    }
                })
                .finally(
                    this.loading = false
                )
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
            },
            handleFileUpload(){
                this.image = this.$refs.image.files[0];
            }
        },
        
        mounted(){
            this.get_details()
            this.getAllLocations()
        },
        computed: {
            update_storage: function(){
                window.localStorage.setItem 
            }
        }
	})
</script>