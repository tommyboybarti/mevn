<template>
  <div class="notes">
    <h1>Edit Info</h1>
    <div class="form">
      <div>
        <input type="text" placeholder="Title" v-model="note.title">
      </div>
      <div>
        <input type="text" placeholder="Format" v-model="note.format">
      </div>
      <div>
        <input type="text" placeholder="Tags" v-model="note.tags">
      </div>
      <div>
        <textarea placeholder="Description" v-model="note.description"></textarea>
      </div>
      <div>
        <textarea placeholder="Code" v-model="note.code"></textarea>
      </div>
      <div>
        <router-link v-bind:to="{ name: 'ViewNote'
        //, params: { id: note._id }
        }">Cancel</router-link>
        <button @click="updateNote">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import NotesService from '@/services/NotesService'

export default {
  data () {
    return {
      note: {}
      // title: '',
      // description: '',
      // code: ''
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
      // this.title = response.data.title
      // this.description = response.data.description
      // this.code = response.data.code
    },
    async updateNote () {
      await NotesService.updateNote({
        id: this.$route.params.id,
        title: this.note.title,
        format: this.note.format,
        tags: this.note.tags,
        description: this.note.description,
        code: this.note.code
      })
      this.$router.push({ name: 'Notes' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  margin: 5px;
  font-size: 14px;
  padding: 10px;
  width: 50%;
}
textarea {
  margin-top: 10px;
  width: 80%;
  height: 150px;
  padding: 5px;
}
a, button {
  text-decoration: none;
  color: darkslategrey;
  margin: 5px;
}
a:hover, button:hover {
  color: deepskyblue;
}
button {
  border: none;
  background: transparent;
  font-size: 16px;
}
button:hover {
  cursor: pointer;
}
</style>
