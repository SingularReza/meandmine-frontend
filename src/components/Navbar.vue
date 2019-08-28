<template>
  <div>
    <div class="nav-wrapper container row">
      <div class="site-name row col-2">Oyasumi</div>
      <div class="site-options row col-5">
        <div class="col" v-for="(option,index) in options" :key="index">{{option}}</div>
      </div>
      <div class="site-search row col"><button @click="sidemenu = !sidemenu"></button></div>
    </div>
    <div class="side-menu" v-if="sidemenu">
      <div class="site-options row col-5">
        <div class="col-12" v-for="option,index in options" :key="index">{{option}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      sidemenu: true,
      options: [
        'Blog',
        'Reviews',
        'Resources',
        'Works',
        'About me',
      ]
    }
  },
};
</script>

<style scoped>
  .nav-wrapper {
    background: #141526;
    max-width: 100vw !important;
    margin: 0px;
    height: 60px;
    color: white;
  }

  .side-menu {
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    width: 70%;
    display: none;
    color: white;
    background: #141526;
  }

  @media (max-width: 768px) {
    .nav-wrapper > .site-options {
        display: none;
    }

    .side-menu {
      display: block;
      z-index: 100;
    }
  }
</style>
