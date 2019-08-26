<template>
    <div class="editor-wrapper container">
        <div class="blog-editor row">
            <div class="blog-details col-xs-12 col-md-6">
              <table>
                <tr>
                    <td>Title Image</td>
                    <td><input type="file" accept="image/*" ref="titleimage" @change="uploadTitleImage"></td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td><input type="text" v-model="article.title"/></td>
                </tr>
                <tr>
                    <td>Subtext</td>
                    <td><input type="text" v-model="article.subtext"/></td>
                </tr>
                <tr>
                    <td>Pretext</td>
                    <td><input type="text" v-model="article.pretext"/></td>
                </tr>
                <tr>
                    <td>Tags</td>
                    <td>
                      <select multiple v-model="article.tags">
                        <option>anime</option>
                        <option>movies</option>
                        <option>tech</option>
                        <option>philosophy</option>
                        <option>miscellaneous</option>
                      </select>
                    </td>
                </tr>
                <tr>
                    <td>Releveant files</td>
                    <td><input type="file" multiple accept="image/*"  ref="contentimages" @change="uploadContentImages"></td>
                </tr>
              </table>
            </div>
            <div class="blog-content col-xs-12 col-md-6">
                Content
                <textarea v-model="article.content">content here</textarea>
            </div>
        <button @click="createArticle">Submit</button>
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
        title: '',
        titleImage: '',
        subtext: '',
        pretext: '',
        tags: [],
        content: '',
        images: null,
        date: new Date(),
      },
    }
  },
  methods: {
    uploadTitleImage() {
      console.log(this.$refs.titleimage.files[0])
      this.article.titleImage = this.$refs.titleimage.files[0];
    },
    uploadContentImages() {
      console.log(this.$refs.contentimages.files)
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
  table {
    border: none;
    text-align: left;
  }

  button {
    height: 40px;
    width: 80px;
  }

  textarea {
    width: 100%;
    height: 80vh;
  }
</style>
