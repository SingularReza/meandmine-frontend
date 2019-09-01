<template>
  <div class="view-wrapper">
    <video class="background-video" muted autoplay loop>
      <source src="@/assets/hero.webm" type="video/webm">
    </video>
    <div v-if="path=='blog'">
      <titlecard title="Blog" text="All things that are worth an article or two"></titlecard>
      <div class="blog-list row">
        <div class="info-card col-3" v-for="(option, index) in list">
          <card :key="index" :title="option.title" :text="option.subtext"></card>
        </div>
      </div>
  </div>
  <div v-else-if="path=='news'">
    <titlecard title="Updates" text="What's happening?"></titlecard>
    <div class="blog-list row">
      <div class="info-card col-3" v-for="(option, index) in list">
        <card :key="index" :title="option.title" :text="option.subtext"></card>
      </div>
    </div>
  </div>
  <div v-else-if="path=='resources'">
    <titlecard title="Resources" text="Useful Things"></titlecard>
    <div class="blog-list row">
      <div class="info-card col-3" v-for="(option, index) in list">
        <card :key="index" :title="option.title" :text="option.subtext"></card>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import api from '../services/Api'
import card from '../components/Card.vue'
import titlecard from '../components/TitleCard.vue'

export default {
  name: 'list',
  components: {
    card,
    titlecard
  },
  data() {
    return {
      list: null
    }
  } ,
  computed: {
    path() {
      return this.$route.name
    }
  },
  beforeMount() {
    api.getArticleList()
      .then(res => {
        this.list = res.data
      })
  }
}
</script>

<style scoped>
  .blog-list {
    justify-content: space-around;
  }

  .info-card {
    border-radius: 4px;
    box-shadow: 0 10px 20px 0px rgba(0,0,0,0.3);
    background: #fff;
  }

  .background-video {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -100;
    object-fit: cover;
  }

  .view-wrapper {
    overflow-x: hidden;
  }
</style>
