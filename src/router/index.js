import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
  path: '/',
  name: 'Dashboard',
  component: () => import('../views/UserApp/UserDashboard.vue'),
  meta: { requiresAuth: true }
  },
  {
    path:'/user-signup',
    name: 'Signup',
    component : () => import('../views/UserApp/Auth/Signup.vue'),
   
  },
  {
    path: '/login',
    name: 'Login',
    component : () => import ('../views/UserApp/Auth/Login.vue')
  },
  {
    path: '/forgot-pwd',
    name: 'ForgotPwd',
    component: () => import('../views/UserApp/Auth/ForgotPwd.vue')
  }, 
  {
    path: '/order-history',
    name: 'OrderHistory',
    component: () => import('../views/UserApp/OrderHistory.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/validate-otp',
    name: 'ValidateOtp',
    component: () => import('../views/UserApp/Auth/ValidateOtp.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/UserApp/Auth/Register.vue')
  },
  {
    path:'/order-history',
    name: 'OrderHistory',
    component: () => import('../views/UserApp/OrderHistory.vue'),
    meta: { requiresAuth: true }
  },
  {
    path:'/wallet',
    name: 'Wallet',
    component: () => import('../views/UserApp/Wallet.vue'),
    meta: { requiresAuth: true }
  },
  {
    path:'/update-profile',
    name: 'Profile',
    component: () => import('../views/UserApp/Profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/paystack/:paystack_url',
    name: 'Paystack',
    component: () => import('../views/UserApp/PaymentPage.vue'),
    props:true,
    meta: { requiresAuth: true }
  },

  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../views/UserApp/Notification.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/bulk-upload-region',
    name: 'SetBulkRegion',
    component: () => import('../views/UserApp/SetBulkRegion.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/bulk-upload-partners',
    name: 'ListPartnersBulkUpload',
    component: () => import('../views/UserApp/ListPartnersBulkUpload.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/bulk-upload-initialize',
    name: 'InitializeBulkUpload',
    component: () => import('../views/UserApp/ListPartnersBulkUpload.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/file-upload',
    name: 'UploadCSV',
    component: () => import('../views/UserApp/UploadCSV.vue'),
    meta: { requiresAuth: true }
  },

  // Merchant Routers

// {
//   path:'/merchant-registration',
//   name: 'Registera',
//   component: () => import('../views/MerchantApp/Auth/Register.vue')
// },
// {
//   path:'/merchant-login',
//   naame:'Login',
//   component: () => import('../views/MerchantApp/Auth/Login.vue')
// },
{
  path:'/merchant-otp-validation',
  name: 'ActivateAccount',
  component: () =>import ('../views/MerchantApp/Auth/ActivateAccount.vue')
},
{
  path: '/merchant-dashboard',
  name: 'MerchantDashboard',
  component: () =>import ('../views/MerchantApp/MerchantDashboard.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (window.localStorage.getItem('isAuthenticated') === 'true') {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
