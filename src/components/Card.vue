<template>
  <div class="card-wrapper row">
    <div class="title-wrapper col-12" :style="{background: 'url('+cardImage+')'}">{{title}}</div>
    <div class="tags-wrapper col-12">
      <div class="tags">
          |<span v-for="(tag, index) in tags" :key="index">&nbsp;{{tag}}&nbsp;|</span>
      </div>
    </div>
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
      'date'
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
    overflow: hidden;
  }

  .title-wrapper {
    height: 50%;
  }

  .tags-wrapper {
    height: 10%;
  }

  .subtext {
    height: 40%;
  }

  .title-wrapper, .tags-wrapper, .subtext {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
