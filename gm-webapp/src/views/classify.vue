<template>
  <div id="app">
    <gm-classify-header></gm-classify-header>
    <gm-classify-main v-if="gmInfo" :data="gmInfo" :sid="sid"></gm-classify-main>
  </div>
</template>

<script>
import gmApi from '../apis/gmApi'
import header from '../components/classify/header'
import vmain from '../components/classify/vmain'
export default {
  name: 'classify',
  components: {
    'gm-classify-header': header,
    'gm-classify-main': vmain
  },
  data () {
    return {
      sid: '',
      gmInfo: [] // 页面的数据模型
    }
  },
  methods: {
    _initPageData () {
      gmApi.getGMInfoByUserId(data => {
        console.log(data)
        this.gmInfo = data
      })
    }
  },
  created () {
    this._initPageData()
  }
  // mounted: function () {
  //   console.log(this.gmInfo)
  // }
}
</script>
<!--<Add "scoped" attribute to limit CSS to this component only>-->
<style scoped>
  @import "../assets/css/1.css";
</style>
