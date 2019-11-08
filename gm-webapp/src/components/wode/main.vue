<template>
  <div class="content">
    <gm-wo-message></gm-wo-message>
    <gm-wo-pay></gm-wo-pay>
    <div style="width: 100%; height:0.1rem; background-color:rgb(245, 239, 239)"></div>
    <gm-wo-money></gm-wo-money>
    <div style="width: 100%; height:0.1rem; background-color:rgb(245, 239, 239)"></div>
    <gm-wo-main></gm-wo-main>
    <gm-wo-like></gm-wo-like>
  </div>
</template>

<script>
import like from './main/like'
import money from './main/money'
import main from './main/main'
import message from './main/message'
import pay from './main/pay'
export default {
  name: 'vmain',
  components: {
    'gm-wo-message': message,
    'gm-wo-pay': pay,
    'gm-wo-money': money,
    'gm-wo-main': main,
    'gm-wo-like': like

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  flex: 1;
  /*overflow-y: auto;*/
}
</style>
