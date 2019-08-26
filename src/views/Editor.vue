<template>
    <div class="editor-wrapper container">
        <div class="blog-editor row">
            <div class="blog-details col-xs-12 col-md-6">
              <div>
                Title Image
                <input type="file" accept="image/* ref="titleimage" :change="uploadTitleImage">
              </div>
              <div>
                Title
                <input type="text" v-model="title"/>
              </div>
              <div>
                Subtext
                <input type="text" v-model="subtext"/>
              </div>
              <div>
                Releveant files
                <input type="file" multiple accept="image/*  ref="contentimages" :change="uploadContentImages">
              </div>
            </div>
            <div class="blog-content col-xs-12 col-md-6">
                Content
                <textarea v-model="content">content here</textarea>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services/Api.js'

export default {
  name: 'editor',
  data() {
    return {
      article: {
        id: 1234,
        title: '',
        titleImage: '',
        subtext: '',
        pretext: '',
        tags: [],
        content: '',
        images: [],
        date: new Date(),
      },
    }
  },
  methods: {
    uploadTitleImage() {
      this.article.titleImage = this.$refs.titleimage.files[0];
    },
    uploadContentImages() {
      this.article.images = this.$refs.contentimages.files;
    },
    createArticle() {
        api.createArticle(this.article)
            .then(res => console.log("created!"));
    }
  }
};
</script>

<style scoped>
</style>
