// this service enables us to call different APIs in our server
import Api from './Api'

export default {
  fetchNotes () {
    return Api().get('notes')
  },
  addNote (params) {
    return Api().post('notes', params)
  },
  updateNote (params) {
    return Api().put(`notes/edit/${params.id}`, params)
  },
  getNote (params) {
    return Api().get(`note/${params.id}`)
  },
  deleteNote (id) {
    return Api().delete(`notes/${id}`)
  }
}
