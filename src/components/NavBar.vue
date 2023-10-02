<script>

export default {
}
</script>

<template>
  <div class="navbar">
    <div style="cursor: pointer" @click="this.$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="this.$router.push('/posts')">
        Страница с постами
      </my-button>
      <my-button @click="this.$router.push('/about')" style="margin-left: 20px">
        О сайте
      </my-button>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  height: 50px;
  background: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;

}
.navbar__btns {
  margin-left: auto;
}
</style>