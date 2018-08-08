// this service enables us to call different APIs in our server
import Api from './Api'

export default {
  fetchPosts (search) {
    return Api().get('posts', {
      params: {
        search: search
      }
    })
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
  },
  searchPost (params) {
    return Api().get('')
  }
}
