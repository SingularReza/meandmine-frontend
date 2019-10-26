<template>
  <div class="card-wrapper row">
    <div class="col-1 image-wrapper" :style="{background: 'url('+cardImage+')'}">
    </div>
    <div class="col row content-wrapper">
      <div class="title-wrapper col-12 row">
        <h4>{{title}}</h4>
      </div>
      <div class="tags-wrapper col-12">
        <div class="tags">
          |<span v-for="(tag, index) in tags" :key="index">&nbsp;{{tag}}&nbsp;|</span>
        </div>
      </div>
      <div class="subtext col-12">{{text}}</div>
    </div>
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
      'date',
      'bigcard'
    ],
    computed: {
      cardImage() {
        return ('http://127.0.0.1:3300/'+this.image)
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
    display: flex;
    align-items: center;
    background: rgba(20, 21, 38, .6);
    color: #fff;
    overflow: hidden;
  }

  .title-wrapper {
    padding: 10%;
  }

  .tags-wrapper {
    position: relative;
    bottom: 12px;
  }

  .title-wrapper, .tags-wrapper, .subtext {
    display: flex;
    justify-content: center;
    align-items: center;
    height: max-content;
  }

  .image-wrapper, .content-wrapper {
    height: 100%;
  }

  .content-wrapper {
    padding: 0 10% 0 10%;
  }

  .lines {
    height: 1px;
    background: rgba(255, 255, 255, 0.6);
  }
</style>
