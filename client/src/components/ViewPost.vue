<template>
  <div class="post">
    <h1>{{ msg }}</h1>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Tags</th>
            <th>Link</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ post.title }}</td>
            <td>{{ post.tags }}</td>
            <td><a v-bind:href="post.description" target="_blank">{{ post.description }}</a></td>
            <td><pre>{{ post.code }}</pre></td>
            <td>
              <router-link v-bind:to="{ name: 'EditPost'
              // , params: { id: post._id }
              }">Edit</router-link>
              <a class="btnDelete" @click="deletePost(post._id)">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="button">
      <router-link v-bind:to="{ name: 'Posts' }">Back</router-link>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  data () {
    return {
      msg: 'Details',
      post: {}
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
      // it's enough to only send one obj.
      // this.title = response.data.title
      // this.description = response.data.description
      // this.code = response.data.code
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.$router.push({ name: 'Posts' })
    }
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
  background-color: rgba(136, 217, 223, 0.2);
}
a {
  display: block;
  margin: 10px;
  text-decoration: none;
  color: darkslategrey;
}
a:hover {
  color: deepskyblue;
  cursor: pointer;
}
.btnDelete {
  color: crimson;
}
</style>
