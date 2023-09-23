<script>
import PostItem from "./PostItem.vue";

export default {
  name: "PostList",
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<template>
  <div>
    <h3>Список пользователей</h3>
    <PostItem v-for="post in posts" :post="post"/>
  </div>
</template>

<style scoped>

</style>