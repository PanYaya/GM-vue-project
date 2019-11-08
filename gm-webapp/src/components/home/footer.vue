<template>
  <div>
    <footer >
      <ul>
        <li @click="go1">
          <a href="">
            <div> <img src="../../assets/1img/footer1.png" alt=""></div>
            <p>首页</p>
          </a>
        </li>
        <li @click="go">
          <a href="">
            <div> <img src="../../assets/1img/footer2.png" alt=""></div>
            <p>分类</p>
          </a>
        </li>
        <li @click="go3">
          <a href="">
            <div> <img src="../../assets/1img/footer3.png" alt=""></div>
            <p>优选</p>
          </a>
        </li>
        <li @click="go4">
          <a href="">
            <div> <img src="../../assets/1img/footer4.png" alt=""></div>
            <p>购物车</p>
          </a>
        </li>
        <li @click="go5">
          <a href="">
            <div> <img src="../../assets/1img/footer5.png" alt=""></div>
            <p>我的</p>
          </a>
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
      this.$router.replace({ path: '/youxuan' })
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

</style>
