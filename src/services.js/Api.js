import axios from 'axios'

let Api = axios.create({ baseURL: `http://localhost:3000/` })

export default {
    getArticle(articleID) {
        return Api.get('/article', articleID)
    },
    createArticle(article) {
        return Api.post('/article/create', article)
    },
    login(credentials) {
        return Api.post('/login', credentials)
    }
}
