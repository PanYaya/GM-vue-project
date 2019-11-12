<template>
  <div class="phone">
    <div :data="data" v-for="(n,i) in data.ipone" :key="i"  :i="i">
      <p>{{n.title}}</p>
      <ul >
        <shop-product v-for="(val,sid) in n.products" :key="sid"  :data="val" :sid="sid"></shop-product>
      </ul>
    </div>
  </div>
</template>

<script>
import phoneitem from './phoneitem'
export default {

  name: 'phone',
  components: {
    'shop-product': phoneitem
  },
  props: ['data', 'sid']
}
</script>

<style scoped>
  .phone{
    width:77%;
    height: 100%;
    padding: 0.08rem 0rem 0.08rem 0.08rem;
    float: left;
  }
  p{
    padding-bottom:0.1rem;
    color: gray;
    font-size: 0.12rem;
  }
  .phone ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

</style>
