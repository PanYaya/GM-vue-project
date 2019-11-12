<template>
  <div>
    <gm-wo-header></gm-wo-header>
    <gm-wo-main></gm-wo-main>
    <gm-wo-footer></gm-wo-footer>
  </div>

</template>

<script>
import header from '../components/wode/header'
import footer from '../components/wode/footer'
import main from '../components/wode/main'
export default {
  name: 'wode',
  components: {
    'gm-wo-header': header,
    'gm-wo-footer': footer,
    'gm-wo-main': main
  }
}

</script>

<style scoped>
  @import "../assets/css/1.css";
</style>
