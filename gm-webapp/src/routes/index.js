import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Classify from '../views/classify'
import Carts from '../views/carts'
import Wode from '../views/wode'
import Login from '../views/login'
import Market from '../views/market'
import Register from '../views/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { keepAlive: true }
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify,
      meta: { keepAlive: true }
    },
    {
      path: '/carts',
      name: 'Carts',
      component: Carts,
      meta: { keepAlive: true }
    },
    {
      path: '/wode',
      name: 'Wode',
      component: Wode,
      meta: { keepAlive: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { keepAlive: true }
    },
    {
      path: '/market',
      name: 'Market',
      component: Market,
      meta: { keepAlive: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { keepAlive: true }
    }
  ]
})

// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
