<template>
    	<div class="row" >
			<div class="col-xl-12">
				<div class="row  text-center" style="background-color:#ff6600; border-top-left-radius:30px;  border-top-right-radius:30px">
					<h3 style="padding-top:1em; color:white">Order Completed</h3>
				</div>
				<div class="row" style="margin-top:2.5em">
					   <div class="form-card">
                <div class="row">
                </div> <br><br>
                <h2 class="purple-text text-center"><strong>SUCCESS !</strong></h2> <br>
                <div class="row justify-content-center">
                    <div class="col-3"> <img src="../statics/check.png" class="fit-image"> </div>
                </div> <br><br>
                <div class="row justify-content-center mb-3">
                    <div class="col-7 text-center">
                        <h5 class="text-center" style="">You have successfully ordered for a delivery service</h5>
                    </div>
                </div>
            </div>
            <br>
					
					</div>
			</div>
		</div>
</template>

<script>
    export default{
        name: 'Complete',
        state:'complete',
        data(){
            return{

            }
        },
       
       }
</script>