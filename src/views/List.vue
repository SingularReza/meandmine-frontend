<template>
  <div class="container">
    <div class="blog-list">
      <card v-for="index in 6" :key="index"></card>
    </div>
  </div>
</template>

<script>
import card from '../components/Card.vue'
export default {
  name: 'list',
  components: {
    card
  }
}
</script>

<style scoped>
</style>
