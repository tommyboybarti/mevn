<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>What would you like to look up?</p>
    <div class="links">
      <router-link v-bind:to="{ name: 'Posts' }">Articles</router-link>
      <router-link v-bind:to="{ name: 'Notes' }">Notes</router-link>
      <!-- <router-link v-bind:to="{ name: 'Cheatsheets' }">Cheatsheets</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Knowledge Base'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  height: 650px;
  padding-top: 10px;
}
.links {
  font-size: 18px;
}
</style>
