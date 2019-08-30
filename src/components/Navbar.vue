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
      <div class="site-menu row col-2 offset-7 col-md-1 offset-md-4"><magnify class="search-icon"/><menu-icon class="menu-icon" @click="sidemenu = !sidemenu"/></div>
    </div>
    <transition name="slide">
      <div class="side-menu" v-if="sidemenu">
        <div class="side-options row">
          <div class="col-12" v-for="option,index in options" :key="index">{{option}}</div>
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
          path: '/'
        },
        {
          name: 'Resources',
          path: '/'
        },
        {
          name: 'Works',
          path: '/'
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

  .site-name {
    font-size: 1.75rem;
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

  .side-options {
    display: flex;
    justify-content: center;
    height: 30%;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .menu-icon {
    display: none;
    cursor: pointer;
    z-index: 200;
  }

  .search-icon {
    cursor: pointer;
    z-index: 200;
  }

  .slide-enter-active {
    transition: all .3s ease;
  }
  .slide-leave-active {
    transition: all .3s ease;
  }
  .slide-enter, .slide-leave-to
  {
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
