<template>
  <div class="article">
    <div class="title-card">
      <div class="card-fill"></div>
      <div class="card-title">
        <div class="title">{{article.title}}</div>
      </div>
    </div>
    <div class="article-content">
      <div class="aricle-title"></div>
      <div class="article-pretext"></div>
      <div class="article-text" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
import api from '../services/Api.js'

export default {
  name: 'blog',
  props: [
    'id'
  ],
  data() {
    return {
      article: {
        title: '',
        titleImage: '',
        subtext: '',
        pretext: '',
        tags: [],
        content: '',
        images: null,
        date: new Date(),
      }
    }
  },
  methods: {

  },
  beforeMount() {
    api.getArticle(this.id)
      .then(res => {
        this.article = res.data
      })
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
