<template>
  <div class="notes">
    <h1>Add Info</h1>
    <div class="form">
      <div>
        <input type="text" placeholder="Title" v-model="title">
      </div>
      <div>
        <input type="text" placeholder="Format" v-model="format">
      </div>
      <div>
        <input type="text" placeholder="Tags" v-model="tags">
      </div>
      <div>
        <textarea placeholder="Description" v-model="description"></textarea>
      </div>
        <textarea placeholder="Code" v-model="code"></textarea>
      <div>
        <router-link v-bind:to="{ name: 'Notes'}">Back</router-link>
        <a class="app_post_btn" @click="addNote">Add</a>
      </div>
    </div>
  </div>
</template>

<script>
import NotesService from '@/services/NotesService'

export default {
  name: 'NewNote',
  data () {
    return {
      title: '',
      format: '',
      tags: '',
      description: '',
      code: ''
    }
  },
  methods: {
    async addNote () {
      await NotesService.addNote({
        title: this.title,
        format: this.format,
        tags: this.tags,
        description: this.description,
        code: this.code
      })
      this.$router.push({ name: 'Notes' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  font-size: 14px;
  padding: 10px;
  width: 50%;
  margin: 5px;
}
textarea {
  margin-top: 10px;
  width: 80%;
  height: 150px;
  padding: 5px;
}
a {
  display: inline-block;
  margin: 10px;
  text-decoration: none;
  color: darkslategrey;
}
a:hover {
  color: deepskyblue;
  cursor: pointer;
}
</style>
