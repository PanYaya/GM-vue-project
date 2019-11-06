<template>
  <div class="carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><img src="../../../assets/1img/swiper1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../../assets/1img/swiper2.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../../assets/1img/swiper3.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../../assets/1img/swiper4.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../../assets/1img/swiper5.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../../assets/1img/swiper6.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../../assets/1img/swiper7.jpg" alt=""></swiper-slide>
    </swiper>
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

</style>
