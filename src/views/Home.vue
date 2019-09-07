<template>
  <div class="home row">
    <div class="site-title col-12 col-md-6">
      <div><span class="title">Oyasumi</span><span class="subtitle">Just a Blog</span></div>
    </div>
    <video class="background-video" muted autoplay loop>
      <source src="@/assets/hero.webm" type="video/webm">
    </video>
    <div class="about-me col-12 row">
      <div class="about-content centered col-md-9">
        A goofy but a mostly silent weeb and xenophiliac, who likes tech, internet culture, humanities, worldbuilding and everything weird.
        Read a shit ton of books on topics ranging from grand stories set in imaginary universes to theological debates about
        effects of Platonism on modern ethics to trashy xianxia webnovels with overpowered MCs. My usual form of entertainment is critically analysing things I gain
        the entertainment from. Mostly listens to animusic and OSTs, but usually forays into different genres (because of osu!). Likes simulation, rpg or strategy games
        (mobile gaming is trash by the way). I am a free interent enthusiast and always try to self host things as much as possible.
        As far as politics is considered, stauchly classic liberal (or libertarian as known in the US).
        <br/>
        I am available on discord at Chandandharana #8314
      </div>
      <div class="about-title centered order-first order-md-0 col-md-3"><h3>About</h3></div>
    </div>
    <div class="latest col-12 row">
      <div class="latest-title centered col-md-3"><h3>Latest</h3></div>
      <div class="latest-content centered col-md-9">
      <flickity ref="flickity" class="slider" :options="flickityOptions">
        <div class="info-card centered carousel-cell">
          <card title="Title 1" text="Text 1"></card>
        </div>
        <div class="info-card centered carousel-cell">
          <card title="Title 2" text="Text 2"></card>
        </div>
        <div class="info-card centered carousel-cell">
          <card title="Title 3" text="Text 3"></card>
        </div>
      </flickity>
      </div>
    </div>
    <div class="miscellaneous col-12 row">
      <div class="miscellaneous-content centered col-md-9 row">
        <div class="update col-12" v-for="index in 5" :key="index">
          <update :date="new Date()"></update>
        </div>
      </div>
      <div class="miscellaneous-title centered order-first order-md-0 col-md-3"><h3>Things</h3></div>
    </div>
  </div>
</template>

<script>
import card from '../components/Card.vue'
import update from '../components/Update.vue'
import Flickity from 'vue-flickity';

export default {
  name: 'home',
  components: {
    card,
    update,
    Flickity
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
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: true
      }
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
  object-fit: cover;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  margin: 0px;
}

.flickity-viewport {
  height: 100% !important;
}
.site-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  color: #fff;
}

.subtitle {
  font-size: 1.25rem;
}

.about-content, .latest-title, .miscellaneous-content {
  border-right: 1px solid rgba(255, 255, 255, 0.4);
}

.about-content, .miscellaneous-content {
  font-size: 1.25rem;
  padding: 0 10% 0 10%;
  display: flex;
  justify-content: center;
}

.latest-content {
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
}

  .miscellaneous-content {
    margin: 0px;
  }

 .about-me, .latest, .miscellaneous {
  width: 100%;
  height: 100vh;
  color: #fff;
  padding: 10% 0 10% 0;
  margin: 0px;
}

.title {
  display: block;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.7);
  font-size: 4rem;
  margin-bottom: 20px;
}

.about-me, .miscellaneous {
  background: rgba(20, 21, 38, .6);
}

.info-card {
  height: 100%;
  width: 100%;
  padding: 4%;
}

.slider {
  height: 100%;
  width: 100%;
}

.update {
  width: 100%;
  height: max-content;
  background: rgba(20, 21, 38, 1);
  color: #fff;
  border-radius: 4px;
}

@media (max-width: 768px) {
    .about-content, .latest-title, .miscellaneous-content {
      border: none;
    }

    .about-me, .latest, .miscellaneous {
      font-size: 1.25rem;
      padding: 0 10% 0 10%;
    }

    .about-content, .latest-content, .miscellaneous-content {
      font-size: 1.25rem;
      padding: 0;
      height: 80%;
    }
    .about-title, .latest-title, .miscellaneous-title {
      height: 15%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }
}

@media (max-width: 576px) {
  .about-content, .latest-content, .miscellaneous-content {
      font-size: 1rem;
    }
}
</style>
