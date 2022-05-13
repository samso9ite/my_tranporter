<template>
  <div class="container">
          <iframe
            :src="`./public/banners/banner1/index.html`"
            width="100%"
            height="100"
            frameborder="0" >
           </iframe>
    </div>
</template>

<script>
 export default{
     name:'Paystack',
     props:['url'],
     data(){
         return{

         }
     }
 }
</script>