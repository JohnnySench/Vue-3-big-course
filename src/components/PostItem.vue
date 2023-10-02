<script>

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    removePost(post) {
      this.$emit('remove', post)
    },
    openPost(post) {
      this.$router.push(`/posts/${post.id}`)
    }
  }
}
</script>

<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btn">
      <MyButton style="margin-right: 15px" @click="openPost(post)">
        Открыть
      </MyButton>
      <MyButton @click="removePost(post)">
        Удалить
      </MyButton>
    </div>
  </div>
</template>

<style scoped>
.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btn {
  display: flex;
}

</style>