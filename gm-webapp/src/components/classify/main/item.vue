<template>
  <li>
    <a href="">
      <img :src="'m.products'.imgurl" alt="">
<!--      <span>{{arr.name}}</span>-->
    </a>
  </li>
</template>

<script>
export default {
  name: 'item',
  props: ['arr']
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
  .content ul li a img{
    width: 100%;
    height: 100%;
  }

</style>
