<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>What would you like to look up?</p>
    <div>
      <router-link v-bind:to="{ name: 'Posts'}">Articles</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Knowledge Base'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: rgb(53, 99, 184);
}
a:hover {
  color: deepskyblue;
}
</style>
