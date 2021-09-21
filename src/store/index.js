import { createStore } from 'vuex'
export default createStore({
  state: {
    user: {
      username: '',
      email: '',
      image: '',
      first_name: '',
      last_name: '',
      wallet_balance: '',
      phone: '',
      cards:[]
    },
    order: {
      pickup_latitude: '',
      pickup_longitude: '',
      pickup_location: '',
      transport_type: '',
      merchant_id: '',
      destination: '',
      set_time: '',
      destination_latitude: '',
      destination_longitude:'',
      extra_description: '',
      expected_time:'',
      item_description: '', 
      merchant_list: [],
      recommended_merchant: {},
      distance_in_km: '',
      transport_fee: '', 
      reference: ''
    },
    isAuthenticated: false,
    token:'',
    phone: '',
    reference: ''
  },
  mutations: {
    initializeStore(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      }else{
        state.isAuthenticated = false
        state.token = ''
      }
    },
    setToken(state, token){
      state.token = token
      state.isAuthenticated = false
    },
    removeToken(state){
      state.token= ''
      state.isAuthenticated = false
    },
    set_user_details(state, payload){
      console.log('jdhslk;lk')
      console.log(localStorage.getItem('email'))
      state.user.email = JSON.parse(localStorage.getItem('email'))
      state.user.first_name = JSON.parse(localStorage.getItem('first_name'))
      state.user.last_name = JSON.parse(localStorage.getItem('last_name'))
      state.user.wallet_balance = JSON.parse(localStorage.getItem('wallet_balance'))
      state.user.phone = JSON.parse(localStorage.getItem('phone'))
      state.user.image = JSON.parse(localStorage.getItem('image'))
      // if(payload){
      // state.user.email = payload.email
      // state.user.first_name = payload.first_name
      // state.user.last_name = payload.last_name
      // state.user.wallet_balance = payload.wallet_balance
      // state.user.phone = payload.phone
      // state.user.image = payload.image
      // }
    },
    set_reference(state, payload){
      state.phone = payload.phone
      state.reference =payload.reference
    }, 
    set_location(state, payload){
      if (payload.type=="origin"){
        state.order.pickup_latitude = payload.pickup_latitude
        state.order.pickup_longitude = payload.pickup_longitude
        state.order.pickup_location = payload.pickup_location
      }
      else{
        state.order.destination_latitude = payload.destination_latitude
        state.order.destination_longitude = payload.destination_longitude
        state.order.destination = payload.destination
      }
     
    },
    set_more_info(state, payload){
      state.order.set_time = payload.set_time
      state.order.extra_description = payload.extra_description
      state.order.item_description = payload.item_description
      state.order.transport_type = payload.transport_type
    },
    set_merchant(state, payload){
      state.order.merchant_id = payload.merchant_id
    },
    get_merchant(state, payload){
      state.order.merchant_list = payload.merchant_list
      state.order.recommended_merchant = payload.recommended_merchant
    },
    set_distance(state, payload){
      state.order.distance_in_km = payload.distance_in_km
    },
    add_card(state, payload){
      state.user.cards = payload.cards
    },
    set_transport_fee(state, payload){
      state.order.transport_fee = payload.transport_fee,
      state.order.reference = payload.reference,
      state.order.expected_time = payload.expected_time
    }
   
  },
  
  actions: {
  },
  modules: {
  }
})
