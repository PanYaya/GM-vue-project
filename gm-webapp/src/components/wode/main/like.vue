<template>
  <div class="like"></div>
</template>

<script>
export default {
  name: 'like'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .like{
    width: 100%;
    height: 0.4rem;
    text-align: center;
    margin-top: 0.1rem;
    background-color:rgb(245, 239, 239);

  }
  .like>p{
    width: 100%;
    height: 0.1rem;
    text-align: center;
    background-color:rgb(245, 239, 239);
    border-bottom:0.01rem solid rgb(201, 197, 197);
    position: relative;
    top: 0.1rem;
  }
  .like img{
    width: 0.13rem;
    height: 0.13rem;
    position: relative;
    top: -0.02rem;
    display: inline-block;
    background-color:rgb(245, 239, 239);

  }
  .like span{
    position: relative;
    top: -0.02rem;
    display: inline-block;
    background-color:rgb(245, 239, 239);
  }
</style>
