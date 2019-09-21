<template>
  <div class="footer-wrapper centered">
    &copy; SingularReza 2019-<br/>
    Site in work
  </div>
</template>

<script>
export default {
  name: 'myfooter'
}
</script>

<style scoped>
  .footer-wrapper {
    height: 120px;
    background: #141526;
    width: 100%;
    color: grey;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
