<template>
  <div class="card-wrapper row">
      <div class="title-wrapper col-12 row" :style="{background: 'url('+cardImage+')'}">
        <div class="background-wrapper">
        <h4>{{title}}</h4>
        <div class="tags-wrapper col-12">
          <div class="tags">
            .<span v-for="(tag, index) in tags" :key="index">&nbsp;{{tag}}&nbsp;.</span>
          </div>
        </div>
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
    background: rgba(20, 21, 38, .6);
    color: #fff;
    overflow: hidden;
    background: rgba(20, 21, 38, 0.7);
  }

  .title-wrapper {
    background: rgba(0, 0, 0, 0.4);
    margin: 0px;
    padding: 0px;
  }

  .title-wrapper, .tags-wrapper, .subtext {
    display: flex;
    justify-content: center;
    align-items: center;
    height: max-content;
  }

  .lines {
    height: 1px;
    background: rgba(255, 255, 255, 0.6);
  }

  h4 {
    padding: 10% 0 5% 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .background-wrapper {
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
}
</style>
