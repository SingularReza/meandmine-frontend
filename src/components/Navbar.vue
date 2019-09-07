<template>
  <div>
    <div class="nav-wrapper container row">
      <div class="centered site-name col-3 col-md-2" @click="changeRoute('/')">Oyasumi</div>
      <div class="site-options row col-md-5">
        <div
          class="centered col"
          v-for="(option,index) in options"
          :key="index"
          @click="changeRoute(option.path)"
        >{{option.name}}</div>
      </div>
      <div class="site-menu row col-3 offset-6 col-md-1 offset-md-4">
        <magnify class="search-icon"/>
        <menu-icon class="menu-icon" @click="sidemenu = !sidemenu"/>
      </div>
    </div>
    <transition name="slide">
      <div class="side-menu" v-if="sidemenu">
        <div class="side-options row">
          <div class="col-12" v-for="option,index in options" :key="index"  @click="changeRoute(option.path)">{{option.name}}</div>
        </div>
      </div>
    </transition>
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
      sidemenu: false,
      options: [
        {
          name: 'Blog',
          path: '/blog'
        },
        {
          name: 'News',
          path: '/news'
        },
        {
          name: 'Resources',
          path: '/resources'
        },
        {
          name: 'Works',
          path: '/works'
        },
        {
          name: 'About me',
          path: '/'
        },
      ]
    }
  },
  methods: {
    changeRoute(path) {
      this.$router.push(path);
      this.sidemenu = false;
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
    justify-content: space-around;
  }

  .site-name {
    font-size: 1.75rem;
    z-index: 200;
  }

  .side-menu, .slide-enter-to {
    position: fixed;
    top: 0px;
    width: 100%;
    right: 0px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: #141526;
    z-index: 100;
  }

  .site-menu {
    justify-content: space-around;
  }

  .side-options {
    display: flex;
    justify-content: center;
    height: 30%;
    font-size: 1.25rem;
    cursor: pointer;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .menu-icon {
    display: none;
  }

  .search-icon, .menu-icon {
    cursor: pointer;
    z-index: 200;
    transform: scale(1.5, 1.5);
  }

  .slide-enter-active {
    transition: all .3s ease;
  }

  .slide-leave-active {
    transition: all .3s ease;
  }

  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
  }

  @media (max-width: 768px) {
    .nav-wrapper > .site-options {
        display: none;
    }

    .menu-icon {
      display: block;
    }
  }
</style>
