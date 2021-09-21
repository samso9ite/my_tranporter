<template>
<div class="root">
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
                                    <h4 class="text-center mb-4">Sign in your account</h4>
                                    <form @submit.prevent="submitForm">
                                          <div class="mb-3">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input type="email" class="form-control" name="email" v-model="email">
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
                email: ''
            }
        },
        methods: {
            submitForm(e){
                const formData= {password: this.password, email: this.email}
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/login', formData)
                .then(response => {
                    const data = {
                        email:response.data.user_details.email,
                        first_name: response.data.user_details.first_name,
                        last_name:response.data.user_details.last_name,
                        phone: response.data.user_details.phone,
                        image: response.data.user_details.image,

                    }
                   
                    window.localStorage.setItem('token', JSON.stringify(response.data.token))
                    this.$router.push('/')
                    window.location.href='/'
                    this.$store.commit('set_user_details', data)
                })
                .catch(error =>{
                    console.log(error) 
                })
            }
        }
    }) 
</script>
