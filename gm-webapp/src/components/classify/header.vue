<template>
  <div class="top">
    <ul>
      <li>
        <img src="../../assets/2img/top1.png" alt="">
      </li>
      <li class="input">
        <input type="text" value="华为Mate 30新品上市"><img src="../../assets/2img/search.png" alt="">
      </li>
      <li>
        <img src="../../assets/2img/top2.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vheader'
}
</script>

<style scoped>

  .top{
    width: 100%;
    height: 0.53rem;
    padding: 0rem 0.12rem;
    box-sizing: border-box;
    /* position: fixed; */
    /* z-index: 9999; */
    background-color: white;
    border-bottom: 0.01rem solid rgb(216, 213, 213);
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
  .input{
    position: relative;
    margin: 0 0 0 0.1rem;
    height: 0.3rem;
    border-radius: 0.15rem;
    border: none;
    background-color: #f6f6f6;
    overflow: hidden;
    width: 80%;
  }
  .input input{
    border: none;
    height: 0.3rem;
    width: 80%;
    color: #999;
    box-sizing: border-box;
    line-height: 0.1rem;
    background-color: #f6f6f6;
    position: relative;
    top: -0.1rem;
    padding-left: 0.1rem;

  }
</style>
