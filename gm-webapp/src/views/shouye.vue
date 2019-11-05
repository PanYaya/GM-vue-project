<template>
  <div id="app">
    <gm-sy-header></gm-sy-header>
    <gm-sy-main></gm-sy-main>
    <gm-sy-footer></gm-sy-footer>
  </div>
</template>

<script>
import header from '../components/header'
import footer from '../components/footer'
import main from '../components/main'
export default {
  name: 'shouye',
  components: {
    'gm-sy-header': header,
    'gm-sy-footer': footer,
    'gm-sy-main': main
  },
    data () {
      return {
        cartInfo: [] // 页面的数据模型
      }
    },
    // created () {
    //   this._initPageData()
    // }
}
</script>

<style>

@import "../assets/1.css";

</style>
