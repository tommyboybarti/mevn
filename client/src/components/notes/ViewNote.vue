<template>
  <div class="note">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="info-box">
        <h3>Title</h3>
        <p>{{ note.title }}</p>
      </div>
      <div class="info-box">
        <h3>Tags</h3>
        <p>{{ note.tags }}</p>
      </div>
      <div class="info-box">
        <h3>Description</h3>
        <p>{{ note.description }}</p>
      </div>
      <div class="info-box">
        <h3>Code</h3>
        <pre>{{ note.code }}</pre>
      </div>
      <div class="info-box">
        <h3>Action</h3>
        <p>
          <router-link v-bind:to="{ name: 'EditNote' }">Edit</router-link>
          <a class="btnDelete" @click="deleteNote(note._id)">Delete</a>
        </p>
      </div>
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  opacity: 0.9;
  margin-top: 20px;
  justify-content: center;
}
.info-box {
  min-width: 100px;
/*  max-width: rem(500px);*/
  margin: 20px;
}
pre {
  white-space: pre-wrap;
}
pre {
/*  padding-left: 50px;*/
  text-align: left;
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
