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
						<li class="breadcrumb-item active"><a href="/update-profile">Bulk Upoad </a></li>
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
                                            <li class="nav-item "><a href="#profile-settings" data-bs-toggle="tab" class="nav-link active show">Set Transport Channel </a>
                                            </li>
                                        </ul>
                                        <div class="tab-content active">
                                            <div id="profile-settings" class="tab-pane fade  active show">
                                                <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close" @click="clearErrors">
                                                    </button>
                                                    <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                                </div>
                                                <div class="pt-3">
                                                    <div class="settings-form">
                                                        <form @submit.prevent="set_country">
                                                            <div class="row">
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label"  style="color:#000; font-size:20px">Select Country</label>
                                                                    <country-select v-model="country" :country="country" class="form-control" topCountry="NG" whiteList="['NG', 'DZ', 'AO', 'CM', 'CG', 'CI', 'EG', 'GA', 'GM', 'GH', 'GN', 'KE', 'ML', 'NE', '	RW', 'SN', 'TG', 'TN', 'ZM', 'ZW']" />
                                                                </div>
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label" style="color:#000; font-size:20px">Select State/Region</label>
                                                                    <region-select v-model="region" :country="country" class="form-control" :region="region" />
                                                                </div>
                                                                 <div class="mb-3 col-md-12">
                                                                    <label class="form-label" style="color:#000; font-size:20px">Description</label>
                                                                    <textarea class="form-control" v-model="description" />
                                                                </div>
                                                            </div>
                                                            <br>
                                                           <div class="col-lg-12">

                                                            <label class="form-label"  style="color:#000; font-size:20px">Select transport channel(s)</label>
                                                            <div class="row">
                                                                <div class="col">
                                                                    <div class="form-check custom-checkbox mb-3 checkbox-warning check-xl">

                                                                        <input type="checkbox" class="form-check-input" checked id="BIKE" value="BIKE"  v-model="transport_type">
                                                                        <label class="form-check-label" for="BIKE" style="font-size:19px">Bike</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="form-check custom-checkbox mb-3 checkbox-warning check-xl">

                                                                        <input type="checkbox" class="form-check-input" checked id="BICYCLE" value="BICYCLE" v-model="transport_type">
                                                                        <label class="form-check-label" for="BICYCLE" style="font-size:19px">Bicycle</label>
                                                                    </div>
                                                                </div>
                                                                 <div class="col">
                                                                    <div class="form-check custom-checkbox mb-3 checkbox-warning check-xl">

                                                                        <input type="checkbox" class="form-check-input"  id="VAN" value="VAN" v-model="transport_type">
                                                                        <label class="form-check-label" for="VAN" style="font-size:19px">Van</label>
                                                                    </div>
                                                                </div>
                                                                 <div class="col">
                                                                    <div class="form-check custom-checkbox mb-3 checkbox-warning check-xl">

                                                                        <input type="checkbox" class="form-check-input"  id="CAR" value="CAR" v-model="transport_type">
                                                                        <label class="form-check-label" for="CAR" style="font-size:19px">Car</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col">
                                                                    <div class="form-check custom-checkbox mb-3 checkbox-warning check-xl">

                                                                        <input type="checkbox" class="form-check-input"  id="DRONE"  value="DRONE" v-model="transport_type">
                                                                        <label class="form-check-label" for="DRONE" style="font-size:19px">Drone</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col">
                                                                    <div class="form-check custom-checkbox mb-3 checkbox-warning check-xl">
                                                                        <input type="checkbox" class="form-check-input"  id="FLIGHT" value="FLIGHT" v-model="transport_type" >
                                                                        <label class="form-check-label" for="FLIGHT" style="font-size:19px" >Flight</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br>
                                                           
                                                        <button class="btn btn-rounded btn-primary" type="submit" :disabled="loading">Proceed Upload  </button>

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
		name: "SetBulkRegion",
		components: {UserSideBar, TopNavBar},
		data(){
			return {
                first_name: '',
                last_name: '',
                description: '',
                country: '',
                region: '',
                transport_type: [],
                errors: [],
                loading: false,
			}
		},
        methods: {
            set_country(){
                this.errors.splice(0);
                console.log(JSON.stringify(this.transport_type));
                const data = {
                    country_code:  this.country,
                    state_code: this.region,
                    transport_type: this.transport_type,
                    // public_key: localStorage.getItem('token')
                }
                Api.axios_instance.post(Api.baseUrl+'/bulkupload/search', data)
                .then( response => {
                    const store_data = {
                        country_code:  this.country,
                        state_code: this.region,
                        transport_type: this.transport_type,
                        partners: response.data.recommended_merchants,
                        description: this.description
                    }
                    this.$store.commit('set_bulk_upload', store_data)
                    this.$router.push('/bulk-upload-partners') 
                  })
                .catch(error => {
                    for(const property in  error.response.data){
                        this.errors.push(`${property}:${error.response.data.detail}`)
                    }
                })
                .finally(() => {
                    this.loading = false
                })
            },
            clearErrors(){
                this.errors.splice(0);
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
					
				})
            },
        },
        
        mounted(){
            this.get_details()
        },
	})
</script>