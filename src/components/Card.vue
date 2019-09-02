<template>
  <div class="card-wrapper row">
    <div class="title-wrapper col-12" :style="{background: 'url('+cardImage+')'}">{{title}}</div>
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
      'tags',
      'image',
    ],
    computed: {
      cardImage() {
        return ('http://localhost:3300/'+this.image)
      }
    }
  }
</script>

<style scoped>
  .card-wrapper {
    border-radius: 4px;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    align-items: center;
    background: rgba(20, 21, 38, .6);
    color: #fff;
  }

  .title-wrapper {
    height: 40%;
  }
</style>
