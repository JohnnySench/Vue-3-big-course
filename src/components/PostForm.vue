<script>
export default {
  name: 'PostForm',
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    create() {
      if (this.post.body && this.post.title) {
        this.post.id = Date.now()
        this.$emit('create', this.post)
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
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Название поста"/>
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Описание поста"/>
    <button
        @click="create"
        type="button"
        class="btn-create">Создать пост
    </button>
  </form>
</template>

<style scoped>
.input {
  margin-top: 15px;
  padding: 10px 15px;
  border: 1px solid teal;
  width: 100%;
}


.form-post {
  display: flex;
  flex-direction: column;
}

.btn-create {
  margin-top: 15px;
  align-self: flex-end;
  border: 1px solid teal;
  padding: 10px 15px;
}
</style>