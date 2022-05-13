<template>
<div>
  <vue3-progress />
  <router-view/>
</div>
</template>

<script>
import axios from 'axios'

  export default{
    name: 'App',
    beforeCreate() {
      this.$store.commit('initializeStore')
      const token = this.$store.state.token
      
      if(token){
        axios.defaults.headers.common['Authorization'] = "Token" + token
      }else{
        axios.defaults.headers.common['Authorization'] = ""
      }
    },
     mounted() {
      this.$progress.finish();
    },
    created() {
      this.$progress.start();

      this.$router.beforeEach((to, from, next) => {
        this.$progress.start();
        next();
      });

      this.$router.afterEach((to, from) => {
        this.$progress.finish();
      });
    },
  }
</script>
