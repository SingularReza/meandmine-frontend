<template>
  <div class="card-wrapper row">
    <div class="title-wrapper col-12">{{title}}</div>
    <div class="tags col-12">tags</div>
    <div class="subtext col-12">{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: [
      'title',
      'text',
      'tags'
    ]
  }
</script>

<style scoped>
  .card-wrapper {
    border-radius: 4px;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    align-items: center;
  }
</style>
