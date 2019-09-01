<template>
  <div class="title-card">
    <div class="card-fill"></div>
      <div class="card-title">
        <div class="title-wrapper row">
          <div class="title col-xs-12 col-md-5">
            <h1>{{title}}</h1>
          </div>
          <div class="sub-text col-xs-12 col-md-6">{{text}}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'titleCard',
  props: [
    'title',
    'text'
  ]
}
</script>

<style scoped>
  h1 {
    font-size: 4rem;
  }
  .title-card {
    height: 70vh;
  }

  .card-fill {
    height: 60%;
    background: #141526;
  }

  .card-title {
    position: absolute;
    padding: 0 10% 0 10%;
    width: 100%;
    top: 20%;
  }

  .title-wrapper {
    height: 400px;
    border: 1px solid transparent;
    border-radius: 7px;
    box-shadow: 0 10px 20px 0px rgba(0,0,0,0.3);
    background: rgb(30,31,48);
    color: rgba(255, 255, 255, 0.8);
  }

  .title {
    height: 90%;
    margin: 10px 20px 10px 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }

  .title, .sub-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .title {
        height:60%;
        padding: 0 10% 10px 10%;
        border: none;
        border-bottom: 1px solid black;
    }

    .title-wrapper {
      height: 300px;
    }
  }
</style>
