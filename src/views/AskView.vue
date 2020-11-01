<template>
  <div>
    <div v-for="ask in asks">{{ ask.title }}</div>
  </div>
</template>

<script>
  import { fetchAskList } from "../api/index";

  export default {
    data() {
      return {
        asks: []
      }
    },
    created() { // 컴포넌트가 생성되자마자 실행되는 로직(lifecycle hook)
      fetchAskList()
        .then(response => this.asks = response.data)
        .catch(err => console.log(err))
    }

  }
</script>

<style></style>