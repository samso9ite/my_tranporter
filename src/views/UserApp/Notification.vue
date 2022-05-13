<template>
    <div>
        <TopNavBar />
        <UserSideBar />
           <div class="content-body" >
            <!-- row -->
			<div class="container-fluid" >
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item "><a href="/">Dashboard</a></li>
						<li class="breadcrumb-item active"><a href="/notifications">Notifications</a></li>
					</ol>
                </div>
				<div class="row">
				<div class="col-xl-8 col-xxl-8">
					<div class="col-xl-12">
						<div class="card overflow-hidden">
							<div class="card-body">
                                 <div id="DZ_W_Todo1" class="widget-media dz-scroll ">
                                    <ul class="timeline">
                                        <li v-for="notification in notifications" :key="notification">
                                            <div class="timeline-panel">
                                                <div class="media me-2 media-primary">
													<i class="fa fa-bell"></i>
												</div>
												<div class="media-body">
													<h5 class="mb-1">{{notification.title}}</h5>
                                                    <p>{{notification.message}}</p>
													<small class="d-block">{{moment(notification.time).fromNow()}} </small>
												</div>
												<div class="dropdown">
                                                    <!-- <span class="badge light badge-secondary" style="margin-right:20px" v-if="notification.checked == true">Unread</span>
                                                    <span class="badge light badge-success" style="margin-right:20px" v-if="notification.checked == false">Read</span> -->
													<button type="button" class="btn btn-primary light sharp" data-bs-toggle="dropdown">
														<svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg>
													</button>
													<!-- <div class="dropdown-menu dropdown-menu-end">
														<a class="dropdown-item" href="#">Edit</a>
														<a class="dropdown-item" href="#">Delete</a>
													</div> -->
												</div>
											</div>
                                        </li>
                                    </ul>
                                </div>
                                <v-pagination
                                    v-model="page"
                                    :pages="10"
                                    :range-size="1"
                                    active-color="#DCEDFF"
                                    @update:modelValue="updateHandler"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
 
    </div>
       
       
</template>

<script >
import { defineComponent } from 'vue'
import UserSideBar from '../../components/UserSideBer.vue'
import TopNavBar from '../../components/TopNavBar.vue'
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import moment from 'moment'
import Api from "../Api.js"
export default defineComponent({
    name: 'Notification',
    components: {TopNavBar, UserSideBar, VPagination},
    data(){
        return{
            notifications: [],
            page:1
        }
    },
    created: function () {
        this.moment = moment;
    },
    methods: {
        all_notifications(){
            Api.axios_instance.get(Api.baseUrl+'/notification/user/fetch')
            .then(response => {
               this.notifications = response.data
            })
        }
    },
    mounted(){
        this.all_notifications()
    }
})
</script>
