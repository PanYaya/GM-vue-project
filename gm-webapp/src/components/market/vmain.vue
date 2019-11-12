<template>
  <div class="main">
    <gm-market-carousel></gm-market-carousel>
    <div class="product">
      <img src="http://39.107.139.165/6img/a.jpg" alt="">
      <img src="http://39.107.139.165/6img/b.jpg" alt="">
      <img src="http://39.107.139.165/6img/c.jpg" alt="">
      <img src="http://39.107.139.165/6img/d.jpg" alt="">
    </div>
    <div style="width: 100%; height:0.1rem; background-color:rgb(245, 239, 239)"></div>
    <div class="cu">
      <img src="http://39.107.139.165/6img/cu.png" alt="">
      <span>国美超市，爆品低至5折！</span>
      <span>查看详情></span>
    </div>
    <div style="width: 100%; height:0.1rem; background-color:rgb(245, 239, 239)"></div>
    <div class="nav">
      <img src="http://39.107.139.165/6img/pinpaijie.jpg" alt="">
    </div>
    <div style="width: 100%; height:0.04rem; background-color:rgb(245, 239, 239)"></div>
    <div class="content">
      <img src="http://39.107.139.165/6img/1.jpg" alt="">
      <img src="http://39.107.139.165/6img/2.jpg" alt="">
      <img src="http://39.107.139.165/6img/3.jpg" alt="">
      <img src="http://39.107.139.165/6img/4.jpg" alt="">
      <img src="http://39.107.139.165/6img/5.jpg" alt="">
      <img src="http://39.107.139.165/6img/6.jpg" alt="">
      <img src="http://39.107.139.165/6img/7.jpg" alt="">
      <img src="http://39.107.139.165/6img/8.jpg" alt="">
    </div>
    <div style="width: 100%; height:0.1rem; background-color:rgb(245, 239, 239)"></div>
    <div class="nav">
      <img src="http://39.107.139.165/6img/jingcai.jpg" alt="">
    </div>
    <div style="width: 100%; height:0.1rem; background-color:rgb(245, 239, 239)"></div>
  </div>
</template>

<script>
import carousel from './main/carousel'
export default {
  name: 'vmain',
  components: {
    'gm-market-carousel': carousel
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product img{
    width: 24%;
  }
  .cu{
    height: 0.22rem;
    font-size: 0.12rem;
    padding: 0.05rem  0rem 0rem 0.1rem;
  }
  .cu img{
    width:0.12rem;
    height: 0.12rem;
  }
  .cu span:last-child{
    display: inline-block;
    margin-left:0.1rem;
    color: rgb(6, 182, 252);
  }
  .nav img{
    width: 100%;
    height: 0.4rem;
  }
  .content img{
    width:24%;
    height: 0.63rem;

  }
</style>
