<template>
  <div class="posts">
    <h1>Edit Info</h1>
    <div class="form">
      <div>
        <input class="title" type="text" name="title" placeholder="Title" v-model="title">
      </div>
      <div>
        <textarea placeholder="Description" v-model="description"></textarea>
      </div>
      <div>
        <textarea placeholder="Code" v-model="code"></textarea>
      </div>
      <div>
        <!-- <router-link v-bind:to="{ name: 'ViewPost', params: { id: post._id }}">Cancel</router-link> -->
        <button class="app_post_btn" @click="updatePost">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  data () {
    return {
      title: '',
      description: '',
      code: ''
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
      this.title = response.data.title
      this.description = response.data.description
      this.code = response.data.code
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
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
</style>
