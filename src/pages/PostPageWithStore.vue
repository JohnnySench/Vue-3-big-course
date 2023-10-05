<script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import axios from "axios";
import {mapGetters, mapActions, mapState, mapMutations} from "vuex";

export default {
  name: 'App',
  components: {PostList, PostForm},
  data: () => ({
    dialogVisible: false
  }),
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: "post/GET_POSTS_BY_SORTED_OPTIONS",
      sortedBySearch: "post/GET_POSTS_BY_SEARCH_QUERY"
    })
  },
  methods: {
    ...mapActions({
      loadMorePosts: 'post/INIT_MORE_POSTS',
      fetchPosts: "post/INIT_POSTS"
    }),
    ...mapMutations({
      setSearchQuery: "post/SET_SEARCH_QUERY",
      setPage: "post/SET_PAGE",
      setSelectedSort: "post/SET_SELECTED_SORT"
    }),
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

  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput
        v-focus
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
    />
    <div class="app__btns">
      <my-button
          @click="openDialog">
        Создать пост
      </my-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>
    <MyDialog v-model:local-visible="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList
        v-if="!isPostLoading"
        @remove="removePost"
        :posts="sortedBySearch"
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
