import {createStore} from "vuex";
import {postModule} from "./postModule.js";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        post: postModule
    }
})