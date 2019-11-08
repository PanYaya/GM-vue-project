<template>
  <div class="nav">
    <ul>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/1.png" alt=""></a>
        <p>待付款</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/2.png" alt=""></a>
        <p>待收货</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/3.png" alt=""></a>
        <p>待评价</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/4.png" alt=""></a>
        <p>退款/售后</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/5.png" alt=""></a>
        <p>全部订单<br><span>查看电子发票</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pay'
}
</script>

<style scoped>
  .nav{
      width: 100%;
      height: 0.96rem;
  }
  .nav ul{
      padding:0.2rem 0.1rem 0.1rem 0.1rem;
      display: flex;
      justify-content: space-between;
      text-align: center;
  }
  .nav ul li{
      width: 19%;
  }
  .nav ul li img{
      width: 0.25rem;
      height: 0.25rem;
  }
  .nav ul li p span{
      font-size: 0.08rem;
      color: rgb(184, 180, 180);
  }
  .nav ul li:last-child{
      width: 21%;
  }
</style>
