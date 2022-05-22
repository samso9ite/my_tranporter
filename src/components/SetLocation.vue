<template>
		<div class="row" >
			<div class="col-xl-12">
				<div class="row  text-center" style="background-color:#ff6600; border-top-left-radius:30px;  border-top-right-radius:30px">
					<h3 style="padding-top:1em; color:white">  Enter Pickup & Drop-Off Point</h3>
				</div>
				<div class="row" style="margin-top:2.5em">
					<div class="col-lg-12">
						<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="status">
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
							</button>
							<span><strong>Pickup or Dropoff Location hasn't been set<br></strong></span>
						</div>
						 <div class="row  form-material">
							<div class="col-lg-6 transport mb-3" v-for="location in location" :key="location" :class="{'active' : location.code  === transport_type}" @click="change_transport_type(type.code)">
								<img v-bind:src="type.image"><span style="font-weight:500">{{type.name}}</span>
							</div>
						</div>
						<div class="row">
							<div  class="col-sm-1"  style="margin-top:0.6em">
								<img src="../statics/button.png" /> 
							</div>
						
							<div class="col-sm-11">
								<GMapAutocomplete
									placeholder="Set Pickup Location"
									class="form-control"
									:value="pickup_address"
									@place_changed="setOrigin"
									@click="resetStatus('origin')"
								>
								</GMapAutocomplete>
								<div class="accordion" id="accordionExample">
									<div class="accordion-item">
									<p class="accordion-header" id="pickUp">
										<a data-bs-toggle="collapse" data-bs-target="#pickupAccordion" aria-expanded="true" aria-controls="pickupAccordion">
											Select from saved location <i class="fa fa-arrow-down" aria-hidden="true" style="color:#ff6600"></i>
										</a>
									</p>
									<div id="pickupAccordion" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<slot name="pickupSlot"></slot>
										</div>
									</div>
									</div>  
								</div>
							</div>

						</div>
						<!-- <div class="mb-2" style="margin-left:8px">
							<img src="../statics/marker_line.png" /> 
						</div> -->
						<div class="mb-4 row">
							<div  class="col-sm-1" >
								<img src="../statics/maps-and-flags.png" /> 
							</div>
							<div class="col-sm-11">
								<GMapAutocomplete
									placeholder="Set Dropoff Location"
									class="form-control"
									@place_changed="setDestination"
									:value="destination_address"
									@click="resetStatus('destination')"
								>
								</GMapAutocomplete>
								<div class="accordion" id="accordionExample">
									<div class="accordion-item">
									<p class="accordion-header" id="headingOne">
										<a data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											Select from saved locations <i class="fa fa-arrow-down" aria-hidden="true" style="color:#ff6600"></i>
										</a>
									</p>
									<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<slot name="destinationSlot"></slot>
										</div>
									</div>
									</div>  
								</div>
							</div>
							
						</div>
						<button type="button" class="btn btn-primary" @click="updateState" >Proceed</button>
					</div>
				</div>
			</div>
		</div>	
					
</template>

<script>
export default {
    name: 'SetLocation',
	props: ['pickup_address', 'destination_address'], 
	data(){
		return{
			state: 'description',
			setPickupStatus: false,
			setDestinationStatus: false,
			status: false,
			id: ''
		}
	},
	methods:{
		resetStatus(data){
			this.status = false
			if(data === "origin"){
				this.$emit('resetPickupData')
			} else {
				this.$emit('resetDestinationData')
			}
			
		},
		updateState(){
			// Check if pickup and destination location is set  
			if(this.setPickupStatus == true && this.setDestinationStatus == true || this.pickup_address.length && this.destination_address.length){
				this.$emit('change_state', this.state)
			} else {
				this.status = true
			}
		},
		setDestination(data){
			this.$emit('setDestination', data)
			this.setDestinationStatus = true
		},
		setOrigin(data){
			this.$emit('setOrigin', data)
			this.setPickupStatus = true
		}
	}
}
</script>

<style scoped>
	.accordion-header {
		padding: 3px 3px;
     	border:none;
		font-weight: 500;
	}
	.accordion-body{
		border:none;
	}
</style>