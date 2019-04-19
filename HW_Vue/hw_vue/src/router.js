import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/',component:resolve=>require(['@/views/index.vue'],resolve)},
    {path: '/index',name:"index",component:resolve=>require(['@/views/index.vue'],resolve)},
    {path:'/shopping',component:resolve=>require(['@/views/shopping.vue'],resolve)},
    {path:'/header',component:resolve=>require(['@/components/header.vue'],resolve),props:true},
    {path:'/register',name:"register",component:resolve=>require(['@/views/register.vue'],resolve)},
    {path: '/details',name: 'details', component:resolve=>require(['@/views/details.vue'],resolve)},
    {path:'/login',component:resolve=>require(['@/views/login.vue'],resolve)},
    {path: '/u',component:resolve=>require(['@/views/01.vue'],resolve)},
    {path: '*',component:resolve=>require(['@/views/NotFount.vue'],resolve)}
  ]
})
