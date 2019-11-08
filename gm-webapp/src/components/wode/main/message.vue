<template>
  <div class="message">
    <div class="message-1">
      <img src="http://39.107.139.165/4img/gift.b5b6719101.gif" alt="">
      <img src="http://39.107.139.165/4img/messageIcon.e66ecc9715.png" alt="">
    </div>
    <div class="massage-2">
      <img src="http://39.107.139.165/4img/ren.png" alt="">
      <div>
        <p>gm_150^_^6193jbkj</p>
        <p>
          <img src="http://39.107.139.165/4img/noRe.png" alt="">
          <span>未实名</span>
        </p>
      </div>
      <div>
        <img src="http://39.107.139.165/4img/men.png" alt="">
        <span>G1</span>
        <span>会员</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'massage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message{
    height: 1.22rem;
    width: 100%;
    background-image: url(http://39.107.139.165/4img/userBg.png)
  }
  .massage-2{
    display: flex;
  }
  .massage-2>img{
    width: 0.55rem;
    height: 0.55rem;
    border: 2px solid #fff;
    border-radius: 1.2rem;
  }
  .massage-2>div:last-child>img{
    height: 0.36rem;
  }
  .message-1{
    text-align: right;
    padding: 0.1rem 0.1rem 0rem 0rem;
  }
  .message-1 img:first-child{
    width: 0.35rem;
    height: 0.26rem;
    /* float: right; */

  }
  .message-1 img:last-child{
    width: 0.22rem;
    height: 0.19rem;
    /* float: right; */
  }
  .massage-2>div>p{
    margin: 0.05rem 0.32rem 0rem 0.1rem;
    color: white;
  }
  .massage-2>div>p>img{
    width: 0.14rem;
    height: 0.14rem;
  }
  .massage-2>div>p:first-child{
    font-size: 0.2rem;
  }
  .massage-2>div>p:last-child{
    width: 0.9rem;
    height: 0.24rem;
    display: inline-block;
    border-radius: 0.2rem;
    background-color: rgb(223, 221, 221);
    text-align: center;
  }
  .massage-2>div:last-child{
    position: relative;
    top: 0.15rem;
  }
  .massage-2>div:last-child span{
    position: relative;
    top: -0.3rem;
    left: 0.1rem;
    color: red;
  }
  .massage-2>div:last-child span:last-child{
    color: white;
    padding-left:0.1rem;
  }
</style>
