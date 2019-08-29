<template>
  <div class="home row">
    <div class="site-title col-xs-12 col-md-6">Site Name</div>
    <video class="background-video" muted autoplay loop>
      <source src="@/assets/hero.webm" type="video/webm">
    </video>
    <div class="about-me">
      <h2>About</h2>
    </div>
    <div class="latest">
      <h2>Latest</h2>
    </div>
    <div class="miscellaneous">
      <h2>list update</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
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

 .about-me, .latest, .miscellaneous {
  width: 100%;
  height: 100vh;
  color: #fff;
}

.about-me, .miscellaneous {
  background: rgba(0, 0, 0, 0.4);
}
</style>
