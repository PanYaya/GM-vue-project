import Vue from 'vue'
import shouye from './views/shouye.vue'
import { Swipe, SwipeItem } from './main/caroule'

Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)
new Vue({
  el:"#app",
  render(h){
    return h(shouye)
  }
})
