<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import ToolBar from './components/ToolBar';
  
export default {
  components: {
    ToolBar
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
  }
</style>
