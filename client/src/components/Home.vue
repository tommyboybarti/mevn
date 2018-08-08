<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>What would you like to look up?</p>
    <form>
      <input type="text" name="search" placeholder="search something nice" v-model="search"/>
    </form>
    <div>
      <router-link v-bind:to="{ name: 'Posts'}">Articles</router-link>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Knowledge Base',
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'Posts'
      }
      if (this.search !== '') {
        // put search key into route.query
        route.query = {
          search: this.search
        }
        this.$router.push(route)
      }
      // push to that route saved in const above
    }, 700),
    // set search input equal to query string in url
    '$route.query.search': {
      // immediate: true,
      handler (value) {
        this.search = value
      }
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
input {
  margin: 10px;
  font-size: 14px;
  padding: 10px;
  width: 50%;
  border-radius: 8px;
}
</style>
