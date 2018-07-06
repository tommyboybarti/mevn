<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewPost' }" class="">Add Post</router-link>
      </div>
      <div class="container">
        <div class="search">
          <input type="text" v-model="search" placeholder="Search">
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Tags</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- v-for requires a key -->
            <tr v-for="post in filteredPosts" :key="post.id">
              <td>{{ post.title }}</td>
              <td>{{ post.tags }}</td>
              <td>{{ post.description | snippet }}</td>
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
      <div>
        <p>There are no Posts</p>
      </div>
      <div>
        <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link">Add Post</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  // name: 'posts',
  data () {
    return {
      msg: 'Overview',
      posts: [],
      search: ''
    }
  },
  mounted () {
    this.getPosts()
  },
  computed: {
    // requires a proper function declaration otherwise this.posts is not found.
    filteredPosts: function () {
      return this.posts.filter((post) => {
        const reg = new RegExp(this.search, 'i')
        return post.title.match(reg) || post.tags.match(reg) || post.description.match(reg)
      })
    }
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
input {
  margin: 10px;
  font-size: 14px;
  padding: 10px;
  width: 50%;
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
  background-color: rgba(136, 217, 223, 0.2);
}
a {
  text-decoration: none;
  color: rgb(53, 99, 184);
}
a:hover {
  color: deepskyblue;
}
.btnDelete {
  color: crimson;
}
</style>
