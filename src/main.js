import { createApp } from 'vue'
import  VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vue3Progress from "vue3-progress"
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import vueCountryRegionSelect from 'vue3-country-region-select'
import FileSelector from 'vue-file-selector';
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import Toaster from "@meforma/vue-toaster";

window.$ = window.jQuery = require('jquery');
const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['NG', 'CM', "CG", "GH", "KE", "LR", "MA", "ZA", "TG", "ZM", "ZW"]
  } 

axios.defaults.baseURL= "http://18.188.70.103:8000/api/"

createApp(App).use(store).use(router, axios).use(vueCountryRegionSelect).use(Toaster).use(FileSelector).use(VueTelInput, VueTelInputOptions).use(PerfectScrollbar).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAFbHM1j8bJmZ5cqqyFM48HkKMAldFq6qc',
        libraries: "places"
    },
}).use(Vue3Progress).mount('#app')

