<template>
  <div class="main">
    <gm-classify-list></gm-classify-list>
    <gm-classify-content v-if="data" :data="data" :sid="sid" :key="sid"></gm-classify-content>
  </div>
</template>

<script>
import vcontent from './main/vcontent'
import list from './main/list'
export default {
  name: 'vmain',
  components: {
    'gm-classify-list': list,
    'gm-classify-content': vcontent
  },
  props: ['data', 'sid']

}
</script>

<style scoped>
  .main{
    width: 100%;
    height: 6.23rem;
  }
</style>
