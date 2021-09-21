<template>
		<div class="row" >
			<div class="col-xl-12">
				<div class="row  text-center" style="background-color:#ff6600; border-top-left-radius:30px;  border-top-right-radius:30px">
					<h3 style="padding-top:1em; color:white">Enter Pickup & Drop-Off Point</h3>
				</div>
				<div class="row" style="margin-top:2.5em">
					<div class="col-lg-12">
						<div class="row">
							<div  class="col-sm-1"  style="margin-top:0.6em">
								<img src="../statics/button.png" /> 
							</div>
						
							<div class="col-sm-11">
								<GMapAutocomplete
									placeholder="This is a placeholder"
										class="form-control"
									@place_changed="setOrigin"
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
									placeholder="This is a placeholder"
									class="form-control"
									@place_changed="setDestination"
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
			state: 'description'
		}
	},
	methods:{
		updateState(){
			this.$emit('change_state', this.state)
		},
		setDestination(data){
			this.$emit('setDestination', data)
		},
		setOrigin(data){
			this.$emit('setOrigin', data)
		}
	}
}

</script>