import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js";
import store from "./store/store.js";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import axios from 'axios'
import VueAxios from 'vue-axios'

import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify, {iconfont: 'mdi'}).use(router).use(VueAxios, axios).use(store).mount('#app')