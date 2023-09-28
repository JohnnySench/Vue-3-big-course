<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyButton from "./components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "./components/UI/MySelect.vue";

export default {
  name: 'App',
  components: {MySelect, MyButton, PostList, PostForm},
  data: () => ({
    dialogVisible: false,
    posts: [],
    isPostLoading: false,
    selectedSort: '',
    sortOptions: [
      {name: 'По названию', value: 'title'},
      {name: 'По описанию', value: 'body'}
    ]
  }),
  methods: {
    createPost(data) {
      const payload = {
        id: data.id,
        title: data.title,
        body: data.body
      }
      this.posts.push(payload)
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(x => x.id !== post.id)
    },
    openDialog() {
      this.dialogVisible = true;
    },
    async getPosts() {
      try {
        this.isPostLoading = true;
        setTimeout(async () => {
          const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = posts.data;
          this.isPostLoading = false
        }, 1000)
      } catch (e) {
        console.log(e)
      }

    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>

<template>
  <div class="container">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-button @click="openDialog">Создать пост</my-button>
      <my-select :options="sortOptions" v-model="selectedSort"/>
    </div>
    <MyDialog v-model:local-visible="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList
        v-if="!isPostLoading"
        @remove="removePost"
        :posts="posts"
    />
    <div v-else>Идёт загрузка.........</div>
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
.app__btns {
  display: flex;
  justify-content: space-between;
}


</style>
