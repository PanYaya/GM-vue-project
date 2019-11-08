<template>
  <div id="app">
    <gm-sy-header></gm-sy-header>
    <gm-sy-main></gm-sy-main>
    <gm-sy-footer></gm-sy-footer>
  </div>
</template>

<script>
// import BottomBar from '../components/bottombar/bottombar'
import gmApi from '../apis/gmApi'
import header from '../components/home/header'
import footer from '../components/home/footer'
import main from '../components/home/main'
export default {
  name: 'home',
  components: {
    'gm-sy-header': header,
    'gm-sy-footer': footer,
    'gm-sy-main': main
    // BottomBar
  },
  data () {
    return {
      shop: [] // 页面的数据模型
    }
  },
  methods: {
    _initPageData () {
      gmApi.getGMInfoByUserId(data => {
        console.log(data)
        this.shop = data
      })
    }
  },
  created () {
    this._initPageData()
  }
}
</script>
<!--<Add "scoped" attribute to limit CSS to this component only>-->
<style scoped>
@import "../assets/css/1.css";
</style>
