<template>
  <div class="article">
    <div class="title-card"></div>
    <div class="article-content">
      <div class="aricle-title"></div>
      <div class="article-pretext"></div>
      <div class="article-text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  props: [
    id
  ]
}
</script>

<style scoped>
  .title-card {
    background: grey;
    height: 150px;
  }
</style>
