<template>
  <div id="app">
    <!-- <Example1 /> -->
    <Example2 />
  </div>
</template>

<script>
import Example1 from "./components/Example1.vue";
import Example2 from "./components/Example2.vue";

export default {
  name: "app",
  components: {
    Example1,
    Example2
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
