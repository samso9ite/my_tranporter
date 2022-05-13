<template>
    <div class="root">
        <div class="authincation h-100 ontop bg">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-md-6">
                        <div class="authincation-content">
                            <div class="row no-gutters">
                                <div class="col-xl-12">
                                    <div class="auth-form">
                                        <div class="text-center mb-3">
                                            <a href="index.html">
                                                <img  src="../../../statics/fav.png"  /></a>
                                        </div>
                                        <h4 class="text-center mb-4">User Signup</h4>
                                         <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}</strong></span>
                                        </div>
                                        <form @submit.prevent="submitForm">
                                            <div class="mb-3">
                                                <label class="mb-1"><strong>Enter Verification Code </strong></label>
                                                <input type="number" class="form-control" name="token" v-model="token">
                                            </div>
                                            <div class="text-center">
                                                <button class="btn btn-primary btn-block">SUBMIT</button>
                                            </div>
                                        </form>
                                          <!-- <div class="new-account mt-3">
                                        <p>Already have an account?  <router-link :to="'/login'" class="text-primary"> Sign in</router-link></p>
                                    </div> -->
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
import { createToast } from 'mosha-vue-toastify';
export default ({
    name: 'ValideOtp',
    
    data(){
        return{
            token: '',
            errors: '',
        }
    },
    methods:{
        submitForm(e){
            this.errors.splice(0);
            const phone = this.$store.state.phone
            const reference = this.$store.state.reference
            const formData = {phone: phone, token: this.token, reference: reference, }
            Api.axios_instance.post(Api.baseUrl+'/auth/user/validate/otp?=vwznw2mw.O7U8tx23y0vyC5eUClLNyYqaIAJ08P40', formData)
            .then(response =>{
                createToast('OTP Validated')
                this.$router.push('/register')
            })
            .catch(error => {
                if (error.response){
                    for(const property in error.response.data){
                        this.errors.push(`${property}:${error.response.data[property]}`)
                    }
                    console.log(error.response);
                }
            })
    }
    }
})
</script>
<style >
.sel_style{
     height: 55px;
     margin-right:-1%;
     border-radius: 20px 0px 0px 20px;
     padding-top:7px;
     font-weight:700
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