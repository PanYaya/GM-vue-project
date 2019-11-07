<template>
  <div class="main">
    <gm-classify-list></gm-classify-list>
    <gm-classify-content></gm-classify-content>
  </div>
</template>

<script>
import content from './main/content'
import list from './main/list'
export default {
  name: 'vmain',
  components: {
    'gm-classify-list': list,
    'gm-classify-content': content
  }
}
</script>

<style scoped>
  .main{
    width: 100%;
    height: 6.23rem;
  }
</style>
