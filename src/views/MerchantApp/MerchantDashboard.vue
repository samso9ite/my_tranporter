<template>
<div>
    <SideBar/>
      <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="form-head mb-4 d-flex flex-wrap align-items-center">
					<div class="me-auto">
						<h2 class="font-w600 mb-0">Dashboard</h2>
						<p class="text-light">Hello! How are you doing today!</p>
					</div>	
					<div class="input-group search-area2 d-xl-inline-flex mb-2 me-4">
						<button class="input-group-text"><i class="flaticon-381-search-2 text-primary"></i></button>
						<input type="text" class="form-control" placeholder="Search here...">
					</div>
					<div class="dropdown custom-dropdown mb-2 period-btn">
						<div class="btn btn-sm  d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false" role="button">
							<svg class="primary-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22.167 5.83362H21.0003V3.50028C21.0003 3.19087 20.8774 2.89412 20.6586 2.67533C20.4398 2.45653 20.143 2.33362 19.8336 2.33362C19.5242 2.33362 19.2275 2.45653 19.0087 2.67533C18.7899 2.89412 18.667 3.19087 18.667 3.50028V5.83362H9.33362V3.50028C9.33362 3.19087 9.2107 2.89412 8.99191 2.67533C8.77312 2.45653 8.47637 2.33362 8.16695 2.33362C7.85753 2.33362 7.56079 2.45653 7.34199 2.67533C7.1232 2.89412 7.00028 3.19087 7.00028 3.50028V5.83362H5.83362C4.90536 5.83362 4.01512 6.20237 3.35874 6.85874C2.70237 7.51512 2.33362 8.40536 2.33362 9.33362V10.5003H25.667V9.33362C25.667 8.40536 25.2982 7.51512 24.6418 6.85874C23.9854 6.20237 23.0952 5.83362 22.167 5.83362Z" fill="#ff6600"/>
								<path d="M2.33362 22.1669C2.33362 23.0952 2.70237 23.9854 3.35874 24.6418C4.01512 25.2982 4.90536 25.6669 5.83362 25.6669H22.167C23.0952 25.6669 23.9854 25.2982 24.6418 24.6418C25.2982 23.9854 25.667 23.0952 25.667 22.1669V12.8336H2.33362V22.1669Z" fill="#ff6600"/>
							</svg>
							<div class="text-left ms-3">
								<span class="d-block text-black text-start">Change Periode</span>
								<small class="d-block text-light">August 28th - October 28th, 2021</small>
							</div>
							<i class="fa fa-caret-down text-light scale5 ms-3"></i>
						</div>
						<div class="dropdown-menu dropdown-menu-end">
							<a class="dropdown-item" href="javascript:void(0);">October 29th - November 29th, 2021</a>
							<a class="dropdown-item" href="javascript:void(0);">July 27th - Auguts 27th, 2021</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-12">
						<div class="row">
							<div class="col-xl-3 col-xxl-6 col-sm-6 ">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<div class="d-flex align-items-center">
											<h2 class="chart-num font-w600 mb-0">215</h2>
											<svg class="ms-2 primary-icon" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.00401 11.1924C0.222201 11.1924 -0.670134 9.0381 0.589795 7.77817L7.78218 0.585786C8.56323 -0.195262 9.82956 -0.195262 10.6106 0.585786L17.803 7.77817C19.0629 9.0381 18.1706 11.1924 16.3888 11.1924H2.00401Z" fill="#ff6600"/>
											</svg>
										</div>
										<div>
											<h5 class="text-black font-w500 mb-0">Riders</h5>
										</div>
									</div>
									<div class="card-body pt-0">
										<div id="widgetChart1" class="chart-primary"></div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-xxl-6 col-sm-6 ">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<div class="d-flex align-items-center">
											<h2 class="chart-num font-w600 mb-0"> ₦536k</h2>
											<svg class="ms-2" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.00401 -4.76837e-06C0.222201 -4.76837e-06 -0.670134 2.15428 0.589795 3.41421L7.78218 10.6066C8.56323 11.3876 9.82956 11.3876 10.6106 10.6066L17.803 3.41421C19.0629 2.15428 18.1706 -4.76837e-06 16.3888 -4.76837e-06H2.00401Z" fill="#FF3131"/>
											</svg>
										</div>
										<div>
											<h5 class="text-black font-w500 mb-0">Sales</h5>
										</div>
									</div>
									<div class="card-body pt-0">
										<div id="widgetChart2">
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-xxl-6 col-sm-6 ">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<div class="d-flex align-items-center">
											<h2 class="chart-num font-w600 mb-0">652</h2>
											<svg class="ms-2 primary-icon" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.00401 11.1924C0.222201 11.1924 -0.670134 9.0381 0.589795 7.77817L7.78218 0.585786C8.56323 -0.195262 9.82956 -0.195262 10.6106 0.585786L17.803 7.77817C19.0629 9.0381 18.1706 11.1924 16.3888 11.1924H2.00401Z" fill="#ff6600"/>
											</svg>
										</div>
										<div>
											<h5 class="text-black font-w500 mb-0">Deliveries</h5>
										</div>
									</div>
									<div class="card-body pt-0">
										<canvas id="widgetChart3" height="60"></canvas>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-xxl-6 col-sm-6 ">
								<div class="card">
									<div class="card-body pt-sm-4 pt-3 d-flex align-items-center justify-content-between">
										<div class="me-3">
											<div class="d-flex align-items-center">
												<h2 class="chart-num font-w600 mb-0">45242</h2>
											</div>
											<div>
												<h5 class="text-black font-w500 mb-3 mt-2">Event Held</h5>
											</div>
											<div>
												<p class="text-primary fs-14 mb-0">
													<svg class="me-2 primary-icon" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns=	"http://www.w3.org/2000/svg">
														<path d="M2.00401 11.1924C0.222201 11.1924 -0.670134 9.0381 0.589795 7.77817L7.78218 0.585786C8.56323 -0.195262 9.82956 -0.195262 10.6106 0.585786L17.803 7.77817C19.0629 9.0381 18.1706 11.1924 16.3888 11.1924H2.00401Z" fill="#ff6600"/>
													</svg>
													2.4%
													<span class="op-6 text-light">than Last Week</span>
												</p>
											</div>
										</div>
										<div>
											<div class="d-inline-block position-relative donut-chart-sale">
												<span class="donut1" data-peity='{ "fill": ["rgb(14, 138, 116,1)", "rgba(240, 240, 240)"],   "innerRadius": 35, "radius": 10}'>5/8</span>
												<small class="text-black">66%</small>
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-12">
						<div class="row">
							<div class="col-xl-6">
								<div class="card">
									<div class="card-header border-0 pb-0 flex-wrap">
										<h4 class="fs-20 font-w500">Deliveries Breakdown</h4>
										<div class="card-action coin-tabs">
											<ul class="nav nav-tabs" role="tablist">
												<li class="nav-item">
													<a class="nav-link active" data-bs-toggle="tab" href="#Monthly">
														Bike & Bicycle
													</a>
												</li>
												<li class="nav-item">
													<a class="nav-link " data-bs-toggle="tab" href="#Weekly">
														Car & truck
													</a>
												</li>
												<li class="nav-item">
													<a class="nav-link " data-bs-toggle="tab" href="#Daily">
														Drones
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="card-body pt-2">
										<div class="tab-content">
											<div class="tab-pane fade active show" id="Monthly">
												<div class="d-sm-flex d-block align-items-center justify-content-center">
													<div class="col-xl-6 col-xxl-5 text-center">
														<div id="donutChart2" class="donutChart2 d-inline-block"></div>
													</div>	
													<div class="col-xl-6 col-xxl-7">
														<p class="fs-12 mt-3"></p>
														<div class="d-flex  mt-4">
															<div class="me-4">
																<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#FB3E7A"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">21,512</h4>
																<span class="fs-14">Pending Deliveries</span>
															</div>
															<div class="me-4">
																<svg class="primary-icon" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#ff6600"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">45,612</h4>
																<span class="fs-14">Successfull Deliveries </span>
															</div>
															<div class="">
																<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#C8C8C8"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">275</h4>
																<span class="fs-14">Cancelled Deliveries</span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="tab-pane fade" id="Weekly">
												<div class="d-sm-flex d-block align-items-center justify-content-center">
													<div class="col-xl-6 col-xxl-5 text-center">
														<div id="donutChart3" class="donutChart2 d-inline-block"></div>
													</div>	
													<div class="col-xl-6 col-xxl-7">
														<div class="d-flex  mt-4">
															<div class="me-4">
																<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#FB3E7A"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">21,512</h4>
																<span class="fs-14">Pending Deliveries</span>
															</div>
															<div class="me-4">
																<svg class="primary-icon" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#ff6600"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">45,612</h4>
																<span class="fs-14">Successfull Deliveries </span>
															</div>
															<div class="">
																<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#C8C8C8"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">275</h4>
																<span class="fs-14">Cancelled Deliveries</span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="tab-pane fade" id="Daily">
												<div class="d-sm-flex d-block align-items-center justify-content-center">
													<div class="col-xl-6 col-xxl-5 text-center">
														<div id="donutChart4" class="donutChart2 d-inline-block"></div>
													</div>	
													<div class="col-xl-6 col-xxl-7">
														<div class="d-flex  mt-4">
															<div class="me-4">
																<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#FB3E7A"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">21,512</h4>
																<span class="fs-14">Pending Deliveries</span>
															</div>
															<div class="me-4">
																<svg class="primary-icon" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#ff6600"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">45,612</h4>
																<span class="fs-14">Successfull Deliveries </span>
															</div>
															<div class="">
																<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#C8C8C8"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">275</h4>
																<span class="fs-14">Cancelled Deliveries</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div> 
							</div>
							<div class="col-xl-6">
								<div class="card" style="background-color: #473b52;">
									<div class="card-body">
										<div class="d-sm-flex d-block pb-sm-3 align-items-end mb-2">
											<div class="me-auto pe-3 mb-3 mb-sm-0">
												<span class="chart-num-3 font-w200 d-block mb-sm-3 mb-2 text-white">Deliveries Made Today</span>
												<h2 class="chart-num-2 text-white mb-0">456,502<span class="fs-18 me-2 ms-3">pcs</span></h2>
											</div>
											<div class="d-flex flex-wrap mb-3 mb-sm-0">
												<svg width="87" height="58" viewBox="0 0 87 58" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M18.4571 37.6458C11.9375 44.6715 4.81049 52.3964 2 55.7162H68.8125C77.6491 55.7162 84.8125 48.5528 84.8125 39.7162V2L61.531 31.9333C56.8486 37.9536 48.5677 39.832 41.746 36.4211L37.3481 34.2222C30.9901 31.0432 23.2924 32.4352 18.4571 37.6458Z" fill="url(#paint0_linear)"/>
													<path d="M2 55.7162C4.81049 52.3964 11.9375 44.6715 18.4571 37.6458C23.2924 32.4352 30.9901 31.0432 37.3481 34.2222L41.746 36.4211C48.5677 39.832 56.8486 37.9536 61.531 31.9333L84.8125 2" stroke="white" stroke-width="4" stroke-linecap="round"/>
													<defs>
													<linearGradient id="paint0_linear" x1="43.4062" y1="8.71453" x2="46.7635" y2="55.7162" gradientUnits="userSpaceOnUse">
													<stop stop-color="white" offset="0"/>
													<stop offset="1" stop-color="white" stop-opacity="0"/>
													</linearGradient>
													</defs>
												</svg>
												<div class="ms-3">
													<p class="fs-20 mb-0 font-w500 text-white">+4%</p>
													<span class="fs-12 text-white">than last day</span>
												</div>
											</div>
										</div>
										<div class="progress style-1" style="height:15px;">
											<div class="progress-bar bg-white progress-animated" style="width: 55%; height:15px;" role="progressbar">
												<span class="sr-only">55% Complete</span>
												<span class="bg-white arrow"></span>
												<span class="font-w600 counter-bx text-black"><strong class="counter font-w400">985pcs Left</strong></span>
											</div>
										</div>
										<p class="fs-12 text-white pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
										<a href="javascript:void(0);" class="text-white">View detail<i class="las la-long-arrow-alt-right scale5 ms-3"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-xxl-8">
						<div class="row">
							<div class="col-xl-12">
								<div class="card event-bx">
									<div class="card-header border-0 mb-0">
										<h4 class="fs-20">Pending Orders</h4>
										<div class="dropdown custom-dropdown mb-0 tbl-orders-style">
											<!-- <div class="btn sharp tp-btn" data-bs-toggle="dropdown">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#194039" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#194039" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#194039" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
											</div> -->
											<!-- <div class="dropdown-menu dropdown-menu-right">
												<a class="dropdown-item" href="javascript:void(0);">Details</a>
												<a class="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
											</div> -->
										</div>
									</div>
									<div class="card-body dz-scroll loadmore-content pt-0" id="EventListContent">
										<div class="media event-list pb-3 border-bottom mb-3">
											<div class="image">	
												<img src="images/card/Untitled-15.jpg" alt="">
												<i class="las la-film image-icon"></i>
											</div>
											<div class="media-body">
												<h4 class="fs-18 mb-sm-0 mb-2"><a href="javascript:void(0);" class="text-black"> Envato International Online Meetup 2020</a></h4>
												<span class="fs-14 d-block mb-sm-3 mb-2 text-secondary">Medan, Indonesia</span>
												<p class="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
											</div>
											<div class="media-footer">
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														₦
													</span>
													<div class="fs-12 text-primary">₦124,00</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<i class="fa fa-motorcycle" aria-hidden="true"></i>
													</span>
													<div class="fs-12 text-primary">Channel</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<i class="fa fa-clock-o" aria-hidden="true"></i>
													</span>
													<div class="fs-12 text-primary">7:55 pm</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<div class="btn sharp btn-primary tp-btn" data-bs-toggle="dropdown">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="12" cy="5" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="12" cy="19" r="2"/></g></svg>
														</div>
														<div class="dropdown-menu dropdown-menu-end">
															<a class="dropdown-item" href="#">Approve Order</a>
															<a class="dropdown-item" href="#">Reject Order</a>
															<!-- <a class="dropdown-item" href="#">Option 3</a> -->
														</div>
													</span>
													<div class="fs-12 text-primary">Action</div>
												</div>
											</div>
										</div>
										<div class="media event-list pb-3 border-bottom mb-3">
											<div class="image">	
												<img src="images/card/Untitled-15.jpg" alt="">
												<i class="las la-film image-icon"></i>
											</div>
											<div class="media-body">
												<h4 class="fs-18 mb-sm-0 mb-2"><a href="javascript:void(0);" class="text-black"> Envato International Online Meetup 2020</a></h4>
												<span class="fs-14 d-block mb-sm-3 mb-2 text-secondary">Medan, Indonesia</span>
												<p class="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
											</div>
											<div class="media-footer">
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														₦
													</span>
													<div class="fs-12 text-primary">₦124,00</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<i class="fa fa-truck" aria-hidden="true"></i>
													</span>
													<div class="fs-12 text-primary">Channel</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<i class="fa fa-clock-o" aria-hidden="true"></i>
													</span>
													<div class="fs-12 text-primary">7:55 pm</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<div class="btn sharp btn-primary tp-btn" data-bs-toggle="dropdown">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="12" cy="5" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="12" cy="19" r="2"/></g></svg>
														</div>
														<div class="dropdown-menu dropdown-menu-end">
															<a class="dropdown-item" href="#">Approve Order</a>
															<a class="dropdown-item" href="#">Reject Order</a>
															<!-- <a class="dropdown-item" href="#">Option 3</a> -->
														</div>
													</span>
													<div class="fs-12 text-primary">Action</div>
												</div>
											</div>
										</div>
										<div class="media event-list pb-3 border-bottom mb-3">
											<div class="image">	
												<img src="images/card/Untitled-15.jpg" alt="">
												<i class="las la-film image-icon"></i>
											</div>
											<div class="media-body">
												<h4 class="fs-18 mb-sm-0 mb-2"><a href="javascript:void(0);" class="text-black"> Envato International Online Meetup 2020</a></h4>
												<span class="fs-14 d-block mb-sm-3 mb-2 text-secondary">Medan, Indonesia</span>
												<p class="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
											</div>
											<div class="media-footer">
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														₦
													</span>
													<div class="fs-12 text-primary">₦124,00</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<i class="fa fa-car" aria-hidden="true"></i>
													</span>
													<div class="fs-12 text-primary">Channel</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<i class="fa fa-clock-o" aria-hidden="true"></i>
													</span>
													<div class="fs-12 text-primary">7:55 pm</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<div class="btn sharp btn-primary tp-btn" data-bs-toggle="dropdown">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="12" cy="5" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="12" cy="19" r="2"/></g></svg>
														</div>
														<div class="dropdown-menu dropdown-menu-end">
															<a class="dropdown-item" href="#">Approve Order</a>
															<a class="dropdown-item" href="#">Reject Order</a>
															<!-- <a class="dropdown-item" href="#">Option 3</a> -->
														</div>
													</span>
													<div class="fs-12 text-primary">Action</div>
												</div>
											</div>
										</div>
										<div class="media event-list pb-3 border-bottom mb-3">
											<div class="image">	
												<img src="images/card/Untitled-15.jpg" alt="">
												<i class="las la-film image-icon"></i>
											</div>
											<div class="media-body">
												<h4 class="fs-18 mb-sm-0 mb-2"><a href="javascript:void(0);" class="text-black"> Envato International Online Meetup 2020</a></h4>
												<span class="fs-14 d-block mb-sm-3 mb-2 text-secondary">Medan, Indonesia</span>
												<p class="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
											</div>
											<div class="media-footer">
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														₦
													</span>
													<div class="fs-12 text-primary">₦124,00</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<i class="fa fa-bicycle" aria-hidden="true"></i>
													</span>
													<div class="fs-12 text-primary">Channel</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<i class="fa fa-clock-o" aria-hidden="true"></i>
													</span>
													<div class="fs-12 text-primary">7:55 pm</div>
												</div>
												<div class="text-center">
													<span class="ticket-icon-1 mb-3">
														<div class="btn sharp btn-primary tp-btn" data-bs-toggle="dropdown">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="12" cy="5" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="12" cy="19" r="2"/></g></svg>
														</div>
														<div class="dropdown-menu dropdown-menu-end">
															<a class="dropdown-item" href="#">Approve Order</a>
															<a class="dropdown-item" href="#">Reject Order</a>
															<!-- <a class="dropdown-item" href="#">Option 3</a> -->
														</div>
													</span>
													<div class="fs-12 text-primary">Action</div>
												</div>
											</div>
										</div>
									
									
									</div>
									<div class="card-footer pt-0 border-0">
										<a href="javascript:void(0);" class="btn btn-secondary btn-lg btn-block text-white dz-load-more" id="EventList" rel="ajax/event-list.html">Load More</a>
									</div>	
								</div>
							</div>
								</div>	
					</div>
					<div class="col-xl-3 col-xxl-4">
						<div class="row">
							<div class="col-xl-12">
								<div class="card overflow-hidden">
									<div class="card-body">
										<div class="text-center">
											<div class="profile-photo">
												<img src="images/wallet.svg" width="60" class="img-fluid" alt="">
											</div>
											<h3 class="mt-4 mb-1">Wallet</h3>
											<!-- <p class="text-muted">Senior Manager</p> -->
											<a class="btn btn-outline-primary btn-rounded mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Withdraw</a>

											<div class="modal fade modal fade bd-example-modal-lg" id="exampleModalCenter">
												<div class=" modal-dialog modal-dialog-centered  modal-lg" role="document">
													<div class="modal-content">
														<div class="modal-header">
															<h5 class="modal-title"><b>My Credit Cards</b></h5>
															<button type="button" class="btn-close" data-bs-dismiss="modal">
															</button>
														</div>
														<div class="modal-body">
															<div class="table-responsive">
																<table class="table   table-bordered table-striped verticle-middle table-responsive-sm">
																	<tbody>
																		<tr>
																			<td>
																				<div class="form-check" style="">
																					<input class="form-check-input" type="radio" name="gridRadios" value="option1" checked>
																					<img src="images/visa.svg" width="30" />
																				</div>
																			</td>
																		
																			<td>************7806
																			</td>
																		
																			<td>
																				<span>
																					<a href="javascript:void()" class="me-4" data-bs-toggle="tooltip"
																						data-placement="top" title="Edit"><i
																							class="fa fa-trash color-muted"></i> </a><a
																						href="javascript:void()" data-bs-toggle="tooltip"
																						data-placement="top" title="btn-close"><i
																							class="fa fa-btn-close color-danger"></i>
																					</a>
																				</span>
																			</td>
																		</tr>
																		
																		<tr>
																			<td>
																				<div class="form-check" style="">
																					<input class="form-check-input" type="radio" name="gridRadios" value="option1" checked>
																					<img src="images/master_card.png" width="30" />
																				</div>
																			</td>
																		
																			<td>************7806
																			</td>
																		
																			<td>
																				<span>
																					<a href="javascript:void()" class="me-4" data-bs-toggle="tooltip"
																						data-placement="top" title="Edit"><i
																							class="fa fa-trash color-muted"></i> </a><a
																						href="javascript:void()" data-bs-toggle="tooltip"
																						data-placement="top" title="btn-close"><i
																							class="fa fa-btn-close color-danger"></i>
																					</a>
																				</span>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
															<div class="accordion accordion-active-header" id="accordion-nine">
																<div class="accordion-item">
																  <div class="accordion-header  rounded-lg" id="accord-9One" data-bs-toggle="collapse" data-bs-target="#collapse9One" aria-controls="collapse9One"   aria-expanded="false"  role="button">
																	  <span class="accordion-header-icon"></span>
																	<span class="accordion-header-text">Add a New Credit Card</span>
																	<span class="accordion-header-indicator"></span>
																  </div>
																  <div id="collapse9One" class="collapse accordion__body " aria-labelledby="accord-9One" data-bs-parent="#accordion-nine">
																	<div class="accordion-body-text">
																		<div class="row">
																			<div class="col-md-6 mb-3">
																				<input type="text" class="form-control" id="cc-name" placeholder="Name on Card" required="">
																			</div>
																			<div class="col-md-6 mb-3">
																				<input type="text" class="form-control" id="cc-number" placeholder="Credit Card Number" required="">
																				
																			</div>
																			<div class="col-md-6 mb-3">
																				<input type="text" class="form-control" id="cc-name" placeholder="MM / YY" required="">
																			</div>
																			<div class="col-md-6 mb-3">
																				<input type="text" class="form-control" id="cc-number" placeholder="CVV" required="">
																		
																			</div>
																		</div>
																	</div>
																  </div>
																</div>
															</div>
																
														</div>
														<div class="modal-footer">
															<button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
															<button type="button" class="btn btn-primary">Withdraw</button>
														</div>
													</div>
												</div>
											</div>
											
										</div>
									</div>
									
									<div class="card-footer pt-0 pb-0 text-center">
										<div class="row">
											<div class="col-4 pt-3 pb-3 border-end">
												<h3 class="mb-1">₦150</h3><span>Total</span>
											</div>
											<div class="col-4 pt-3 pb-3 border-end">
												<h3 class="mb-1">₦140</h3><span>Available</span>
											</div>
											<div class="col-4 pt-3 pb-3">
												<h3 class="mb-1">₦45</h3><span>Refund</span>
											</div>
										</div>
									</div>
								</div>
								<a class="btn btn-outline-primary btn-rounded mt-3 px-5" data-bs-toggle="modal" data-bs-target="#startProcess">Start Registration Process</a>
							</div>
						</div>	
						
					</div>

					<div class="modal fade modal fade bd-example-modal-lg" id="startProcess" >
						<div class=" modal-dialog modal-dialog-centered  modal-lg" role="document">
							<div class="modal-content">
								<!-- <div class="modal-header">
									<button type="button" class="btn-close" data-bs-dismiss="modal">
									</button>
								</div> -->
								<div class="row">
									<div class="col-xl-12 col-xxl-12">
										<div class="card">
											<div class="card-header">
												<h4 class="card-title">Account Signup</h4>
											</div>
											<div class="card-body">
												<form id="msform">
													<ul id="progressbar">
														<li class="active" id="account"><strong>Verify Account</strong></li>
														<li id="personal"><strong>Personal</strong></li>
														<li id="payment"><strong>Channel</strong></li>
														<li id="confirm"><strong>Finish</strong></li>
													</ul>
													<div class="progress">
														<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
													</div> <br> 
													<fieldset>
														<div class="form-card text-center">
															<div class="row text-center" >
																<h4>Please enter your verification code:</h4>
																<div class="col-lg-5 centralize" >
																		<input type="text" name="place" class="form-control" required style="border-color: ;">
																</div>
															</div>
														</div> <input type="button" name="next" class="next action-button" value="Next" />
													</fieldset>
													<fieldset>
														<div class="form-card">
															<div class="row">
																<div class="row">
																	<div class="col-lg-6 mb-2">
																		<div class="mb-3">
																			<label class="text-label form-label">First Name*</label>
																			<input type="text" name="firstName" class="form-control" placeholder="Parsley" required>
																		</div>
																	</div>
																	<div class="col-lg-6 mb-2">
																		<div class="mb-3">
																			<label class="text-label form-label">Last Name*</label>
																			<input type="text" name="lastName" class="form-control" placeholder="Montana" required>
																		</div>
																	</div>
																	<div class="col-lg-6 mb-2">
																		<div class="mb-3">
																			<label class="text-label form-label">Email Address*</label>
																			<input type="email" class="form-control" id="inputGroupPrepend2" aria-describedby="inputGroupPrepend2" placeholder="example@example.com.com" required>
																		</div>
																	</div>
																	<div class="col-lg-6 mb-2">
																		<div class="mb-3">
																			<label class="text-label form-label">Phone Number*</label>
																			<input type="text" name="phoneNumber" class="form-control" placeholder="(+1)408-657-9007" required>
																		</div>
																	</div>
																	<div class="col-lg-12 mb-3">
																		<div class="mb-3">
																			<label class="text-label form-label">Where are you from*</label>
																			<input type="text" name="place" class="form-control" required>
																		</div>
																	</div>
																</div>
																</div>
														</div> 
														<input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
													</fieldset>
													<fieldset>
														<div class="form-card">
															<div class="row text-center">
																
																<div class="col-lg-4">
																	<div class="form-check form-check-inline">
																		<label class="form-check-label">
																			<input type="checkbox" class="form-check-input" value=""
																				checked>
																		</label>
																	</div>
																	<img src="images/drone.svg" width="35%"/>
																	<p style="padding-left: 20%;">Drone Delivery</p>
																</div>

																<div class="col-lg-4">
																	<div class="form-check form-check-inline">
																		<label class="form-check-label">
																			<input type="checkbox" class="form-check-input" value=""
																				checked>
																		</label>
																	</div>
																	<img src="images/scooter.svg" width="35%"/>
																	<p  style="padding-left: 20%;">Bike Delivery</p>
																</div>
																<div class="col-lg-4">
																	<div class="form-check form-check-inline">
																		<label class="form-check-label">
																			<input type="checkbox" class="form-check-input" value=""
																				checked>
																		</label>
																	</div>
																	<img src="images/bicycle.svg" width="35%"/>
																	<p  style="padding-left: 20%;">Bicycle Delivery</p>
																</div>
															</div> 

															<div class="row text-center">
																<div class="col-lg-4">
																	<div class="form-check form-check-inline">
																		<label class="form-check-label">
																			<input type="checkbox" class="form-check-input" value=""
																				checked>
																		</label>
																	</div>
																	<img src="images/shipped.svg" width="35%"/>
																	<p  style="padding-left: 20%;">Truck Delivery</p>
																</div>

																<div class="col-lg-4">
																	<div class="form-check form-check-inline">
																		<label class="form-check-label">
																			<input type="checkbox" class="form-check-input" value=""
																				checked>
																		</label>
																	</div>
																	<img src="images/car.svg" width="35%"/>
																	<p  style="padding-left: 20%;">Car Delivery</p>
																</div>
																<!-- <div class="col-lg-4">
																	<img src="images/bicycle.svg" width="35%"/>
																	<p>Bicycle Delivery</p>
																</div> -->
															</div> 
														</div> 
														<input type="button" name="next" class="next action-button" value="Submit" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
													</fieldset>
													<fieldset>
														<div class="form-card">
															<div class="row">
															
															</div> <br><br>
															<h2 class="purple-text text-center"><strong>SUCCESS !</strong></h2> <br>
															<div class="row justify-content-center">
																<div class="col-3"> <img src="images/draw-check-mark.svg" class="fit-image"> </div>
															</div> <br><br>
															<div class="row justify-content-center">
																<div class="col-7 text-center">
																	<h5 class="purple-text text-center">You Have Successfully Completed your Registration</h5>
																</div>
															</div>
														</div>
													</fieldset>
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
   
</template>

<script>
import { defineComponent } from 'vue'
// import SideBar from '../../components/Merchant/SideBar.vue'
export default defineComponent({
    name:'MerchantDashboard',
    components:{SideBar},
    data(){
        return{

        }
    }
})
</script>