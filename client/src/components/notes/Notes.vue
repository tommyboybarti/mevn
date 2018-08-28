<template>
  <div class="notes">
    <h1>{{ msg }}</h1>
    <div v-if="notes.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewNote' }" class="">Add note</router-link>
      </div>
      <div class="container">
        <div class="search">
          <input class="search-input" type="text" v-model="searchFilter" placeholder="Search for anything">
        </div>
        <label for="select">Select a tag</label>
        <form class="select">
          <select v-model="selectFilter" name="selectFilter">
            <!-- <option v-for="tag in tags" :key="tag.value">{{ this.notes.tag }}</option> -->
            <option value="">None</option>
            <option value="HTML">HTML</option>
            <option value="WebDev">WebDev</option>
          </select>
        </form>
        <ul>
          <li v-for="note in checkFilter" v-bind:key="note.id">
            <input type="checkbox" v-bind:value="checkFilter" /> {{ checkFilter }}
          </li>
        </ul>
        <div class="noteContainer">
          <!-- v-for requires a key -->
          <div class="noteBlock" v-for="note in filteredBySelect" :key="note.id">
            <div class="front">
              <p class="title">{{ note.title }}</p>
              <p class="format">{{ note.format }}</p>
              <p class="tags">{{ note.tags }}</p>
            </div>
            <div class="back">
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
      searchFilter: '',
      selectFilter: '',
      checkFilter: []
    }
  },
  mounted () {
    this.getNotes()
  },
  computed: {
    // requires a proper function declaration otherwise this.posts is not found.
    filteredBySearch: function () {
      return this.notes.filter(note => {
        const searchNote = new RegExp(this.searchFilter, 'i')
        return (
          note.title.match(searchNote) ||
          note.format.match(searchNote) ||
          note.tags.match(searchNote)
        )
      })
    },
    filteredBySelect: function () {
      return this.notes.filter(note => {
        const tagNote = this.selectFilter
        return (
          note.tags.match(tagNote)
        )
      })
    },
    filteredByCheck: function () {
      return this.notes.filter(note => {
        const checkNote = this.checkFilter
        return (
          note.tags.match(checkNote)
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
  -webkit-transform-style: preserve-3d;
  transition: 0.4s;
}
.noteBlock:hover {
  -webkit-transform: rotatey(-180deg);
}
.noteBlock .front {
  z-index: 3;
}
.noteBlock .back {
  z-index: 1;
  -webkit-transform: rotatey(-180deg);
}
.noteBlock .front, .noteBlock .back {
  -webkit-backface-visibility: hidden;
}
.title {
  font-size: 1.1rem;
  font-weight: bold
}
</style>
