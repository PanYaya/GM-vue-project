<template>
<!--  <div class="Carousel-figure">-->
<!--    <img src="../../assets/1img/T13ZWyB4dT1RCvBVdK_1080_504.jpg" alt="">-->
<!--  </div>-->
  <swipe class="my-swipe">
    <swipe-item class="slide1">1</swipe-item>
    <swipe-item class="slide2">2</swipe-item>
    <swipe-item class="slide3">3</swipe-item>
  </swipe>
</template>

<script >
export default {
  name: 'carousel'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.css';
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
</style>
</style>
