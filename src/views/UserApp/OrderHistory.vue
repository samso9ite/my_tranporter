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
						<li class="breadcrumb-item"><a href="/order-history">Order History</a></li>
					</ol>
                </div>
				<!-- <div class="form-head mb-4 d-flex flex-wrap align-items-center">
					<div class="me-auto">
						<h2 class="font-w600 mb-0">Order List</h2>
						<p class="text-light">View All Orders</p>
					</div>	
					
				</div> -->

				<div class="row mb-4 align-items-center">
					<div class="col-xl-9">
						
						<div class="card m-0 ">
							<div class="card-body px-4 py-3 py-lg-2">
								<div class="row align-items-center">
									<div class="col-xl-3 col-xxl-12 col-lg-12 my-2">
										<div class="media align-items-center style-2">
											<span class="me-3">
												<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect width="3.54545" height="26" rx="1.77273" transform="matrix(-1 0 0 1 24.8181 0)" fill="#FB3E7A"/>
													<rect width="3.54545" height="18.9091" rx="1.77273" transform="matrix(-1 0 0 1 17.7272 7.09088)" fill="#FB3E7A"/>
													<rect width="3.54545" height="8.27273" rx="1.77273" transform="matrix(-1 0 0 1 10.6362 17.7273)" fill="#FB3E7A"/>
													<rect width="4" height="16" rx="2" transform="matrix(-1 0 0 1 4 10)" fill="#FB3E7A"/>
												</svg>
											</span>
											<div class="media-body ml-1">
												<p class="mb-0 fs-12">Total Order</p>
												<h4 class="mb-0 font-w600  fs-22">{{main_order_list.length}}</h4>
											</div>
										</div>
									</div>
									<div class="col-xl-7 col-xxl-12 col-lg-12">
										<div class="row align-items-center">
											<div class="col-xl-4 col-md-4 col-sm-4 my-2">
												<div class="media align-items-center style-2">
													<span class="me-3">
														<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
															<rect width="3.54545" height="26" rx="1.77273" transform="matrix(-1 0 0 1 24.8181 0)" fill="#FB3E7A"/>
															<rect width="3.54545" height="18.9091" rx="1.77273" transform="matrix(-1 0 0 1 17.7272 7.09088)" fill="#FB3E7A"/>
															<rect width="3.54545" height="8.27273" rx="1.77273" transform="matrix(-1 0 0 1 10.6362 17.7273)" fill="#FB3E7A"/>
															<rect width="4" height="16" rx="2" transform="matrix(-1 0 0 1 4 10)" fill="#FB3E7A"/>
														</svg>
													</span>
													<div class="media-body ml-1">
														<p class="mb-0 fs-12">Completed Deliveries</p>
														<h4 class="mb-0 font-w600  fs-22">{{completed_orders}}</h4>
													</div>
												</div>
											</div>
											<div class="col-xl-4 col-md-4 col-sm-4 my-2">
												<div class="media align-items-center style-2">
													<span class="me-3">
														<svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3124 0.990819C30.1459 1.71561 30.234 2.97887 29.5092 3.81239L20.7578 13.8765C19.359 15.4851 16.9444 15.7141 15.2681 14.397L11.1176 11.1359L3.87074 17.9564C3.06639 18.7135 1.80064 18.6751 1.04361 17.8708C0.286573 17.0664 0.324929 15.8007 1.12928 15.0436L8.3761 8.22309C9.817 6.86695 12.0329 6.76812 13.5888 7.99062L17.7394 11.2518L26.4908 1.18767C27.2156 0.354158 28.4788 0.266024 29.3124 0.990819Z" fill="#FB3E7A"/>
														</svg>
													</span>
													<div class="media-body ml-1">
														<p class="mb-0 fs-12">Refunded Deliveries</p>
														<h4 class="mb-0 font-w600  fs-22">{{refunded_orders}}</h4>
													</div>
												</div>
											</div>
											<div class="col-xl-4 col-md-4 col-sm-4 my-2">
												<div class="media align-items-center style-2">
													<span class="me-3">
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#C8C8C8"/>
															<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 0.686289C14.7205 0.233951 13.3682 0 11.9999 0V3.93696C13.4442 3.93696 14.8619 4.32489 16.105 5.06021C17.3481 5.79553 18.3708 6.85124 19.0664 8.117C19.7619 9.38277 20.1047 10.8121 20.0589 12.2557C20.0131 13.6992 19.5804 15.104 18.806 16.3231C18.0317 17.5422 16.9441 18.531 15.6569 19.186C14.3697 19.8411 12.9302 20.1384 11.4888 20.0468C10.0475 19.9553 8.65715 19.4783 7.46319 18.6656C6.26922 17.853 5.31544 16.7346 4.70154 15.4273L1.13794 17.1007C1.71955 18.3393 2.50612 19.4639 3.45939 20.4297C4.00364 20.9811 4.60223 21.4807 5.24803 21.9203C7.02498 23.1297 9.09416 23.8396 11.2393 23.9759C13.3845 24.1121 15.5268 23.6697 17.4425 22.6948C19.3582 21.7199 20.9768 20.2483 22.1293 18.4339C23.2818 16.6195 23.9257 14.5289 23.9939 12.3805C24.062 10.2321 23.5519 8.10484 22.5167 6.22104C21.4816 4.33724 19.9595 2.76605 18.1094 1.6717C17.4371 1.27398 16.7304 0.944541 15.9999 0.686289Z" fill="#FB3E7A"/>
														</svg>
													</span>
													<div class="media-body ml-1">
														<p class="mb-0 fs-12">Cancelled Deliveries</p>
														<h4 class="mb-0 font-w600 fs-22"> {{canceled_orders}}
															<svg class="ml-2" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M0 6L6 2.62268e-07L12 6" fill="#13B497"></path>
															</svg>
														</h4>
													</div>
												</div>
											</div>

											
										</div>
									</div>
									<div class="col-xl-2 col-xxl-12 my-2">
										<div class="dropdown d-inline-block">
											<div class="dropdown-toggle mb-0 fs-18 " data-bs-toggle="dropdown">
												<span class="font-w400 text-primary">Filter by status</span>
											</div>
											<div class="dropdown-menu dropdown-menu-left">
												<a class="dropdown-item"  @click="change_status(0)"> Order Assigned</a>
												<a class="dropdown-item"  @click="change_status(1)">Pending Orders</a>
												<a class="dropdown-item"  @click="change_status(9)">Cancelled Orders</a>
												<a class="dropdown-item"  @click="change_status(10)">Refunded</a>
												<a class="dropdown-item"  @click="change_status(6)">Awaiting Orders</a>
												<a class="dropdown-item"  @click="change_status(8)">Completed Orders</a>
												<a class="dropdown-item"  @click="change_status(7)">Enroute Orders</a>
												<a class="dropdown-item"  @click="change_status(5)">Rider Assigned</a>
												<a class="dropdown-item"  @click="change_status(3)">Merchant Approved</a>
											</div>
										</div>
									</div>
								</div>							
							</div>
						</div>
					</div>
					<div class="col-xl-3 align-self-start mt-3 mt-xl-0 Generate">
						<a href="/" class="btn btn-secondary d-block"><i class="fa fa-motorcycle scale5 me-3"></i>Create New Order </a>
					</div>	
				</div>
				<div class="col-12">
					<div class="card">
						<div class="card-header" v-if="status == 0">
							<h4 class="card-title">All Orders</h4>
						</div>
					
						<div class="card-header" v-if="status == 1">
							<h4 class="card-title"> Pending Orders</h4>
						</div>
						<div class="card-header" v-if="status == 9">
							<h4 class="card-title">Canceled Orders</h4>
						</div>
						<div class="card-header" v-if="status == 5">
							<h4 class="card-title">Rider Assigned</h4>
						</div>
						<div class="card-header" v-if="status == 6">
							<h4 class="card-title">Awaiting Pickup</h4>
						</div>
						<div class="card-header" v-if="status == 7">
							<h4 class="card-title">Transport Enroute</h4>
						</div>
						<div class="card-header" v-if="status == 8">
							<h4 class="card-title">Completed  Orders</h4>
						</div>
						<div class="card-header" v-if="status == 10">
							<h4 class="card-title">Refunded</h4>
						</div>
						<div class="card-header" v-if="status == 2">
							<h4 class="card-title">Merchant Assigned</h4>
						</div>
						<div class="card-header" v-if="status == 3">
							<h4 class="card-title">Approved Orders</h4>
						</div>
						<div class="card-header" v-if="status == 4">
							<h4 class="card-title">Rejected Orders</h4>
						</div>
						<div class="card-body">
								<div class="row">
					<div class="col-lg-12">
						<div class="table-responsive table-hover fs-14">
							<table class="table mb-4 dataTablesCard card-table" id="orderTable">
								<thead>
									<tr>
										<th>
											<div class="form-check checkbox-secondary" >
											  <input class="form-check-input" type="checkbox" value="" id="checkAll">
											  <label class="form-check-label" for="checkAll">
											  </label>
											</div>
										</th>
										<th>Order ID</th>
										<th>Date</th>
										<th>Item </th>
										<th> Company</th>
										<th>Location</th>
										<th>Channel</th>
										<th>Status</th>
										<th>Amount</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="order in order_list" :key='order'>
										<td>
											<div class="form-check checkbox-secondary">
											  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
											  <label class="form-check-label" for="flexCheckDefault2">
											  </label>
											</div>
										</td>
										<td>{{order.reference}}</td>
										<td>{{order.order_date}}</td>
										<td class="wspace-no">{{order.item_description}}</td>
										<td>{{order.merchant.name}}</td>
										<td>{{order.destination}}</td>
										<td>{{order.transport_type.name}}</td>
										<td><span class="badge light badge-secondary">{{order.status.name}}</span></td>
									</tr>
									
								</tbody>
							
							</table>
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
			order_list: [],
			main_order_list: []
			}
		},
		async mounted() {
			await this.get_orders()
	},
	methods: {
		get_orders(){
			Api.axios_instance.get(Api.baseUrl+'/transporter/user/orders/get', )
			.then(response => {
				this.order_list = response.data
				this.main_order_list = response.data
			})
		},
		change_status(status){
			this.status = status
			this.order_list = this.order_list.filter(order => order.status.id === status)
		}
	},
	computed: {
		completed_orders: function (){
			return this.main_order_list.filter(order => order.status.id === 8).length
		},
		refunded_orders: function (){
			return this.main_order_list.filter(order => order.status.id === 10).length
		},
		canceled_orders: function (){
			return this.main_order_list.filter(order => order.status.id === 9).length
		}
	}
	})
</script>

<style scoped>
.btn:hover{
	background-color: #ff6905;
}
</style>