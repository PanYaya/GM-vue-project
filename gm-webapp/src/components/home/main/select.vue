<template>
  <div class="select">
    <a href=""><img src="../../../assets/1img/11.gif" alt=""></a>
    <a href=""><img src="../../../assets/1img/22.gif" alt=""></a>
  </div>
</template>

<script>
export default {
  name: 'vselect'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .select{
    width: 95%;
    padding: 0.12rem;
    display: flex;
    height: 1.2rem;
  }
  .select a{
    display: inline-block;
    width: 50%;
    height: 100%;
  }
  .select a img{
    width: 100%;
    height: 100%;
  }

</style>
