import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Classify from '../views/classify'
import Carts from '../views/carts'
import Wode from '../views/wode'
import Login from '../views/login'
// import Content from '../classify/main/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }
    // {
    //   path: '/content',
    //   name: 'Content',
    //   component: Content,
    //   meta: { keepAlive: true }
    // }
  ]
})

// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
