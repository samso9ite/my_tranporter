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
						<li class="breadcrumb-item active">Delivery Link</li>
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
										</div>
										<div class="profile-email px-2 pt-2">
											<p style="color: black">Delivery link allows yout to send items or goods to friends, family and your customers. You create the link, they make payment and you get a 5% commission when order is completed.</p>
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
                                   <div class="custom-tab-1" style="margin-top:2em">
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item "><a href="#profile-settings" data-bs-toggle="tab" class="nav-link active show">Delivery Links</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content active">
                                            <div id="profile-settings" class="tab-pane fade  active show">
                                                <div class="pt-3">
                                                    <table class="table" style="margin-bottom: 2em; padding-bottom:4em">
                                                        <tbody>
                                                             <th>
                                                                
                                                             </th>
                                                            <tr v-for="link in links" :key="link">
                                                                <td>{{link.created_at}}</td>
                                                                <td>{{link.pickup_location}}</td>
                                                                <td v-if="link.is_active" style="color: green"><b>Link Active</b></td>
                                                                <td v-else style="color: red"><b>Link Used</b></td>
                                                                <td><button class="btn btn-rounded btn-primary" @click="copyLink(link.link)"> <i class="fa fa-copy"></i>  Copy Link  </button> </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                   <div class="settings-form">
                                                        <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                                            </button>
                                                            <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                                        </div>
                                                        <form @submit.prevent="addLink">
                                                            <div class="row">
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label" style="color:#000; font-size:20px">Pickup Location</label>
                                                                    <GMapAutocomplete
                                                                        placeholder="Enter Address"
                                                                        class="form-control"
                                                                        v-model= "address"
                                                                        @place_changed="setAddress"
                                                                    >
                                                                    </GMapAutocomplete>
                                                                </div>
                                                            <div class="mb-3 col-md-6">
                                                                <label class="form-label" style="color:#000; font-size:20px">Item Price</label>
                                                                <input type="number" class="form-control"   v-model="item_price">
                                                            </div>
                                                            <div class="mb-3 col-md-12">
                                                                <label class="form-label" style="color:#000; font-size:20px">Item Description</label>
                                                                <textarea class="form-control" v-model="item_description" />
                                                            </div>
                                                            </div>
                                                            <button class="btn btn-rounded btn-primary" type="submit" :disabled="loading">Create New Link </button>
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
import Api from "../Api.js"
	export default defineComponent({
		name: "DeliveryLink",
		components: {UserSideBar, TopNavBar},
		data(){
			return {
                links: [],
                pickup_location: '',
                pickup_longitude: '',
                pickup_latitude: '',
                item_price: '',
                item_description: '',
                loading: false,
                errors: [],
                address: ''
			}
		},
        methods: {
            copyLink(copied_link){
                console.log(copied_link);
                navigator.clipboard.writeText(copied_link);
                this.$toast.success(`Link Copied`)
            },
            setAddress(place) {
                this.pickup_location = place.formatted_address;
                this.pickup_longitude = place.geometry.location.lng();
                this.pickup_latitude = place.geometry.location.lat();
            },
            getAllLinks(){
                Api.axios_instance.get(Api.baseUrl+'/delivery_link/user/links/get')
                .then(response => {
                    this.links = response.data
                })
                .catch(err => {
                    console.log(error.response);
                })
            },
            addLink(){
                this.loading = true;
                const data = {
                    pickup_location: this.pickup_location,
                    pickup_latitude: this.pickup_latitude,
                    pickup_longitude: this.pickup_longitude,
                    item_price: this.item_price,
                    item_description : this.item_description
                }
                Api.axios_instance.post(Api.baseUrl+'/delivery_link/initialize', data)
                .then( response => {
                    this.getAllLinks()
                    this.$toast.success(`New delivery link created`)
                    this.address = '' 
                    this.item_price = ''
                    this.item_description = ''
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
            }
        },
        mounted(){
            this.getAllLinks()
        },
    
	})
</script>