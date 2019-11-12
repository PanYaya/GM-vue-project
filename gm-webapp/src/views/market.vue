<template>
  <div>
    <gm-market-header></gm-market-header>
    <gm-market-main></gm-market-main>
    <gm-market-footer></gm-market-footer>
  </div>
</template>

<script>
import header from '../components/market/header'
import footer from '../components/market/footer'
import vmain from '../components/market/vmain'
export default {
  name: 'market',
  components: {
    'gm-market-header': header,
    'gm-market-footer': footer,
    'gm-market-main': vmain
  }
}
</script>

<style scoped>
  @import "../assets/css/1.css";
</style>
