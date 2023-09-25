<script>

export default {
  name: 'PostForm',
  data() {
    return {
      post: {
        title: '',
        body: ''
      },
    }
  },
  methods: {
    create() {
      if (this.post.body && this.post.title) {
        this.post.id = Date.now()
        this.$emit('create', this.post)
        console.log(this.post.body)
      }
      this.post = {
        title: '',
        body: ''
      }

    }
  }
}
</script>

<template>
  <form ref="form" class="form-post">
    <h4>Создание поста</h4>
    <MyInput
        v-model="post.title"
        placeholder="Название поста"/>
    <MyInput
        v-model="post.body"
        placeholder="Описание поста"/>
    <MyButton @click="create">Создать пост</MyButton>
  </form>
</template>

<style scoped>
.form-post {
  display: flex;
  flex-direction: column;
}

</style>