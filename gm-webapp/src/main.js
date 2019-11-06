/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
