<template>
  <div class="header">
    <router-link class="home" v-bind:to="{ name: 'Home'}">Home</router-link>
    <span class="register">Register</span>
    <span class="login">Login</span>
  </div>
</template>

<script>
export default {
  name: 'Header'
}

</script>

<style scoped>
.header {
  box-sizing: border-box;
  height: 50px;
  padding: 10px;
  align-content: center;
}
</style>
