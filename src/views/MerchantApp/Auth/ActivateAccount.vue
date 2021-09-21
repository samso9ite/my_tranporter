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
    name: 'ActivateAccount',
    data(){
        return{
            token: '',
            errors: '',
        }
    },
    methods:{
        submitForm(e){
            Api.axios_instance.post(Api.baseUrl+'/merchant/portal/activate/account', {token:this.token})
            .then(response =>{
                console.log(response);
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

</style>