<template>
  <div class="notes">
    <h1>{{ msg }}</h1>
    <div v-if="notes.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewNote' }" class="">Add note</router-link>
      </div>
      <div class="container">
        <div class="search">
          <input class="search-input" type="text" v-model="search" placeholder="Search">
        </div>
        <div>
          <select v-model="notes.tag" name="tagsFilter">
            <option v-for="tag in notes.tags" :key="tag.value">{{ this.notes.tag }}</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Format</th>
              <th>Tags</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- v-for requires a key -->
            <tr class="need-margin" v-for="note in filteredNotes" :key="note.id">
              <td class="title"><p>{{ note.title }}</p></td>
              <td class="format"><p>{{ note.format }}</p></td>
              <td class="tags"><p>{{ note.tags }}</p></td>
              <td>
                <router-link v-bind:to="{ name: 'ViewNote', params: { id: note._id }}">View</router-link>
                <!-- <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id }}">Edit</router-link>
                <a class="btnDelete" href="" @click="deletePost(post._id)">Delete</a> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      <div>
        <p>There are no notes</p>
      </div>
      <div>
        <router-link v-bind:to="{ name: 'NewNote' }" class="add_post_link">Add note</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NotesService from '@/services/NotesService'

export default {
  // name: 'posts',
  data () {
    return {
      msg: 'Notes',
      notes: [],
      search: ''
    }
  },
  mounted () {
    this.getNotes()
  },
  computed: {
    // requires a proper function declaration otherwise this.posts is not found.
    filteredNotes: function () {
      return this.notes.filter(note => {
        const reg = new RegExp(this.search, 'i')
        return (
          note.title.match(reg) ||
          note.format.match(reg) ||
          note.tags.match(reg)
        )
      })
    }
  },
  methods: {
    async getNotes () {
      const response = await NotesService.fetchNotes()
      this.notes = response.data.notes
    }
  }
}
</script>

<style scoped>
.notes {
  padding-top: 10px;
}
.container {
  margin-top: 20px;
  position: center;
  background: rgba(208, 221, 235, 0.9);
  background-attachment: scroll;
  box-sizing: border-box;
  min-height: 550px;
}
.search {
  background: rgba(211, 211, 211, 1);
}
.search-input {
  border-radius: 15px;
}
.search-input:focus {
  outline: none;
}
input {
  margin: 10px;
  font-size: 14px;
  padding: 10px;
  width: 50%;
}
table {
  border-spacing: 0px;
  width: 100%;
  position: relative;
}
th {
  padding: 20px;
  background: linear-gradient(rgba(211, 211, 211, 1), rgba(211, 211, 211, 0));
}
tr .title {
  padding-right: 7%;
}
tr .tags {
  padding-left: 7%;
}
.btnDelete {
  color: crimson;
}
</style>
