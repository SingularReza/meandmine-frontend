<template>
  <div class="card-wrapper row">
    <div class="image-wrapper col-2">image</div>
    <div class="content-wrapper col-10">
      <div class="title-wrapper">
        <span class="title">Title</span>
        <span class="date">Date</span>
      </div>
      <div class="text-wrapper">subtext</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'update'
  }
</script>

<style scoped>
  .card-wrapper {
    font-size: 1rem;
    height: 100%;
    width: 100%;
  }

  .title-wrapper {
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }

  .title {
    color: rgba(61, 180, 242, 0.8);
  }

  .date {
    font-size: small;
    color: rgb(133, 150, 165);
  }

  .title-wrapper, .text-wrapper {
    text-align: left;
    padding-bottom: 5px;
  }

  .image-wrapper {
    background: #fff;
  }
</style>
