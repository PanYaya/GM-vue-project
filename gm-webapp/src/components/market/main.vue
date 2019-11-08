<template>
  <div class="main">
    <div class="Carousel-figure">
      <p>
        <img src="http://39.107.139.165/6img/search.png" alt="">
        <input type="text" placeholder="苏泊尔">
      </p>
    </div>
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

export default {
  name: 'content'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Carousel-figure{
    height: 2rem;
    width: 100%;
    background-image: url(http://39.107.139.165/6img/lunbo.jpg);
    background-size:100%;
    text-align: center;
    position: relative;
  }
  .Carousel-figure p{
    position: absolute;
    top: 0.1rem;
    left: 0.37rem;
    width:80%;
    border-radius: 0.0rem;
    color: #999;
    font-size: .26rem;
    background: #fff;
    border-radius: .45rem;
    box-sizing: border-box;

  }
  .Carousel-figure p img{
    width: 0.2rem;
    height: 0.18rem;
  }
  .Carousel-figure p input{
    border: none;
    position: relative;
    top: -0.04rem;
  }
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
