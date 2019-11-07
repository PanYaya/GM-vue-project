<template>
  <div id="app">
    <gm-carts-header></gm-carts-header>
    <gm-carts-main></gm-carts-main>
    <gm-carts-footer></gm-carts-footer>
  </div>
</template>

<script>
// import BottomBar from '../components/bottombar/bottombar'
import header from '../components/carts/header'
import footer from '../components/carts/footer'
import main from '../components/carts/main'
export default {
  name: 'carts',
  components: {
    'gm-carts-header': header,
    'gm-carts-footer': footer,
    'gm-carts-main': main
    // BottomBar
  },
  data () {
    return {
      cartInfo: [] // 页面的数据模型
    }
  }
}
</script>
<!--<Add "scoped" attribute to limit CSS to this component only>-->
<style scoped>
@import "../assets/css/3.css";
</style>
