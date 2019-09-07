<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
import myfooter from './components/Myfooter.vue'

export default {
  name: 'App',
  components: {
    navbar,
    myfooter
  }
}
</script>

<style>
#app {
  font-family: 'Josefin Sans', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width:100%;
}
</style>
