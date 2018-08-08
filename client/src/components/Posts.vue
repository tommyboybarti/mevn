<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewPost' }" class="">Add Post</router-link>
      </div>
      <div class="container">
        <div class="search">
          <input class="search-input" type="text" v-model="search" placeholder="Search">
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
            <tr class="need-margin" v-for="post in filteredPosts" :key="post.id">
              <td class="title"><p>{{ post.title }}</p></td>
              <td class="format"><p>{{ post.format }}</p></td>
              <td class="tags"><p>{{ post.tags }}</p></td>
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
      msg: 'Posts',
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
      return this.posts.filter(post => {
        const reg = new RegExp(this.search, 'i')
        return (
          post.title.match(reg) ||
          post.format.match(reg) ||
          post.tags.match(reg) ||
          post.description.match(reg)
        )
      })
    }
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    }
  }
}
</script>

<style scoped>
.posts {
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
