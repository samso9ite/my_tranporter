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
                                            <label ><strong>Mobile Number</strong></label>
                                            <br>
                                             <div class="input-group mb-4">
                                                 
                                                 <span class="col-lg-3">                                   
                                                    <select class="default-select btn-color sel_style wide"  v-model="country">
                                                    <option value="NG" selected>+234</option>
                                                    <option value="Ethopia">+235</option>
                                                    <option value="Ghana">+236</option>
                                                    <option value="Mali">+237</option>
                                                </select>
                                            </span>
										    <input type="text" class="form-control" placeholder="" name="phone" v-model="phone">
                                        </div>
                                            <div class="text-center">
                                                <button class="btn btn-primary btn-block">SUBMIT</button>
                                            </div>
                                        </form>
                                          <div class="new-account mt-3">
                                        <p>Already have an account?  <router-link :to="'/login'" class="text-primary"> Sign in</router-link></p>
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
import { createToast } from 'mosha-vue-toastify';
    export default ({
    name: 'Signup',
    data(){
        return{
            phone: '',
            country: 'NG',
            errors: [],
            phoneData :'',
            loading: false,
            countryCod : '',
            codes: [{country: "NG", code:"+234"}, {country:"South Africa", code: "+235"}, {country:"Ghana", code: "+233"}],
        }
    },
    methods:{
        submitForm(e){
            this.errors.splice(0);
            this.loading = true
            var output =  this.codes.filter(code => {
            return code.country == this.country
            })
            if (output[0].country === this.country){
                this.countryCod = output[0].code
            }
            this.phoneData = this.countryCod + this.phone
            const formData = {phone: this.phoneData, country:this.country}
            Api.axios_instance.post(Api.baseUrl+'/auth/user/request/otp', formData)
            .then(response =>{
                createToast('Token has been sent')
                this.$store.commit('set_reference', response.data.data)
                this.$router.push('/validate-otp')
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