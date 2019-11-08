<template>
  <div>
    <gm-login-header></gm-login-header>
    <gm-login-main></gm-login-main>
    <gm-login-footer></gm-login-footer>
  </div>

</template>

<script>
import header from '../components/login/header'
import footer from '../components/login/footer'
import main from '../components/login/main'
export default {
  name: 'wode',
  components: {
    'gm-login-header': header,
    'gm-login-footer': footer,
    'gm-login-main': main
  }
}

</script>

<style scoped>
  @import "../assets/css/5.css";
</style>
