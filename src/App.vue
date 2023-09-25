<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyButton from "./components/UI/MyButton.vue";

export default {
  name: 'App',
  components: {MyButton, PostList, PostForm},
  data: () => ({
    dialogVisible: false,
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
  }),
  methods: {
    createPost(data) {
      console.log(data)
      const payload = {
        id: data.id,
        title: data.title,
        body: data.body
      }
      this.posts.push(payload)
    },
    removePost(post) {
      this.posts = this.posts.filter(x => x.id !== post.id)
    },
    openDialog() {
      this.dialogVisible = true;
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Страница с постами</h1>
    <my-button @click="openDialog">Создать пост</my-button>
    <MyDialog v-model:local-visible="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList @remove="removePost" :posts="posts"/>

  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  padding: 20px;
}


</style>
