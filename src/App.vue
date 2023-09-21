<script>
export default {
  name: 'App',
  data: () => ({
    posts: [
      {
        id: 1,
        title: 'JavaScript',
        body: 'Описание поста 1'
      },
      {
        id: 2,
        title: 'TypeScript',
        body: 'Описание поста 2'
      },
      {
        id: 3,
        title: 'Vue js',
        body: 'Описание поста 3'
      },
    ],
    namePost: '',
    descrPost: ''
  }),
  methods: {
    createPost() {
      if (this.namePost && this.descrPost) {
        const post = {
          id: Date.now(),
          title: this.namePost,
          body: this.descrPost
        }
        this.posts.push(post)
        this.descrPost = ''
        this.namePost = ''
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <form ref="form" class="form-post">
      <h4>Создание поста</h4>
      <input
          v-model="namePost"
          class="input"
          type="text"
          placeholder="Название поста"/>
      <input
          v-model="descrPost"
          class="input"
          type="text"
          placeholder="Описание поста"/>
      <button
          @click="createPost"
          type="button"
          class="btn-create">Создать пост</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.input {
  margin-top: 15px;
  padding: 10px 15px;
  border: 1px solid teal;
  width: 100%;
}

.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}

.container {
  padding: 20px;
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
