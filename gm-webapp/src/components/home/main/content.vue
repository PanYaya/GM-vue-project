<template>
  <div class="content">
    <ul>
      <li>
        <a href="">
          <div> <img src="../../../assets/1img/1.png" alt=""></div>
          <p>手机电脑</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="../../../assets/1img/2.png" alt=""></div>
          <p>国美电器</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="../../../assets/1img/3.png" alt=""></div>
          <p>国美超市</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="../../../assets/1img/4.png" alt=""></div>
          <p>美店组团</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="../../../assets/1img/5.png" alt=""></div>
          <p>分期购</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="../../../assets/1img/6.png" alt=""></div>
          <p>充值服务</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="../../../assets/1img/7.png" alt=""></div>
          <p>国美家装</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="../../../assets/1img/8.png" alt=""></div>
          <p>领美豆</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="../../../assets/1img/9.png" alt=""></div>
          <p>国美管家</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="../../../assets/1img/10.png" alt=""></div>
          <p>我的</p>
        </a>
      </li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'vcontent'
  // props: ['data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    width: 100%;
    text-align: center;
  }
  .content>ul{
    width: 100%;
    height: 1.88rem;
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    text-align: center;
  }
  .content ul li{
    width: 20%;
    margin-top:0.06rem ;

  }
  .content ul li a{
    color: black;
  }
  .content ul li a>div{
    width:100%;
    height:0.52rem;
    margin-bottom: 0.06rem;
    text-align: center;
  }
  .content ul li a>div>img{
    width:100%;
    height: 100%;
    border:none;
  }
</style>
