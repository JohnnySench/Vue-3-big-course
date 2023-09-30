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
    <transition-group name="user-list">
      <PostItem
          @remove="this.$emit('remove', post)"
          v-for="post in posts"
          :post="post"
          :key="post.id"/>
    </transition-group>
  </div>
</template>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}

.user-list-enter-active,
.user-list-leave-active {
  transition: all .4s ease;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.8s ease;
}
</style>