<template>
  <footer >
    <ul>
      <li>
        <a href="">
          <div> <img src="http://39.107.139.165/6img/shouye.png" alt=""></div>
          <p>首页</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="http://39.107.139.165/6img/dz.png" alt=""></div>
          <p>低至19.9元</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="http://39.107.139.165/6img/wuzhe.png" alt=""></div>
          <p>低至5折</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="http://39.107.139.165/6img/shiping.png" alt=""></div>
          <p>食品低至6.9元</p>
        </a>
      </li>
      <li>
        <a href="">
          <div> <img src="http://39.107.139.165/6img/jiaju.png" alt=""></div>
          <p>家居9.9元起</p>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'vfooter'
}
</script>

<style scoped>
  footer{
    border-top: 1px rgb(194, 191, 191) solid;
    /* position: fixed; */

  }
  footer ul{
    padding-top:0.1rem ;
    display: flex;
    justify-content:space-around;
    text-align: center;
  }
  footer ul li{
    width: 20%;
  }
  footer ul li a div img{
    width: 0.25rem;
    height: 0.25rem;
  }
  footer ul li a{
    color: gray;
    font-size: 0.12rem;
  }

</style>
