// this service enables us to call different APIs in our server
import Api from './Api'

export default {
  fetchPosts () {
    return Api().get('Posts')
  },
  addPost (params) {
    return Api().post('Posts', params)
  }
}
