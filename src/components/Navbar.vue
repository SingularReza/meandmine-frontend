<template>
  <div>
    <div class="nav-wrapper container row">
      <div class="centered site-name row col-2">Oyasumi</div>
      <div class="site-options row col-5">
        <div class="centered col" v-for="(option,index) in options" :key="index">{{option}}</div>
      </div>
      <div class="site-menu row col-1 offset-4"><magnify class="icon-2x"/><menu-icon class="menu-icon" @click="sidemenu = !sidemenu"/></div>
    </div>
    <div class="side-menu" v-if="sidemenu">
      <div class="site-options row col-5">
        <div class="col-12" v-for="option,index in options" :key="index">{{option}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import magnify from 'vue-material-design-icons/Magnify.vue'
export default {
  name: 'navbar',
  components: {
    MenuIcon,
    magnify
  },
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

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-icon {
    display: none;
    cursor: pointer;
  }

  .material-design-icon.icon-2x {
    height: 2em;
    width: 2em;
  }

  .material-design-icon.icon-2x > .material-design-icon__svg {
    height: 2em;
    width: 2em;
  }

  @media (max-width: 768px) {
    .nav-wrapper > .site-options {
        display: none;
    }

    .side-menu {
      display: block;
      z-index: 100;
    }

    .menu-icon {
      display: block;
    }
  }
</style>
