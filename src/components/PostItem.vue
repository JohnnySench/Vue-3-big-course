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

</style>