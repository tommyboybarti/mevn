<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewPost' }" class="">Add Post</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="550">Code</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <code>{{ post.code }}</code>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id }}">Edit</router-link>
            <a href="" @click="deletePost(post._id)">Delete</a>
          </td>
        </tr>
      </table>
    <!-- v-for requires a key -->
    </div>
    <div v-else>
      There are no posts <br />
      <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link">Add Post</router-link>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'posts',
  data () {
    return {
      msg: 'Postings',
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>

<style scoped>
</style>
