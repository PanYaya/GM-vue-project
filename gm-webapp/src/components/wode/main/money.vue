<template>
  <div class="money">
    <ul style="height: 0.68rem;">
      <li style="width: 20%">
        <p>0.00</p>
        <p>国美币金额</p>
      </li>
      <li>
        <p>7</p>
        <p>优惠券</p>
      </li>
      <li>
        <p>0</p>
        <p>美豆</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/meitongka.png" alt=""></a>
        <p>美通卡</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/qianbao.png" alt=""></a>
        <p>我的钱包</p>
      </li>
    </ul>
  </div>
</template>

<script >

export default {
  name: 'money'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .money{
    width: 100%;
    height: 0.96rem;
  }
  .money ul{
    padding:0.2rem 0.1rem 0.1rem 0.1rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .money ul li{
    width: 19%;
  }
  .money ul li img{
    width: 0.25rem;
    height: 0.25rem;
  }
  .money ul li p span{
    font-size: 0.08rem;
    color: rgb(184, 180, 180);
  }
  .money ul li:last-child{
    width: 21%;
  }
</style>
