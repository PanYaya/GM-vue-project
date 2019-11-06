<template>
  <div id="app">
    <gm-classify-header></gm-classify-header>
    <gm-classify-main></gm-classify-main>
  </div>
</template>

<script>
import header from '../components/classify/header'
import main from '../components/classify/main'
export default {
  name: 'classify',
  components: {
    'gm-classify-header': header,
    'gm-classify-main': main
  }
}
</script>
<!--<Add "scoped" attribute to limit CSS to this component only>-->
<style scoped>
  @import "../assets/css/2.css";
</style>
