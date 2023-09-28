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
    <h3 v-if="posts.length > 0">Список постов</h3>
    <h3 class="text-red" v-else>Список постов пуст</h3>
    <PostItem
        @remove="this.$emit('remove', post)"
        v-for="post in posts"
        :post="post"
        :key="post.id"/>
  </div>
</template>

<style scoped>

</style>