<template>
  <NavBar/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from "./components/NavBar.vue";

export default {
  name: 'App',
  components: {NavBar},
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  padding: 20px;
}
</style>