<template>
  <div class="vnav">
    <span><img src="http://39.107.139.165/3img/select.png" alt=""></span>
    <img src="http://39.107.139.165/3img/dp.png" alt="">
    <!-- <span>梦克拉旗舰店&nbsp;<span style="color: rgb(197, 193, 193);height: 0.2rem;">></span></span> -->
    <span>梦克拉旗舰店&nbsp;<img src="http://39.107.139.165/3img/jian.png" alt="" style="height:0.18rem "></span>
  </div>
</template>

<script>

export default {
  name: 'list'
}

</script>

<style scoped>
  .vnav{
    width: 100%;
    height: 0.35rem;
    padding: 0.15rem 0.2rem 0rem 0.2rem;
    position: relative;
  }
  .vnav>img{
    display: inline-block;
    width: 0.37rem;
    height: 0.17rem;
  }
  .vnav>span:last-child{
    position: absolute;
    top: 0.16rem;
    font-size: 0.16rem;
    font-weight: 600;
  }
  .vnav>span:last-child>img{
    position: relative;
    top: 0.03rem;
  }
</style>
