<template>
    <div class="editor-wrapper">
        <div class="blog">
            <div class="blog-editor">
                <span>title image file upload</span>
                Title
                <input type="text"/>
                Subtext
                <input type="text"/>
                Content
                <textarea>content here</textarea>
                Releveant files
                <span>file upload</span>
            </div>
            <div class="blog-preview">
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

    }
  },
  methods: {
    createArticle() {
        var article = {
            title: this.title,
            subtext: this.subtext,
            pretext: this.pretext,
            tags: this.tags,
            content: this.content,
            date: new Date(),
        }
        api.createArticle(article)
            .then(res => console.log("created!"));
    }
  }
};
</script>

<style scoped>
</style>
