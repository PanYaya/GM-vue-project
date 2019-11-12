<template>
  <div>
    <footer >
      <ul>
        <li @click="go1">
            <div> <img src="../../assets/1img/footer1.png" alt=""></div>
            <p>首页</p>
        </li>
        <li @click="go">
            <div> <img src="../../assets/1img/footer2.png" alt=""></div>
            <p>分类</p>
        </li>
        <li @click="go3">
            <div> <img src="../../assets/1img/footer3.png" alt=""></div>
            <p>优选</p>
        </li>
        <li @click="go4">
            <div> <img src="../../assets/1img/footer4.png" alt=""></div>
            <p>购物车</p>
        </li>
        <li @click="go5">
            <div> <img src="../../assets/1img/footer5.png" alt=""></div>
            <p>我的</p>
        </li>
      </ul>
    </footer>

  </div>

</template>

<script>
export default {
  name: 'vfooter',
  // data () {
  //   return {
  //
  //   }
  // },
  methods: {
    go1 () {
      this.$router.replace({ path: '/' })
    },
    go () {
      this.$router.replace({ path: '/classify' })
    },
    go3 () {
      this.$router.replace({ path: '/market' })
    },
    go4 () {
      this.$router.replace({ path: '/carts' })
    },
    go5 () {
      this.$router.push({ path: '/wode' })
    }
  }
}
</script>

<style scoped>
  footer{
    width: 100%;
    border-top: 1px rgb(194, 191, 191) solid;
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
  footer ul li img{
    width: 0.288rem;
    height: 0.288rem;
  }
</style>
