<template>
    <div>
     <video autoplay muted loop id="myVideo">
        <source src="../../../statics/video_preview_h264.mp4" type="video/mp4">
    </video>
    <div class="authincation h-100 ontop">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
									<div class="text-center mb-3">
										<a href="index.html"><img src="../../../statics/fav.png" alt=""></a>
									</div>
                                    <h4 class="text-center mb-4">Merchant Signup</h4>
                                    <form @submit.prevent="register">
                                        <div class="mb-3">
                                            <label class="mb-1" ><strong>Company Name</strong></label>
                                            <input type="text" class="form-control" placeholder="Company Name" name="company_name" v-model="company_name">
                                        </div>
                                          <div class="mb-3">
                                            <label class="mb-1"><strong>Transport Type</strong></label>
                                            <select class="default-select form-control wide mb-3" name="transport_types" v-model="transport_types">
                                                <option value="BIKE">BIKE</option>
                                                <option value="DRONE">DRONE</option>
                                                <option value="TRUCK">TRUCK</option>
                                                <option value="VAN"> VAN </option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>First Name</strong></label>
                                            <input type="text" class="form-control" placeholder="First Name" name="first_name" v-model="first_name">
                                        </div>
                                          <div class="mb-3">
                                            <label class="mb-1"><strong>Last Name</strong></label>
                                            <input type="text" class="form-control" placeholder="Last Name" name="last_name" v-model="last_name">
                                        </div>
                                        <label class="mb-3"><strong>Mobile Number</strong></label>
                                               <div class="input-group mb-3">
                                                 <span class="col-lg-3">                                   
                                                    <select class="default-select btn-color sel_style wide" name="country" v-model="country">
                                                    <option value="NG" selected>+234</option>
                                                    <option value="NG">+235</option>
                                                    <option value="United">+236</option>
                                                    <option value="+34">+237</option>
                                                </select>
                                            </span>
										    <input type="text" class="form-control" placeholder="" name="phone" v-model='phone'>
                                        </div>
                                        
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input type="email" class="form-control" placeholder="hello@example.com" name="email" v-model="email">
                                        </div>
                                       
                                        <div class="mb-3">
                                            <label class="mb-1" ><strong>Password</strong></label>
                                            <input type="password" class="form-control"  v-model="password" name="password">
                                        </div>
                                      
                                        <div class="text-center mt-4">
                                            <button  class="btn btn-primary btn-block">Sign me up</button>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Already have an account? <a class="text-primary" href="page-login.html">Sign in</a></p>
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
import Api from "../../Api.js"
export default {
    name:"Register",
    data(){
        return{
            company_name:'',
            last_name:'',
            email:'',
            password:'',
            phone:'',
            country:'NG',
            first_name:'',
            transport_types:'BIKE'
        }
    },

    methods: {
        register(e){
            const formData ={
                phone:this.phone,
                email:this.email,
                password: this.email,
                name: this.company_name,
                last_name: this.last_name,
                first_name: this.first_name,
                country: this.country,
                transport_types: this.transport_types
            }
            Api.axios_instance.post(Api.baseUrl+'/merchant/portal/register', formData)
            .then(response => {
                console.log(response)
                window.localStorage.setItem('token', JSON.stringify(response.data.token))
                // this.$router.push('/merchant-otp-validation'')
                // window.location.href='/merchant-otp-validation'
            })
            .catch(error =>{
              console.log(error.response);  
            })
        }
    }
}
</script>

<style >
.sel_style{
     height: 55px;
     width: 100%;
     margin-right:-1%;
     border-radius: 20px 0px 0px 20px;
     padding-top:7px;
     font-weight:400;
     border-color: transparent;
    padding: 5px;
}
.btn-color{
    background-color: rgb(241 235 235 / 70%);   
}
</style>