<template>
  <div class="home row">
    <div class="menu col-xl-4 col-md-6">
      <div class="menu-wrapper">
        <div class="menu-option"
          v-for="(option, index) in options"
          :key="index">
            {{option}}
        </div>
      </div>
    </div>
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

.menu {
  color: white;
  height: 100%;
  position:absolute;
  padding:0px;
  background: linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0));
}

.menu-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

.home {
  margin: 0px;
}

.menu-option {
  margin: 30px;
  font-size: 1.5rem;
  font-family: 'B612', sans-serif;
}
</style>
