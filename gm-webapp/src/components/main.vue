<template>
  <div class="main">
    <gm-carousel-figure></gm-carousel-figure>
    <gm-content></gm-content>
    <gm-meddle></gm-meddle>
    <gm-select></gm-select>
  </div>
</template>

<script>
import carousel from './main/carousel'
import content from './main/content'
import meddle from './main/meddle'
import select from './main/select'
export default {
  name: 'main',
  components: {
    'gm-carousel-figure': carousel,
    'gm-content': content,
    'gm-meddle': meddle,
    'gm-select': select

  },
  data(){
    return {
      cartInfo:[]  //页面的数据模型
    }
  },
  methods: {
    _initPageData() {
      cartApi.getCartInfoByUserId(data=>{
        console.log(data)
        this.cartInfo= data;
      })
    },


  },
  created() {
    this._initPageData()
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
