<template>
  <div class="posts">
    <h1>Edit Post</h1>
    <div class="form">
      <div>
        <input type="text" name="title" placeholder="Title" v-model="title">
      </div>
      <div>
        <textarea rows="10" cols="100" placeholder="Description" v-model="description"></textarea>
      </div>
      <code>
        <textarea rows="10" cols="100" placeholder="Code" v-model="code"></textarea>
      </code>
      <div>
        <button class="app_post_btn" @click="updatePost">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'EditPost',
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

</style>
