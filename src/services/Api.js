import axios from 'axios'

let Api = axios.create({ baseURL: `http://localhost:3000/` })

export default {
    getArticle(articleID) {
      return Api.get('/article', articleID)
    },
    createArticle(article) {
      var articleData = new FormData();
      for (var key in article) {
        articleData.append(key, article[key]);
        console.log(article[key])
      }
      return Api.post('/article/create/'+article.id, articleData, {headers: {'Content-Type':'multipart/form-data'}})
    },
    login(credentials) {
      return Api.post('/login', credentials)
    }
}
