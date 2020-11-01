<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: []
      }
    },
    created() {
      axios.get('https://api.hnpwa.com/v0/news/1.json') // Promise 기반 API
        .then(response => this.users = response.data)
        .catch(err => console.log(err))
    }
  }
</script>

<style></style>