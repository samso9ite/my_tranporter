<template>
<div class="root">
    <!-- <img  src="../../../statics/bg13.png" /> -->
    <!-- <video autoplay muted loop id="myVideo">
        <source src="../../../statics/video_preview_h264.mp4" type="video/mp4">
      </video> -->
    <div class="authincation h-100 ontop bg">
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
                                    <h4 class="text-center mb-4">Sign in your account</h4>
                                    <form @submit.prevent="submitForm">
                                         <label class="mb-1"><strong>Mobile Number</strong></label>
                                               <div class="input-group mb-3">
                                                 <span class="col-lg-3">                                   
                                                    <select class="default-select btn-color sel_style wide" name="country">
                                                    <option value="NG" selected>+234</option>
                                                    <option value="NG">+235</option>
                                                    <option value="United">+236</option>
                                                    <option value="+34">+237</option>
                                                </select>
                                            </span>
										    <input type="text" class="form-control" placeholder="" name="phone" v-model='phone'>
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" name="password" v-model="password">
                                        </div>
                                        <div class="row d-flex justify-content-between mt-4 mb-2">
                                            <div class="mb-3">
                                               <div class="form-check custom-checkbox ms-1">
													<input type="checkbox" class="form-check-input" id="basic_checkbox_1">
													<label class="form-check-label" for="basic_checkbox_1">Remember my preference</label>
												</div>
                                            </div>
                                            <div class="mb-3">
                                               <router-link :to="'/forgot-pwd'"> Forgot Password? </router-link>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                           <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Don't have an account?  <router-link :to="'/user-signup'" class="text-primary"> Sign up</router-link></p>
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
    export default({
        name: "Login",
        data(){
            return{
                password: '',
                phone: ''
            }
        },
        methods: {
            submitForm(e){
                const formData= {password: this.password, phone: this.phone}
                Api.axios_instance.post(Api.baseUrl+'/auth/user/login', formData)
                .then(response => {
                    const data = {
                        email:response.data.user_details.email,
                        first_name: response.data.user_details.first_name,
                        last_name:response.data.user_details.last_name,
                        wallet_balance: response.data.user_details.wallet_balance,
                        phone: response.data.user_details.phone,
                        image: response.data.user_details.image,

                    }
                    this.$store.commit('set_user_details', data)
                    console.log(this.$store.state.user);
                    // console.log(response.data.user)
                    window.localStorage.setItem('email', JSON.stringify(response.data.user_details.email))
                    window.localStorage.setItem('first_name', JSON.stringify(response.data.user_details.first_name))
                    window.localStorage.setItem('last_name', JSON.stringify(response.data.user_details.last_name))
                    window.localStorage.setItem('wallet_balance', JSON.stringify(response.data.user_details.wallet_balance))
                    window.localStorage.setItem('phone', JSON.stringify(response.data.user_details.phone))
                    window.localStorage.setItem('image', JSON.stringify(response.data.user_details.image))
                    window.localStorage.setItem('token', JSON.stringify(response.data.token))
                    window.localStorage.setItem('referal_code', JSON.stringify(response.data.user_details.referral_code))
                    this.$router.push('/')
                    window.location.href='/'
                   
                })
                .catch(error =>{
                    console.log(error) 
                })
            }
        }
    }) 
</script>

<style scoped>
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
.bg {
  /* The image used */
  background-image: url("../../../statics/bg13.png");
 background-blend-mode: overlay;
-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>