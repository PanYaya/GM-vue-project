<template>
  <div class="top">
  <div class="left" @click="go">
    <img src="http://39.107.139.165/2img/top1.png" alt="" style="width: 0.4rem; height: 0.4rem;">
  </div>
  <div class="center">
    <span>购物车</span><img src="http://39.107.139.165/3img/address.png" alt="">
  </div>
  <div class="right">
    <span>编辑</span><img src="http://39.107.139.165/2img/top2.png" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: 'vheader',
  methods: {
    go () {
      this.$router.push({ path: '/market' })
    }
  }
}
</script>

<style scoped>
  .top{
    width: 100%;
    height: 0.53rem;
    padding: 0rem 0.12rem;
    box-sizing: border-box;
    background-color: white;
    border-bottom: 0.01rem solid rgb(216, 213, 213);
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .top div{
    /* width: 30%; */
    height: 0.53rem;
    float: left;
    text-align: center;
  }
  .top div img{
    width: 0.3rem;
    height: 0.3rem;
    position: relative;
    top: 0.08rem;
  }
  .top div span{
    display: inline-block;
    line-height: 0.53rem;

  }
  .center{
    width: 69%;
    height: 0.53rem;
    text-align: center;
    position: relative;
    left: 0.20rem;
  }
  .center span{
    display: inline-block;
    line-height: 0.53rem;
    font-size: 0.18rem;
    font-weight: 600;
  }
  .right span{
    padding-right:0.1rem ;
  }

</style>
