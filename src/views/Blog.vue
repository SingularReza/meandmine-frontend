<template>
  <div class="article">
    <div class="title-card">
      <div class="card-fill"></div>
      <div class="card-title">
        <div class="title"></div>
      </div>
    </div>
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
    'id'
  ],
  methods: {

  }
}
</script>

<style scoped>
  .title-card {
    height: 70vh;
  }

  .card-fill {
    height: 60%;
    background: lightgrey;
  }

  .card-title {
    position: absolute;
    padding: 0 10% 0 10%;
    width: 100%;
    top: 20%;
  }

  .title {
    background: #ababab;
    width: 100%;
    height: 300px;
    border: 1px solid transparent;
    border-radius: 7px;
    box-shadow: 0 0 10px 1px #ababab;
  }
</style>
