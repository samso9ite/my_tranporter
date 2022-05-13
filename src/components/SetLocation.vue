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
						<div class="row">
							<div  class="col-sm-1"  style="margin-top:0.6em">
								<img src="../statics/button.png" /> 
							</div>
						
							<div class="col-sm-11">
								<GMapAutocomplete
									placeholder="Set Pickup Location"
									class="form-control"
									@place_changed="setOrigin"
									@click="resetStatus"
								>
								</GMapAutocomplete>
							</div>
						</div>
						<div class="mb-2" style="margin-left:8px">
							<img src="../statics/marker_line.png" /> 
						</div>
						<div class="mb-4 row">
							<div  class="col-sm-1" >
								<img src="../statics/maps-and-flags.png" /> 
							</div>
							<div class="col-sm-11">
								<GMapAutocomplete
									placeholder="Set Dropoff Location"
									class="form-control"
									@place_changed="setDestination"
									@click="resetStatus"
								>
								</GMapAutocomplete>
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
	data(){
		return{
			state: 'description',
			setPickupStatus: false,
			setDestinationStatus: false,
			status: false
		}
	},
	methods:{
		resetStatus(){
			this.status = false
		},
		updateState(){
			if(this.setPickupStatus == true && this.setDestinationStatus == true){
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