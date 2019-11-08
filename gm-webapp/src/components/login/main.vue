<template>
  <div class="content">
    <div>
      <img src="http://39.107.139.165/5img/logo_xh.png" alt="">
    </div>
    <ul>
      <li>账号密码登录</li>
      <li>短信验证登录</li>
    </ul>
    <form action="">
      <p>
        <img src="http://39.107.139.165/5img/icon_phone.2b4394b85b.png" alt="">
        <input type="text" placeholder="手机号/邮箱/用户名/门店会员卡号">

      </p>
      <p>
        <img src="http://39.107.139.165/5img/icon_pwd.22fce3d683.png" alt="">
        <input type="password" placeholder="请输入密码">
        <img src="http://39.107.139.165/5img/noSee.png" alt="">
      </p>
    </form>
    <p class="register">
      <span>手机号快速注册</span>
      <span>找回密码</span>
    </p>
    <button>登录</button>
    <div class="others">
      <span>使用以下账户登录</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'content'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    width: 90%;
    padding:0rem 0.2rem;
  }
  .content>div:first-child{
    text-align: center;
    margin-bottom: 0.17rem;
  }
  .content>div:first-child img{
    width: 1.37rem;
    height:0.45rem;
  }
  .content ul{
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom:0.25rem;
  }
  .content ul li{
    width: 50%;
    font-size: 0.16rem;
    color: rgb(196, 189, 189);
    height: 0.3rem;

  }
  .content ul li:first-child{
    color: red;
    border-bottom: 0.01rem red solid;
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
  .register{
    color: rgb(16, 163, 231);
    display: flex;
    justify-content: space-between;
  }
  .content button{
    width: 100%;
    height:0.44rem;
    margin-top:0.3rem;
    border: none;
    background-color: red;
    color: white;
    border-radius: 0.2rem;
    font-size: 0.16rem;
  }
  .others{
    margin-top:1.07rem;
    margin-bottom:0.5rem;
    /* height:14rem; */
    border-top: 0.01rem  rgb(211, 208, 208) solid;
    text-align: center;
  }
  .others span{
    position: relative;
    top:-0.1rem;
    display: inline-block;
    background-color: white;
    padding: 0rem 0.1rem;

  }
</style>
