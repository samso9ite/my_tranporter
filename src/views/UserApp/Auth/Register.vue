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
                                        <form @submit.prevent="submitForm">
                                             <div class="mb-3">
                                                <label class="mb-1"><strong>First Name </strong></label>
                                                <input type="text" class="form-control" name="first_name" max="6" v-model="first_name">
                                            </div>
                                            <div class="mb-3">
                                                <label class="mb-1"><strong>Last Name </strong></label>
                                                <input type="text" class="form-control" name="last_name" max="6" v-model="last_name">
                                            </div>
                                            <div class="mb-3">
                                                <label class="mb-1"><strong>Email </strong></label>
                                                <input type="email" class="form-control" name="email" max="6" v-model="email">
                                            </div>
                                            <div class="mb-3">
                                                <label class="mb-1"><strong>Set Password </strong></label>
                                                <input type="password" class="form-control" name="password" max="6" v-model="password">
                                            </div>
                                            <div class="text-center">
                                                <button class="btn btn-primary btn-block">SUBMIT</button>
                                            </div>
                                        </form>
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
    export default ({
    name: 'Register',
    data(){
        return{
            first_name: '',
            last_name:'',
            password:'',
            email:'',
            errors: []
        }
    },
    methods:{
        submitForm(e){
            const phone = this.$store.state.phone
            const reference = this.$store.state.reference
            const formData = {password: this.password, first_name: this.first_name, last_name:this.last_name, email:this.email, phone:phone, reference:reference}
            Api.axios_instance.post(Api.baseUrl+'/auth/user/register', formData)
            .then(response =>{
                const data = {
                    email:response.data.user_details.email,
                    first_name: response.data.user_details.first_name,
                    last_name:response.data.user_details.last_name,
                    phone: response.data.user_details.phone,
              
                }
                this.$store.commit('set_user_details', data)
                console.log(this.$store.state.user);
                window.localStorage.setItem('email', JSON.stringify(response.data.user_details.email))
                window.localStorage.setItem('first_name', JSON.stringify(response.data.user_details.first_name))
                window.localStorage.setItem('last_name', JSON.stringify(response.data.user_details.last_name))
                window.localStorage.setItem('phone', JSON.stringify(response.data.user_details.phone))
                window.localStorage.setItem('token', JSON.stringify(response.data.token))
                window.localStorage.setItem('referal_code', JSON.stringify(response.data.user_details.referral_code))

                this.$router.push('/')
               
                window.localStorage.setItem('token', JSON.stringify(response.data.token))
                window.location.href = '/'
            })
            .catch(error => {
               if(error.response){
                   for(const property in error.response.data){
                       this.errors.push(`${property}:${error.response.data}`)
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