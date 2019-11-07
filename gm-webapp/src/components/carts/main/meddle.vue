<template>
  <div class="meddle">
    <div class="recommend">
      <div>
        <img src="http://39.107.139.165/3img/11.jpg" alt="">
        <p class="product-name">魔蝎手（MOGEGAME）WM1009 无线鼠标 黑色 超薄便携/MAC苹果笔记本/男女生家用 【香肠派对 明日之后】</p>
        <p>
          <span>￥16.90</span>
          <span><img src="http://39.107.139.165/3img/cart.png" alt=""></span>
        </p>
      </div>
      <div>
        <img src="http://39.107.139.165/3img/22.jpg" alt="">
        <p class="product-name">伊莱克斯(Electrolux) 1P 定频 冷暖 壁挂式空调 EAW25FD13CA1</p>
        <p>
          <span>￥1499.00</span>
          <span><img src="http://39.107.139.165/3img/cart.png" alt=""></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meddle'
}
</script>

<style scoped>
  .meddle{
    width:100%;
    background-color:#f3f5f7;
  }
  .recommend{
    width: 95%;
    padding: 0.1rem 0.05rem 0.1rem 0.12rem;
    display: flex;

  }
  .recommend>div{
    width: 1.75rem;
    background-color: white;
  }
  .recommend>div:first-child{
    margin: 0rem 0.01rem 0.07rem 0rem;
  }
  .recommend>div:last-child{
    margin: 0rem 0.03rem 0.07rem 0.1rem;
  }
  .product-name{
    padding: 0.1rem;
    height: 0.30rem;
    overflow: hidden;
    /* text-overflow:ellipsis; */

  }
  .recommend>div>p:last-child{
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
  }
  .recommend>div>p:last-child>span:first-child{
    color: red;
  }
  .recommend>div>img{
    width: 1.6rem;
    height: 1.6rem;
  }
  .recommend>div>p>span>img{
    width: 0.24rem;
    height: 0.24rem;
  }

</style>
