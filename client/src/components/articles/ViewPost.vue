<template>
  <div class="post">
    <h1>{{ msg }}</h1>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Format</th>
            <th>Tags</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ post.title }}</td>
            <td>{{ post.format }}</td>
            <td>{{ post.tags }}</td>
            <td class="link"><a v-bind:href="post.description" target="_blank">{{ post.description }}</a></td>
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
}
table {
  border-spacing: 0px;
  width: 100%;
}
thead {
  padding: 20px;
  background: rgba(211, 211, 211, 1);
}
tbody {
  background: linear-gradient(rgba(211, 211, 211, 1), rgba(211, 211, 211, 0.1));
}
th {
  padding: 15px;
}
td {
  padding: 15px;
}
.link {
  word-break: break-all;
}
a {
  display: block;
  margin: 10px;
  color: darkslategrey;
}
a:hover {
  cursor: pointer;
}
.btnDelete {
  color: crimson;
}
</style>
