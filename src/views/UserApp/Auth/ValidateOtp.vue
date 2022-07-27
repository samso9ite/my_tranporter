<template>
    <div class="root">
        <div class="authincation h-100 ontop bg">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-md-6">
                        <div class="authincation-content">
                            <div class="row no-gutters">
                                <div class="col-xl-12">
                                    <div class="auth-form text-center" style="margin:auto 0">
                                        <div class="text-center mb-3">
                                            <a href="index.html">
                                                <img  src="../../../statics/fav.png"  /></a>
                                        </div>
                                        <h4 class="text-center mb-4">OTP Validation </h4>
                                          <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}</strong></span>
                                        </div>
                                        <div style="display: flex; flex-direction: row;" class="centralize">
                                            <v-otp-input
                                            ref="otpInput"
                                            input-classes="otp-input"
                                            separator="-"
                                            :num-inputs="4"
                                            :should-auto-focus="true"
                                            :is-input-num="true"
                                            :conditionalClass="['one', 'two', 'three', 'four']"
                                            :placeholder="['*', '*', '*', '*']"
                                            @on-change="handleOnChange"
                                            @on-complete="handleOnComplete"
                                            />
                                        </div>
                                        <div class="spinner-border " v-if="loading" style="color:#FF6600 "></div>
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
import VOtpInput from 'vue3-otp-input';
export default ({
    name: 'ValideOtp',
    components: {
        VOtpInput,
    },
    data(){
        return{
            token: '',
            errors: '',
            loading: false
        }
    },
    methods:{
        handleOnComplete(value){
            this.loading = true
        //    this.errors.splice(0);
            const phone = this.$store.state.phone
            const reference = this.$store.state.reference
            const formData = {phone: phone, token: value, reference: reference, }
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
            .finally(() => {
                    this.loading = false
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

.otp-input {
  width: 60px;
  height: 60px;
  padding: 5px;
  margin: 0 10px;
  font-size: 30px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #D2D2CF;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}

.centralize{
    margin-left: 3rem !important;
}
</style>