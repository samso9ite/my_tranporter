<template>
    <div class="root">
    <!-- <div id="preloader">
        <div class="loader">
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--text"></div>
        </div>
    </div> -->
    <!--*******************
        Preloader end
    ********************-->


    <!--**********************************
        Main wrapper start
    ***********************************-->
    <div id="main-wrappeer">

        <!--**********************************
            Nav header start
        ***********************************-->
	    <div class="nav-header">
           <router-link :to="'/'"> 
				<a class="brand-logo">
					<img src="../statics/icon_svgs.svg"/>
				</a>
			</router-link>
        </div> 
	
		<!--**********************************
            Header start
        ***********************************-->


        <!--**********************************
            Sidebar start
        ***********************************-->
        <div class="deznav">
            <div class="deznav-scroll">
				<ul class="metismenu navigate_style " style="padding-bottom:20px" id="menu" >
					
                    <li >
						<router-link :to="'/'"> 
						
							<i class="flaticon-025-dashboard"></i>
							Dashboard
					
						</router-link>
                    </li>
					<li class="">
						<router-link :to="'/wallet'"> 
						
							<i class="fa fa-money" aria-hidden="true"></i>
							<span class="">Wallet</span>
						</router-link>
                    </li>

					<li class="">
						<router-link :to="'/bulk-upload-region'"> 
							<i class="fa fa-upload" aria-hidden="true"></i>
							<span class="">Bulk Upload</span>
						</router-link>
                    </li>

					<li class="">
						<router-link :to="'/delivery-link'"> 
							<i class="fa fa-link" aria-hidden="true"></i>
							<span class=""> Delivery Link</span>
						</router-link>
                    </li>
					
                    <li>
					 <router-link :to="'/order-history'"> <i class="flaticon-043-menu"></i>
								<span class="nav-text">Order History</span>
						
						</router-link>
                    </li>
					<li>
						<router-link :to="'/notifications'"> 
						<i class="fa fa-bell" aria-hidden="true"></i>
							<span class="nav-text">Notifications</span>
						</router-link>
                    </li>

					<li>
						<router-link :to="'/update-profile'"> 
						<i class="fa fa-cog" aria-hidden="true"></i>
							<span class="nav-text">Profile</span>
						</router-link>
                    </li>
					<li>
						<router-link :to="'https://www.mytransporter.io/privacy_policy.html'"> 
							<i class="fa fa-user-circle-o" aria-hidden="true"></i>
							<span class="nav-text">T & C's</span>
						</router-link>
					</li>
					<li>
						<p style="font-size:17px; margin-top:2rem" @click="logout"><strong> <a href="" style="color: #ff6600; "> <i class="fa fa-power-off" aria-hidden="true"></i> Log Out </a></strong></p>
					</li>
				 </ul>
				 
				<div class="plus-box">
					<p class="fs-16 font-w500 mb-4" style="color: white;">Get goods delivered in minutes</p>
					<a class="text-white" style="font-size:17px" href="javascript:void(0);">Referal Code : <strong> {{referal_code}}</strong></a>
				</div>
				<div class="copyright">
					<p><strong>MyTransporter Dashboard</strong> © 2022 All Rights Reserved</p>
					<!-- <p style="color: #ff6600; font-size:17px" @click="logout"><strong> <i class="fa fa-power-off" aria-hidden="true"></i> Log Out</strong></p> -->
					<!-- <p class="fs-12">Made with <span class="heart"></span> by DexignZone</p> -->
				</div>
			</div>
        </div>
		
    </div>
    </div>
</template>

<script>
 export default{
    name: 'UserSideBar',
	data(){
		return{
			referal_code: JSON.parse(window.localStorage.getItem('referal_code'))
		}
	},
	methods:{
		order_route(){
		},
		route_link(path){
		},
		logout(){
			localStorage.clear();
			window.location.href="/login"
		}
	}
 }
</script>

<style scoped>
a.router-link-active.router-link-exact-active{
	background-color: #ff6600c9  !important; 
	color: white !important;
	font-weight: 600 !important;
}
</style>
