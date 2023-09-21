import Main from "../pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;