<template>
  <div class="view-wrapper">
    <video class="background-video" muted autoplay loop>
      <source src="@/assets/hero.webm" type="video/webm">
    </video>
    <div v-if="path=='blog'">
      <titlecard title="Blog" text="All things that are worth an article or two"></titlecard>
      <div class="blog-list row">
        <div class="info-card col-12 col-sm-6 col-md-3" v-for="(option, index) in list" @click="pushRoute(option._id)" :key="index">
          <card :key="index" :title="option.title" :text="option.subtext" :image="option.titleImage"></card>
        </div>
      </div>
  </div>
  <div v-else-if="path=='news'">
    <titlecard title="Updates" text="What's happening?"></titlecard>
    <div class="blog-list row">
      <div class="update-section col-lg-6 col-12 order-12 order-lg-1">
         <div class="update col-12" v-for="(update, index) in latestUpdates" :key="index">
          <update :update-data="update"></update>
        </div>
      </div>
      <div class="in-progress col-lg-6 col-12 order-1 order-lg-12">progress</div>
    </div>
  </div>
  <div v-else-if="path=='resources'">
    <titlecard title="Resources" text="Useful Things"></titlecard>
    <div class="blog-list row">
      <div class="info-card col-3" v-for="(option, index) in list" :key="index">
        <card :key="index" :title="option.title" :text="option.subtext"></card>
      </div>
    </div>
  </div>
  <div v-else-if="path=='works'">
    <titlecard title="Works" text="Feels good to create, heh?"></titlecard>
    <div class="blog-list row">
      <div class="info-card col-3" v-for="(option, index) in list" :key="index">
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
import update from '../components/Update.vue'

export default {
  name: 'list',
  components: {
    card,
    titlecard,
    update
  },
  data() {
    return {
      list: null,
      latestUpdates: []
    }
  } ,
  computed: {
    path() {
      return this.$route.name
    },
  },
  methods: {
    pushRoute(articleID) {
      this.$router.push('/article/'+articleID)
    }
  },
  beforeMount() {
    api.getArticleList()
      .then(res => {
        this.list = res.data
      });
    api.getLatestUpdates()
      .then(res => {
        this.latestUpdates = res.data;
      });
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
    height: 400px;
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

  .update-section {
    padding: 30px;
  }

  .update {
    background: rgba(20, 21, 38, 1);
  }
</style>
