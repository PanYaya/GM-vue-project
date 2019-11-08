<template>
  <div class="bottom">
    <ul>
      <li>
        <a href="">
          <img src="http://39.107.139.165/5img/mdhy.png" alt="">
          <p>门店会员</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="http://39.107.139.165/5img/QQ.png" alt="">
          <p>QQ</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="http://39.107.139.165/5img/weibo.png" alt="">
          <p>新浪微博</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="http://39.107.139.165/5img/zfb.png" alt="">
          <p>支付宝</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vfooter'
}
</script>

<style scoped>
  .bottom>ul{
    display: flex;
    justify-content: space-around;
  }
  .bottom img{
    width: 0.42rem;
    height: 0.42rem;
  }
  .bottom>ul>li{
    border:none;
  }
  .bottom p{
    color: black;
  }
</style>
