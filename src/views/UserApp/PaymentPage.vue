<template>
<div>
   <!-- {{url}} -->
         <iframe
            :src="`https://prismic.io/docs/technologies/vue-route-parameters`"
            width="100%"
            height="100"
            frameborder="0" v-show="true">
           </iframe>
</div>
</template>
<script>
    export default{
        name: 'PaymentPage',
        data(){
            return{
                url: this.$route.params.paystack_url
            }

        }
    }
</script>