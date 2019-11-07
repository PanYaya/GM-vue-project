<template>
  <div class="title-bar">
    <div class="line">
      <h2><img src="http://39.107.139.165/3img/zan.png" alt=""> 为您推荐</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list'
}
</script>

<style scoped>
  .title-bar{
    width: 100%;
    height: 0.49rem;
    background-color:#f3f5f7;
    text-align: center;
    color: rgb(247, 55, 41);
    position: relative;
  }
  .title-bar .line{
    margin: auto;
    height: 0.25rem;
    width: 1.8rem;
    color: red;
    border-bottom: 0.01rem red solid;
  }
  .title-bar h2{
    position: absolute;
    top: 0.1rem;
    left: 1.3rem;
    background-color: rgb(248, 239, 239);
    border-left:0.1rem  rgb(248, 239, 239) solid ;
    border-right:0.1rem  rgb(248, 239, 239) solid ;
  }
</style>
