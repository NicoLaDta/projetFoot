import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueAgile from 'vue-agile'
import router from './router'
 
Vue.use(VueAgile)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
