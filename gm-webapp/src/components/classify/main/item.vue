<template>
  <li>
    <a href="">
      <img :src="data.imgurl" alt="">
      <span>{{data.name}}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'item',
  props: [ 'data', 'sid']
}
</script>

<style scoped>
li{
    width: 32%;
 height: 1.08rem;
    /*height: 2.14rem;*/
    background-color: #f6f6f6;
    margin:0rem 0.1rem 0.08rem 0rem;
  }
li a{
    display: inline-block;
    text-align: center;
    color: black;
  }
li a span{
    color: gray;
    font-size: 0.12rem;
  }
img{
    width: 100%;
    height: 100%;
  }

</style>
