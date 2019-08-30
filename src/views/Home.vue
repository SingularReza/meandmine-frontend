<template>
  <div class="home row">
    <div class="site-title col-12 col-md-6">Oyasumi.me</div>
    <video class="background-video" muted autoplay loop>
      <source src="@/assets/hero.webm" type="video/webm">
    </video>
    <div class="about-me col-12 row">
      <div class="about-content centered col-md-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.      </div>
      <div class="about-title centered order-first order-md-0 col-md-3"><h3>About</h3></div>
    </div>
    <div class="latest col-12 row">
      <div class="latest-title centered col-md-3"><h3>Latest</h3></div>
      <div class="latest-content centered col-md-9">
        <div class="info-card" v-for="index in 3">
          <card></card>
        </div>
      </div>
    </div>
    <div class="miscellaneous col-12 row">
      <div class="miscellaneous-content centered col-md-9 row">
        <div class="update col-12" v-for="index in 4" :key="index">
          <update></update>
        </div>
      </div>
      <div class="miscellaneous-title centered order-first order-md-0 col-md-3"><h3>Things</h3></div>
    </div>
  </div>
</template>

<script>
import card from '../components/Card.vue'
import update from '../components/Update.vue'

export default {
  name: 'home',
  components: {
    card,
    update,
  },
  data() {
    return {
      options: [
        'Anime',
        'Movies',
        'Music',
        'Games',
        'Projects',
        'Things',
        'About',
        'And Stuff',
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -100;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

video {
  object-fit: cover;
}

.home {
  margin: 0px;
}

.site-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  font-size: 4rem;
  color: #fff;
}

.about-content, .latest-title, .miscellaneous-content {
  border-right: 1px solid rgba(255, 255, 255, 0.4);
}

.about-content, .latest-content, .miscellaneous-content {
  font-size: 1.25rem;
  padding: 0 10% 0 10%;
  display: flex;
  justify-content: space-between;
}

 .about-me, .latest, .miscellaneous {
  width: 100%;
  height: 100vh;
  color: #fff;
  padding: 10% 0 10% 0;
  margin: 0px;
}

.about-me, .miscellaneous {
  background: rgba(20, 21, 38, .6);
}

.info-card {
  height: 300px;
  width: 200px;
  background: rgba(20, 21, 38, .7);
  border-radius: 6px;
  color: #fff;
}

.update {
  width: 100%;
  height: 70px;
  background: rgb(39, 44, 56, .8);
}

@media (max-width: 768px) {
    .about-content, .latest-title, .miscellaneous-content {
      border: none;
    }

    .about-content, .latest-content, .miscellaneous-content {
      font-size: 1.25rem;
      padding: 0 5% 0 5%;
      height: 80%;
    }
    .about-title, .latest-title, .miscellaneous-title {
      height: 20%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }

    .about-me, .latest, .miscellaneous {
      font-size: 1.25rem;
      padding: 0 10% 0 10%;
    }
}
</style>
