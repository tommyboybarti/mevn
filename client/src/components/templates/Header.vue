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
  height: 50px;
  padding: 10px;
  display: grid;
}
.home {
  grid-column-start: 1;
  grid-column-end: 2;
}
.register {
  grid-column-start: 10;
  grid-column-end: 11;
}
.login {
  grid-column-start: 11;
  grid-column-end: 12;
}
</style>
