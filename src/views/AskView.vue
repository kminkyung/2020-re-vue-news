<template>
  <div>
    <div v-for="ask in fetchedAsk">{{ ask.title }}</div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(["fetchedAsk"])
      // #2
      // ...mapState({
      //   asks: state => state.asks
      // })
      
      // #1
      // ask() {
      //   return this.$store.state.asks;
      // }
    },
    created() { // 컴포넌트가 생성되자마자 실행되는 로직(lifecycle hook). 주로 beforeMount나 created 에서 데이터를 받아옴
      this.$store.dispatch('FETCH_ASK')
    }

  }
</script>

<style></style>