<template>
  <div class="card-wrapper">
    <img :src="image"/>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'smallCard',
  props: [
      'title',
      'image'
    ],
}
</script>

<style scoped>
  .card-wrapper {
    width: 100px;
    height: 143px;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    color: white;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .title {
    position: absolute;
    z-index: 100;
    bottom: 0px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    font-size: smaller;
  }
</style>
