<template>
  <div class="Carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><img src="http://39.107.139.165/6img/lunbo1.webp" alt=""></swiper-slide>
      <swiper-slide><img src="http://39.107.139.165/6img/lunbo2.webp" alt=""></swiper-slide>
      <swiper-slide><img src="http://39.107.139.165/6img/lunbo3.webp" alt=""></swiper-slide>
      <swiper-slide><img src="http://39.107.139.165/6img/lunbo4.webp" alt=""></swiper-slide>
      <swiper-slide><img src="http://39.107.139.165/6img/lunbo5.webp" alt=""></swiper-slide>
    </swiper>
    <p><img src="http://39.107.139.165/6img/search.png" alt=""><input type="text" placeholder="苏泊尔"></p>
  </div>
</template>

<script >
import '../../../../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carousel',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Carousel{
    height: 2rem;
    width: 100%;
    background-size:100%;
    text-align: center;
    position: relative;
  }
  .swiper-slide img{
    height: 2rem;
    width: 100%;
  }
  .Carousel p{
    position: absolute;
    top: 0.1rem;
    left: 0.37rem;
    width:80%;
    color: #999;
    font-size: .26rem;
    background: #fff;
    border-radius: .45rem;
    box-sizing: border-box;
    z-index: 999;
  }
  .Carousel>p>img{
    width: 0.2rem;
    height: 0.18rem;
    position: relative;
    left: -0.3rem;
  }
  .Carousel  input{
    border: none;
    position: relative;
    top: -0.04rem;
  }
</style>
