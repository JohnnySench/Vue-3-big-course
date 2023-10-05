import axios from "axios";

export const postModule = {
    state: () => ({
        dialogVisible: false,
        posts: [],
        isPostLoading: false,
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: null,
        selectedSort: null,
        sortOptions: [
            {name: 'По названию', value: 'title'},
            {name: 'По описанию', value: 'body'}
        ]
    }),
    getters: {
        GET_POSTS_BY_SORTED_OPTIONS(state) {
            return [...state.posts].sort((a, b) => a[state.selectedSort]?.localeCompare(b[state.selectedSort]))
        },
        GET_POSTS_BY_SEARCH_QUERY(state, getters) {
            return getters.GET_POSTS_BY_SORTED_OPTIONS.filter(x => x.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        SET_IS_POST_LOADING(state, load) {
            state.isPostLoading = load
        },
        SET_SEARCH_QUERY(state, search) {
            state.searchQuery = search
        },
        SET_PAGE(state, page) {
            state.page = page
        },
        SET_TOTAL_PAGES(state, totalPages) {
            state.totalPages = totalPages
        },
        SET_SELECTED_SORT(state, selectedSort) {
            state.selectedSort = selectedSort
        },
    },
    actions: {
        async INIT_POSTS({commit, state}) {
            try {
                commit('SET_IS_POST_LOADING', true)
                const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('SET_TOTAL_PAGES', Math.ceil(posts.headers['x-total-count'] / state.limit))
                commit('SET_POSTS', posts.data)
            } catch (e) {
                alert(e)
            } finally {
                commit('SET_IS_POST_LOADING', false)
            }
        },
        async INIT_MORE_POSTS({commit, state}) {
            try {
                commit('SET_PAGE', state.page + 1)
                const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('SET_TOTAL_PAGES', Math.ceil(posts.headers['x-total-count'] / state.limit))
                commit('SET_POSTS', [...state.posts, ...posts.data])

            } catch (e) {
                console.log(e)
            }
        }
    },
    namespaced: true
}