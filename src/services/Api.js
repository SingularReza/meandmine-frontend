import axios from 'axios'

let Api = axios.create({ baseURL: `http://localhost:3300/` })

export default {
    getArticle(articleID) {
      return Api.get('/article/'+articleID)
    },
    createArticle(article) {
      var articleData = new FormData();
      //article.tags = JSON.stringify(article.tags);

      for (var key in article) {
        if(key!='images' && key!='tags')
        articleData.append(key, article[key]);
      }
      articleData.append('tags', JSON.stringify(article.tags))
      Array.from(article.images).forEach(file => {
        articleData.append('images', file);
      })
      return Api.post('/article/create', articleData, {headers: {'Content-Type':'multipart/form-data'}})
    },
    login(credentials) {
      return Api.post('/login', credentials)
    },
    getArticleList() {
      return Api.get('/blog/list')
    },
    createUpdate(update) {
      return Api.post('/update/create', update)
    },
    /*getImage(imagepath) {
      return Api.get('')
    }*/
}
