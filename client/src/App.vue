<template>
  <div id="app">
    <div>
      <appheader></appheader>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/templates/Header.vue'

export default {
  name: 'App',
  components: {
    'appheader': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('./assets/laptop_glasses.jpg');
  background-size: cover;
  background-position: center;
  min-height: 55vw;
}
a {
  text-decoration: none;
  color: rgb(53, 99, 184);
}
a:hover {
  color: deepskyblue;
}
</style>
