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
        <form class="select">
          <select v-model="notes.tag" name="tagsFilter">
            <option v-for="tag in notes.tags" :key="tag.value">{{ this.notes.tag }}</option>
          </select>
        </form>
        <form class="filter">
          <input type="checkbox" />
          <label for="HTML">HTML</label>
          <input type="checkbox" />
          <label for="WebDev">WebDev</label>
        </form>
        <div class="noteContainer">
          <!-- v-for requires a key -->
          <div class="noteBlock" v-for="note in filteredNotes" :key="note.id">
            <p class="title">{{ note.title }}</p>
            <p class="format">{{ note.format }}</p>
            <p class="tags">{{ note.tags }}</p>
            <div>
              <router-link v-bind:to="{ name: 'ViewNote', params: { id: note._id }}">View</router-link>
            </div>
          </div>
        </div>
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
    // ,
    // hideContent() {
    //   const list = document.querySelector(".need-margin tr");
    //   const checkHTML = document.querySelector("#HTML");
    //   checkHTML.addEventListener("change", function(e) {
    //     if (checkHTML.checked) {
    //       list.style.display = "none";
    //     } else {
    //       list.style.display = "block";
    //     }
    //   })
    // }
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
  background: linear-gradient(45deg, rgba(211, 211, 211, 1), rgba(211, 211, 211, 0.6));
  background-attachment: scroll;
  box-sizing: border-box;
  min-height: 550px;
}
.search-input:focus {
  outline: none;
}
.search-input {
  border-radius: 15px;
  margin: 10px;
  font-size: 14px;
  padding: 10px;
  width: 50%;
}
.noteContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-around
}
.noteBlock {
  background: rgba(175, 209, 221, 0.801);
  padding: 10px;
  margin-top: 2%;
  border-radius: 6px;
  box-shadow: 0 0px 10px 1px #777;
}
.title {
  font-size: 1.1rem;
  font-weight: bold
}
</style>
