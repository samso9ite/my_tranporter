import { createApp } from 'vue'
import  VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueToastify from "vue-toastify";
window.$ = window.jQuery = require('jquery');

axios.defaults.baseURL= "http://18.188.70.103:8000/api/"

createApp(App).use(store).use(router, axios).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAFbHM1j8bJmZ5cqqyFM48HkKMAldFq6qc',
        libraries: "places"
    },
}).mount('#app')

