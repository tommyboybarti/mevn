// this service enables us to call different APIs in our server
import Api from './Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },
  addPost (params) {
    return Api().post('posts', params)
  },
  updatePost (params) {
    return Api().put(`posts/edit/${params.id}`, params)
  },
  getPost (params) {
    return Api().get(`post/${params.id}`)
  },
  deletePost (id) {
    return Api().delete(`posts/${id}`)
  }
}
