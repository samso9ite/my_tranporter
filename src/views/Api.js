import axios from 'axios'
const axios_instance = axios.create();
axios_instance.defaults.timeout = 300000;
axios_instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
axios_instance.defaults.headers.post['Accept'] = 'application/json;';
axios_instance.interceptors.request.use(async function (config) {
let token = await localStorage.getItem('token') 
    if(!navigator.onLine){
        alert("Hello! Seems you're offline");
        
        return {
          headers: {},
          method: config.method,
          url: ""
        };
      };
    if (token == null) {
    //   return JSON.parse(token)[0].access_token;
    }
  token =  JSON.parse(token)?.access
  token ? config.headers.Authorization = `Bearer ${token}` : null;
  config.headers['Access-Key'] = 'vwznw2mw.O7U8tx23y0vyC5eUClLNyYqaIAJ08P40';
  return config;
});
const baseUrl = 'http://18.188.70.103:8000/api'
// const mediaBaseUrl = 'https://api.groto.ng'
export default {
  axios_instance,
  baseUrl,
}               