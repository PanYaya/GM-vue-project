import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Classify from '../views/classify'
import Carts from '../views/carts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/carts',
      name: 'Carts',
      component: Carts
    }
  ]
})
