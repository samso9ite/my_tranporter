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
						<li class="breadcrumb-item"><a href="/order-history">Upload </a></li>
					</ol>
                </div>
				<!-- <div class="form-head mb-4 d-flex flex-wrap align-items-center">
					<div class="me-auto">
						<h2 class="font-w600 mb-0">Order List</h2>
						<p class="text-light">View All Orders</p>
					</div>	
					
				</div> -->

				

				<div class="file-upload">
					<!-- <button class="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Add Image</button> -->

					<div class="image-upload-wrap">
						<!-- <img src="../../statics/cloud-upload.png" class="img-fluid rounded-circle" alt="" > -->
						<input class="file-upload-input" type='file'  ref="excel_file" @change="processFile"  accept=".csv,.xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" />
						<div class="drag-text">

							<img src="../../statics/sheets.png" class="uploadImg" alt="" v-if="this.file_name" style="margin-top:10px"> 
							<img src="../../statics/cloud-upload.png" class="uploadImg" alt="" v-else> 
							<h5 style="margin-top:10px"> {{file_name}} </h5>
							<h3 style="margin-top:-10px">Drag and drop a file or select add Image</h3>
							
						</div>
					</div>
					
					</div>
				<div class="col-12">
					<div class="card">
						<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close" @click="clearErrors">
							</button>
							<span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
						</div>
						<div class="card-body">
								<div class="row">
					<div class="col-lg-12">
						<div class="table-responsive table-hover fs-14">
							<table class="table mb-4 dataTablesCard card-table" id="orderTable">
								<thead> 
									<tr>
										<th> Pickup Location</th>
										<th> Destination Location</th>
										<th> Transport Type </th>
										<th> Item Description</th>
										<th> Extra Description</th>
										
									</tr>
								</thead>
								<tbody>
									<tr v-for="(order, index) in main_order_list">
										<td>
											<GMapAutocomplete
												placeholder="Set Pickup Location"
												class="form-control"
												:value="order.pickup_location"
												@keyup="setMapIndex(index)"
												@place_changed="setOrigin"
											>
											</GMapAutocomplete> 
										</td>
										<td>
											<GMapAutocomplete
												placeholder="Set Pickup Location"
												class="form-control"
												:value="order.destination_location"
												@keyup="setMapIndex(index)"
												@place_changed="setDestination"
											>
											</GMapAutocomplete> 
										</td>
										<td><input type="text" placeholder = "Bike" class="form-control"   style="border:0px" ref="transportChange" :value="order.transport_type" @keyup="setTranportType($event, index)"></td>
										<td><input type="text" placeholder = "This package has to be delivered to Seunfunmi" class="form-control"  style="border:0px" :value="order.item_description" @input="setItemDescription($event, index)"></td>
										<td><input type="text" placeholder = "Call this number when you get there" class="form-control" style="border:0px" :value="order.extra_description"  @keyup="setExtraDescription($event, index)"></td>
									</tr>
									
								</tbody>
							</table>
							<button class="btn btn-rounded btn-primary" type="submit" @click="sendOrder" :disabled="loading">Send Order  </button>
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
import Api from "../Api.js"
import TopNavBar from '../../components/TopNavBar.vue'
	export default defineComponent({
		name: "OrderHistory",
		components: {UserSideBar, TopNavBar},
		data(){
			return {
			status: '0',
			// order_list:[],
			main_order_list: [],
			map_index: '',
			file_name: '',
			errors: [],
			loading: false
			}
		},
	methods: {
		processFile(event){
			this.file_name = event.target.files[0].name
			let file = event.target.files[0]
			const formData = new FormData()
			formData.append("bulk_record_ref", this.$store.state.bulk_upload_ref.upload_reference)
			formData.append("csv_file", file)
			Api.axios_instance.post(Api.baseUrl+'/bulkupload/importorders', formData)
			.then(response => {
				console.log(response.data);
				this.main_order_list = response.data
			})
			.catch(error => {
				console.log(error.response);
			})
		},
		setTranportType(event, index){
			this.main_order_list[index]['transport_type'] =  event.target.value
			console.log(this.main_order_list[index]);
		},
		setItemDescription(event, index){
			this.main_order_list[index]['item_description'] =  event.target.value
			console.log(this.main_order_list[index]);
		},
		setExtraDescription(event, index){
			this.main_order_list[index]['extra_description'] =  event.target.value
			console.log(this.main_order_list[index]);
		},
		setMapIndex(index){
			this.map_index = index

		},
		radLogic(Value){
			 return Value * Math.PI / 180;
		},

		// This reset the  pickup location pickup latitude and recaculates the distance in km 
		setOrigin(data){
			let pick_up_lat = data.geometry.location.lat()
			let pick_up_lng = data.geometry.location.lng()
			console.log(pick_up_lat);
			console.log(pick_up_lng);
			console.log(this.map_index);
			let destination_latitude = this.main_order_list[this.map_index]['destination_latitude']
			let destination_longitude = this.main_order_list[this.map_index]['destination_longitude']
			this.main_order_list[this. map_index]['pickup_location'] = data.formatted_address
			this.main_order_list[this.map_index]['pickup_latitude'] = pick_up_lat.toString()
			this.main_order_list[this.map_index]['pickup_longitude'] = pick_up_lng.toString()
			var R = 6371; // km
			var dLat = this.radLogic(destination_latitude-pick_up_lat);
			var dLon = this.radLogic(destination_longitude-pick_up_lng);
			var lat1 = this.radLogic(pick_up_lat);
			var lat2 = this.radLogic(pick_up_lng);
			var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
				Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
			var d = R * c;
			this.main_order_list[this.map_index]['distance_in_km'] = d.toString()
			// console.log(d);	
			console.log(this.main_order_list[this.map_index]['distance_in_km']);
			// console.log(this.main_order_list[this.map_index]);
			
		},
		
		// This reset the  destination location destination latitude and recaculates the distance in km 
		setDestination(data){
			let destination_lat = data.geometry.location.lat()
			let destination_lng = data.geometry.location.lng()
			console.log(this.map_index);
			let pickup_latitude = this.main_order_list[this.map_index]['pickup_latitude']
			let pickup_longitude = this.main_order_list[this.map_index]['pickup_longitude']
			this.main_order_list[this.map_index]['destination_location'] = data.formatted_address
			this.main_order_list[this.map_index]['destination_latitude'] = destination_lat;
			this.main_order_list[this.map_index]['destination_longitude'] = destination_lng;
			var R = 6371; // km
			var dLat = this.radLogic(destination_lat-pickup_latitude);
			var dLon = this.radLogic(destination_lng-pickup_longitude);
			var lat1 = this.radLogic(pickup_latitude);
			var lat2 = this.radLogic(pickup_longitude);

			var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
				Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
			var d = R * c;
			this.main_order_list[this.map_index]['distance_in_km'] = d
		},

		sendOrder(){
			this.loading = true
			let order_list = []
			this.main_order_list.map(order => {
				order_list.push ({
				merchant_id : this.$store.state.bulk_upload_ref.partner_id,
				pickup_location : order.pickup_location,
				pickup_longitude : order.pickup_longitude,
				pickup_latitude : order.pickup_latitude,
				destination_location : order.destination_location,
				destination_latitude : order.destination_latitude,
				destination_longitude : order.destination_longitude,
				transport_type : order.transport_type,
				item_description : order.item_description,
				extra_description : order.extra_description,
				id: null,
				distance_in_km : order.distance_in_km,
				bulk_order_ref : this.$store.state.bulk_upload_ref.upload_reference
				})	
			})
			Api.axios_instance.post(Api.baseUrl+'/bulkupload/create', order_list)
			.then(response => {
				// console.log(response);
				this.$toast.success(`Hey! Orders has been created`);
				this.$router.push('/')
			})
			.catch(error => {
				for(const property in error.response.data){
					this.errors.push(`${property}:${error.response.data.detail}`)
				}
			})
			.finally(() => {
				this.loading = false
			})
		},
	},
	// watch: {

	// }
	})

</script>

<style scoped>
.uploadImg{
	width: 7%
}
.btn:hover{
	background-color: #ff6905;
}



.file-upload {
  background-color: #ffffff;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.file-upload-btn {
  width: 100%;
  margin: 0;
  color: #fff;
  background: #ff6600;
  border: none;
  padding: 10px;
  border-radius: 4px;
  border-bottom: 4px solid #15824B;
  transition: all .2s ease;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
}

.file-upload-btn:hover {
  background: #1AA059;
  color: #ffffff;
  transition: all .2s ease;
  cursor: pointer;
}

.file-upload-btn:active {
  border: 0;
  transition: all .2s ease;
}

.file-upload-content {
  /* display: none; */
  text-align: center;
}

.file-upload-input {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}

.image-upload-wrap {
  margin-top: 20px;
  border: 4px dashed #ff6600;
  position: relative;
}

.image-dropping,
.image-upload-wrap:hover {
  background-color: #ccc;
  /* border: 4px dashed #ffffff; */
}

.image-title-wrap {
  padding: 0 15px 15px 15px;
  color: #222;
}

.drag-text {
  text-align: center;
}

.drag-text h3 {
  font-weight: 100;
  text-transform: uppercase;
  color: #ff6600;
  padding: 60px 0;
}

.file-upload-image {
  max-height: 200px;
  max-width: 200px;
  margin: auto;
  padding: 20px;
}

.remove-image {
  width: 200px;
  margin: 0;
  color: #fff;
  background: #cd4535;
  border: none;
  padding: 10px;
  border-radius: 4px;
  border-bottom: 4px solid #b02818;
  transition: all .2s ease;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
}

.remove-image:hover {
  background: #c13b2a;
  color: #ffffff;
  transition: all .2s ease;
  cursor: pointer;
}

.remove-image:active {
  border: 0;
  transition: all .2s ease;
}

</style>