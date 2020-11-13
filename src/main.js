import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'
// 引入全局样式
import './assets/global.css'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
