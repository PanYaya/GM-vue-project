<template>
  <div class="register">
    <div class="top">
      <div class="left" @click="go">
        <img src="http://39.107.139.165/2img/top1.png" alt="" style="width: 0.4rem; height: 0.4rem;">
      </div>
      <div class="center">
        <span>用户注册</span>>
      </div>
      <div class="right">
        <span>企业注册</span>
      </div>
    </div>
    <form action="">
      <p>
        <img src="http://39.107.139.165/5img/icon_phone.2b4394b85b.png" alt="">
        <input type="text" placeholder="请输入手机号">
      </p>
    </form>
    <button>同意协议并注册</button>
    <p>我已阅读并同意以下协议，接受免除或限制责任，诉讼管辖约定等条款，愿意同步创建账户
      <span class="treaty">《国美平台服务协议》 《国美平台隐私政策》 《美付宝服务协议》</span>
    </p>
  </div>

</template>

<script>
    export default {
        name: "register",
      methods:{
          go(){
            this.$router.push({path:'./login'})
          }
      }
    }
</script>

<style scoped>
  @import "../assets/css/1.css";

  .register{
    text-align: center;
  }
  .top{
    width: 100%;
    height: 0.53rem;
    padding: 0rem 0.12rem;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    justify-content: space-between;
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
  form{
    width: 80%;
    margin: auto;
  }
  form>p{
    border-bottom: 0.01rem solid rgb(233, 227, 227);
    color: rgb(196, 189, 189);
    margin: 0.2rem 0rem;
    padding-bottom:0.1rem;

  }
  form img{
    width: 0.22rem;
    height: 0.22rem;
  }
  form input{
    border: none;
    font-size: 0.16rem;
    width: 84%;
  }
  button{
    width: 80%;
    height:0.44rem;
    margin-top:0.3rem;
    border: none;
    background-color: red;
    color: white;
    border-radius: 0.2rem;
    font-size: 0.16rem;
  }
  .register p{
    padding-top: 0.2rem;
    line-height: 0.25rem;
    width: 80%;
    margin:0 auto;
  }
  .treaty{
    color: rgb(16, 163, 231);
  }

</style>
