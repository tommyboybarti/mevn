<template>
  <div class="posts">
    <h1>Edit Info</h1>
    <div class="form">
      <div>
        <input type="text" placeholder="Title" v-model="post.title">
      </div>
      <div>
        <input type="text" placeholder="Tags" v-model="post.tags">
      </div>
      <div>
        <textarea placeholder="Description" v-model="post.description"></textarea>
      </div>
      <div>
        <textarea placeholder="Code" v-model="post.code"></textarea>
      </div>
      <div>
        <router-link v-bind:to="{ name: 'ViewPost', params: { id: post._id }}">Cancel</router-link>
        <button @click="updatePost">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  data () {
    return {
      post: {}
      // title: '',
      // description: '',
      // code: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.post = response.data
      // this.title = response.data.title
      // this.description = response.data.description
      // this.code = response.data.code
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.post.title,
        tags: this.post.tags,
        description: this.post.description,
        code: this.post.code
      })
      this.$router.push({ name: 'Posts' })
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
a {
  text-decoration: none;
  color: darkslategrey;
}
a:hover {
  color: deepskyblue;
}
button {
  color: rgb(53, 99, 184);
  margin-left: 15px;
  border: none;
  font-size: 16px;
}
button:hover {
  color: deepskyblue;
  cursor: pointer;
}
</style>
