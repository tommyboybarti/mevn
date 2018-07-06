<template>
  <div class="posts">
    <h1>Add Info</h1>
    <div class="form">
      <div>
        <input class="title" type="text" name="title" placeholder="Title" v-model="title">
      </div>
      <div>
        <textarea placeholder="Description" v-model="description"></textarea>
      </div>
        <textarea placeholder="Code" v-model="code"></textarea>
      <div>
        <router-link v-bind:to="{ name: 'Posts'}">Back</router-link>
        <button class="app_post_btn" @click="addPost">Add</button>
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
      description: '',
      code: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        description: this.description,
        code: this.code
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
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
a {
  text-decoration: none;
  color: darkslategrey;
}
a:hover {
  color: deepskyblue;
}
button {
  margin-left: 15px;
  background-color: aliceblue;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 14px;
}
</style>
