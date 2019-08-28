<template>
  <div class="article">
    <div class="title-card">
      <div class="card-fill" :style="{background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('+titleImageUrl+')'}"></div>
      <div class="card-title">
        <div class="title-wrapper row" :style="{backgroundImage: 'url('+titleImageUrl+')'}">
          <div class="title col-xs-12 col-md-5">{{article.title}}</div>
          <div class="sub-text col-xs-12 col-md-6">{{article.subtext}}</div>
        </div>
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
import api from '../services/Api'

export default {
  name: 'blog',
  props: [
    'id'
  ],
  data() {
    return {
      article: {
        title: '',
        titleImage: 'images/test.jpg',
        subtext: '',
        pretext: '',
        tags: [],
        content: '',
        images: null,
        date: new Date(),
      },
    }
  },
  computed: {
    titleImageUrl() {
      return ("http://localhost:3000/"+this.article.titleImage)
    }
  },
  methods: {

  },
  created() {
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
    filter: blur(2px);
  }

  .card-title {
    position: absolute;
    padding: 0 10% 0 10%;
    width: 100%;
    top: 20%;
  }

  .title-wrapper {
    width: 100%;
    height: 300px;
    border: 1px solid transparent;
    border-radius: 7px;
    box-shadow: 0 0 10px 1px #ababab;
  }

  .title {
    height: 90%;
    margin: 10px 20px 10px 20px;
    border-right: 1px solid black;
  }

  .title, .sub-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .title {
        height:max-content;
        border: none;
        border-bottom: 1px solid black;
    }
  }
</style>
