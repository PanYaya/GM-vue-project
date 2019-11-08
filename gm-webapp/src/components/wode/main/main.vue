<template>
  <div class="main">
    <ul>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/huiyuanbu.png" alt=""></a>
        <p>会员俱乐部</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/viphuiyuanka.png" alt=""></a>
        <p>我的会员卡</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/shoucang.png" alt=""></a>
        <p>我的收藏</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/fapiaozhushou.png" alt=""></a>
        <p>发票助手</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/yuyue.png" alt=""></a>
        <p>我的预约</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/pingtuan.png" alt=""></a>
        <p>我的拼团</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/yijian.png" alt=""></a>
        <p>服务规则</p>
      </li>
      <li>
        <a href=""><img src="http://39.107.139.165/4img/shouhuo.png" alt=""></a>
        <p>收货地址</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vmain'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    width: 100%;

  }
  .main ul{
    width: 100%;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* padding:0.2rem 0.1rem 0.1rem 0.1rem; */
    text-align: center;
  }
  .main ul li{
    width: 19%;
    margin: 0.1rem;
  }
  .main ul li img{
    width: 0.25rem;
    height: 0.25rem;
  }
</style>
