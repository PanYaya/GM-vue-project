<template>
  <div class="top">
    <ul>
      <li>
        <img src="http://39.107.139.165/2img/top1.png" alt="">
      </li>
      <li class="input">
        <span>国美超市</span>
      </li>
      <li>
        <img src="http://39.107.139.165/2img/top2.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vheader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .top{
    width: 100%;
    height: 0.53rem;
    padding: 0rem 0.12rem;
    box-sizing: border-box;
    background-color: white;
    border-bottom: 0.01rem solid rgb(216, 213, 213);
    position: relative;
  }
  .top ul{
    display: flex;
    justify-content:space-between;
    padding: 0.1rem 0rem;
  }
  .top ul li{
    display: inline-block;
  }
  .top ul li:last-child{
    position: relative;
    top: 0.05rem;
    color: rgb(43, 41, 41);
  }
  .top ul li img{
    width: 0.288rem;
  }
  .top span{
    position: absolute;
    top:0.14rem;
    left: 1.6rem;
    font-size:0.16rem;
  }
</style>
