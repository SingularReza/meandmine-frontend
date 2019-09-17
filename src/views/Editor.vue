<template>
    <div class="editor-wrapper container">
        <div class="blog-editor row" v-if="view=='blog'">
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
                <tr>
                    <td>Image Links</td>
                    <td>
                      <ul>
                        <li v-for="(file, index) in article.images" :key="index">{{file.name.replace(/[_-]|\s/g, "")}}</li>
                      </ul>
                    </td>
                </tr>
              </table>
            </div>
            <div class="blog-content col-xs-12 col-md-6">
                Content
                <textarea v-model="article.content">content here</textarea>
            </div>
        <button @click="createArticle">Submit</button>
      </div>
      <div class="update-editor row" v-else-if="view=='update'">
        <div class="col-6 offset-3">
          Image<br/>
          <input type="file" ref="updateimage"/>
        </div>
        <div class="col-6 offset-3">
          Title<br/>
          <input type="text" v-model="update.title"/>
        </div>
        <div class="col-6 offset-3">
          Text<br/>
          <input type="text" v-model="update.text"/>
        </div>
        <button @click="submitUpdate">submit</button>
      </div>
      <button @click="view='blog'">Blog</button>
      <button @click="view='update'">Update</button>
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
      update: {
        title: '',
        text: '',
        date: Date,
        image: null,
      },
      view: 'blog',
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
    },
    submitUpdate() {
      this.update.image = this.$refs.updateimage.files[0];
      this.update.date = new Date();
      api.createUpdate(this.update)
        .then(res => console.log("udate submitted!"));
    }
  }
};
</script>

<style scoped>
  table {
    border: none;
    text-align: left;
    height: 100%;
  }

  button {
    height: 40px;
    width: 80px;
  }

  input {
    width: 90%;
  }

  textarea {
    width: 100%;
    height: 80vh;
  }

  .blog-details {
    display: flex;
  }

  .update-editor {
    height: calc(100vh - 200px);
    padding: 20% 0 20% 0;
  }
</style>
