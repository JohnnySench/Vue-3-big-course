import Main from "../pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "../pages/PostPage.vue";
import About from "../pages/About.vue";
import PostDescription from "../pages/PostDescription.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/posts/:id',
        component: PostDescription
    },
    {
        path: '/about',
        component: About
    },
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;