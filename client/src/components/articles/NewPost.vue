<template>
  <div class="posts">
    <h1>Add Info</h1>
    <div class="form">
      <div>
        <input type="text" placeholder="Title" v-model="title">
      </div>
      <div>
        <input type="text" placeholder="Title" v-model="format">
      </div>
      <div>
        <input type="text" placeholder="Tags" v-model="tags">
      </div>
      <div>
        <textarea placeholder="Description" v-model="description"></textarea>
      </div>
      <div>
        <router-link v-bind:to="{ name: 'Posts'}">Back</router-link>
        <a class="app_post_btn" @click="addPost">Add</a>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      format: '',
      tags: '',
      description: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        format: this.format,
        tags: this.tags,
        description: this.description
      })
      this.$router.push({ name: 'Posts' })
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
