<template>
  <div class="main">
    <gm-carousel-figure></gm-carousel-figure>
    <gm-content></gm-content>
    <gm-meddle></gm-meddle>
    <gm-select></gm-select>
  </div>
</template>

<script>
import carousel from './main/carousel'
import content from './main/content'
import meddle from './main/meddle'
import select from './main/select'
export default {
  name: 'vmain',
  components: {
    'gm-carousel-figure': carousel,
    'gm-content': content,
    'gm-meddle': meddle,
    'gm-select': select

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
