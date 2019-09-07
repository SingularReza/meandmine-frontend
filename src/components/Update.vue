<template>
  <div class="card-wrapper row">
    <div class="image-wrapper col-2">
      <img v-if="imageUrl" class="updateImage" :src="imageUrl"/>
    </div>
    <div class="content-wrapper col-10">
      <div class="title-wrapper">
        <span class="title">Title</span>
        <span class="date">{{timeSince(date)}} ago</span>
      </div>
      <div class="text-wrapper">subtext</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'update',
    props: [
      'title',
      'date',
      'text',
      'image'
    ],
    computed: {
      imageUrl() {
        return ("http://localhost:3300/"+this.image)
      }
    },
    methods: {
      timeSince(timeStamp) {
        var now = new Date(),
          secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
        if(secondsPast < 60){
          return parseInt(secondsPast) + ' s';
        }
        if(secondsPast < 3600){
          return parseInt(secondsPast/60) + ' m';
        }
        if(secondsPast <= 86400){
          return parseInt(secondsPast/3600) + ' h';
        }
        if(secondsPast > 86400){
            day = timeStamp.getDate();
            month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","");
            year = timeStamp.getFullYear() == now.getFullYear() ? "" :  " "+timeStamp.getFullYear();
            return day + " " + month + year;
        }
      }
    }
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

  .updateImage {
    object-fit: cover;
  }
</style>
