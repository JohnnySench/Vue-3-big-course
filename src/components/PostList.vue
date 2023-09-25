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
    <PostItem
        @remove="this.$emit('remove', post)"
        v-for="post in posts"
        :post="post"
        :key="post.id"/>
  </div>
</template>

<style scoped>

</style>