<template>
  <div class="main">
    <gm-cars-nav></gm-cars-nav>
    <gm-cars-content></gm-cars-content>
    <gm-cars-title></gm-cars-title>
    <gm-cars-meddle></gm-cars-meddle>
  </div>
</template>

<script>
import nav from './main/nav'
import title from './main/title'
import content from './main/content'
import meddle from './main/meddle'
export default {
  name: 'vmain',
  components: {
    'gm-cars-content': content,
    'gm-cars-nav': nav,
    'gm-cars-meddle': meddle,
    'gm-cars-title': title,
  }
}
</script>

<style scoped>

</style>
