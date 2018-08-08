<template>
  <div class="note">
    <h1>{{ msg }}</h1>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Format</th>
            <th>Tags</th>
            <th>Description</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ note.title }}</td>
            <td>{{ note.format }}</td>
            <td>{{ note.tags }}</td>
            <td><a v-bind:href="note.description" target="_blank">{{ note.description }}</a></td>
            <td><pre>{{ note.code }}</pre></td>
            <td>
              <router-link v-bind:to="{ name: 'EditNote'
              // , params: { id: note._id }
              }">Edit</router-link>
              <a class="btnDelete" @click="deleteNote(note._id)">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="button">
      <router-link v-bind:to="{ name: 'Notes' }">Back</router-link>
    </div>
  </div>
</template>

<script>
import NotesService from '@/services/NotesService'

export default {
  data () {
    return {
      msg: 'Details',
      note: {}
    }
  },
  mounted () {
    this.getNote()
  },
  methods: {
    async getNote () {
      const response = await NotesService.getNote({
        id: this.$route.params.id
      })
      this.note = response.data
      // it's enough to only send one obj.
      // this.title = response.data.title
      // this.description = response.data.description
      // this.code = response.data.code
    },
    async deleteNote (id) {
      await NotesService.deleteNote(id)
      this.$router.push({ name: 'Notes' })
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
table {
  border-spacing: 0px;
  width: 100%;
}
thead {
  padding: 20px;
  background: rgba(211, 211, 211, 1);
}
tbody {
  background: rgba(211, 211, 211, 0.9);
}
th {
  padding: 15px;
}
td {
  padding: 15px;
}
a {
  display: block;
  margin: 10px;
  color: darkslategrey;
}
a:hover {
  cursor: pointer;
}
.btnDelete {
  color: crimson;
}
</style>
