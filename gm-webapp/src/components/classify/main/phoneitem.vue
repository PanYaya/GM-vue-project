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
  name: 'phoneitem',
  props: [ 'data', 'sid']
}
</script>

<style scoped>
  li{
    width: 31%;
    height: 1.08rem;
    background-color: #f6f6f6;
    margin:0rem 0.06rem 0.08rem 0rem;
  }
  li a{
    display: inline-block;
    text-align: center;
    color: black;
    width: 100%;
    height: 100%;
  }
  span{
    display: block;
    color: gray;
    font-size: 0.12rem;
  }
img{
  width: 95%;
  height: 80%;
  }

</style>
