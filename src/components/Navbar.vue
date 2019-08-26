<template>
  <div class="nav-wrapper container row">
    <div class="site-name row col-2">Oyasumi</div>
    <div class="site-options row col-5">
      <div class="col" v-for="option,index in options" :key="index">{{option}}</div>
    </div>
    <div class="site-search row col"></div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
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
  }

  @media (max-width: 768px) {
    .site-options {
        display: none;
    }
  }
</style>
