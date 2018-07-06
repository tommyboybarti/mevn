<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewPost' }" class="">Add Post</router-link>
      </div>
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- v-for requires a key -->
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.title }}</td>
              <td>{{ post.description }}</td>
              <td><code>{{ post.code }}</code></td>
              <td>
                <router-link v-bind:to="{ name: 'ViewPost', params: { id: post._id }}">View</router-link>
                <!-- <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id }}">Edit</router-link>
                <a class="btnDelete" href="" @click="deletePost(post._id)">Delete</a> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
      msg: 'Overview',
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
    }
    // async deletePost (id) {
    //   await PostsService.deletePost(id)
    //   this.$router.push({ name: 'Posts' })
    // }
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  border: 1px black solid;
  background-color: gainsboro;
}
table {
  width: 100%;
  padding: 10px;
}
th {
  padding: 20px;
  background-color: rgba(130, 130, 130, 0.3);
}
td {
  padding: 15px;
  border: dotted black 1px;
  background-color: rgba(100, 43, 43, 0.2);
}
a {
  text-decoration: none;
  color: darkslategrey;
}
a:hover {
  color: deepskyblue;
}
.btnDelete {
  color: crimson;
}
</style>
