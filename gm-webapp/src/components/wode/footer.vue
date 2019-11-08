<template>
  <div class="bottom">
    <a href="">
      <img src="http://39.107.139.165/4img/bottom-1.jpg" alt="">
      <p class="title">海尔（Haier）BC/BD-100HEP 100升彩晶小冷柜 节能低霜 气悬浮减霜 家用商用二合一 卧式冷柜 醇享银色</p>
      <span>￥1699.00</span>
    </a>
    <a href="">
      <img src="http://39.107.139.165/4img/bottom-2.jpg" alt="">
      <p class="title">海尔（Haier）BC/BD-203HE 203升冷柜 超薄彩晶小富豪 气悬浮减霜 家用商用二合一 卧式冰箱 白色</p>
      <span>￥1799.00</span>
    </a>


  </div>
</template>

<script>
export default {
  name: 'vfooter'
}
</script>

<style scoped>
  .bottom{
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    background-color:rgb(245, 239, 239);
  }
  .bottom img{
    width: 1.7rem;
    height: 1.rem;;
  }
  .bottom .title{
    display: inline-block;
    height: 0.4rem;
    overflow: hidden;
    color: black;
    margin-bottom: 0.05rem;
  }
  .bottom a span{
    color: red;
  }
</style>
