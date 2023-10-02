<script>
export default {
  name: "PostDescription",
  computed: {
    getIdPost() {
      return this.$route.params.id
    }
  }
}
</script>

<template>
  <div>
    <h1>Это страница поста с ID = {{getIdPost}}</h1>
  </div>
</template>

<style scoped>

</style>