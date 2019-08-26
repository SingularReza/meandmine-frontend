<template>
  <div class="home row">
    <video class="background-video" autoplay loop>
      <source src="@/assets/hero.webm" type="video/webm">
    </video>
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
</style>
