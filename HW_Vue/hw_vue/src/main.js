import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import myHeader from "@/components/header"
import myFooter from "@/components/footer"
Vue.config.productionTip = false
axios.defaults.withCredentials=true
Vue.prototype.axios=axios
axios.defaults.baseURL="http://127.0.0.1:3000"
Vue.component('myHeader',myHeader);
Vue.component('myFooter',myFooter);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
