import axios from 'axios'

let Api = axios.create({ baseURL: `http://localhost:3000/` })

export default {
    getArticle(articleID) {
      return Api.get('/article/'+articleID)
    },
    createArticle(article) {
      var articleData = new FormData();
      article.tags = JSON.stringify(article.tags);

      for (var key in article) {
        if(key!='images')
        articleData.append(key, article[key]);
      }
      Array.from(article.images).forEach(file => {
        articleData.append('images', file);
      })
      return Api.post('/article/create', articleData, {headers: {'Content-Type':'multipart/form-data'}})
    },
    login(credentials) {
      return Api.post('/login', credentials)
    }
}
