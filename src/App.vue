<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  name: 'App',
  components: {PostList, PostForm},
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
    }
  }
}
</script>

<template>
  <div class="container">
    <PostForm @create="createPost"/>
    <PostList :posts="posts"/>

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
