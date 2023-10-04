<script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import axios from "axios";

export default {
  name: 'App',
  components: {PostList, PostForm},
  data: () => ({
    dialogVisible: false,
    posts: [],
    isPostLoading: false,
    searchQuery: '',
    page: 1,
    limit: 10,
    totalPages: null,
    selectedSort: '',
    sortOptions: [
      {name: 'По названию', value: 'title'},
      {name: 'По описанию', value: 'body'}
    ]
  }),
  computed: {
    getPostsBySortedOptions() {
      return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    },
    getPostsBySearchQuery() {
      return this.getPostsBySortedOptions.filter(x => x.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }

  },
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
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(posts.headers['x-total-count'] / this.limit)
        this.t
        this.posts = posts.data;
      } catch (e) {
        alert(e)
      } finally {
        this.isPostLoading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(posts.headers['x-total-count'] / this.limit)
        this.t
        this.posts = [...this.posts, ...posts.data]
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
  <div>
    <h1>Страница с постами</h1>
    <MyInput v-focus v-model="searchQuery"/>
    <div class="app__btns">
      <my-button @click="openDialog">Создать пост</my-button>
      <my-select
          :options="sortOptions"
          v-model="selectedSort"/>
    </div>
    <MyDialog v-model:local-visible="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList
        v-if="!isPostLoading"
        @remove="removePost"
        :posts="getPostsBySearchQuery"
    />
    <div v-else>Идёт загрузка.........</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<style scoped>


.app__btns {
  display: flex;
  justify-content: space-between;
}

.observer {
  height: 30px;
  background-color: teal;
}

</style>
