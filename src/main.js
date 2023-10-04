import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js";
import store from "./store/store.js";
import component from './components/UI'
import Vdirectives from './directives/index.js'
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

const app = createApp(App)

// Глобальная регистрация компонентов UI
component.forEach(component => {
    app.component(component.name, component)
})

Vdirectives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.use(vuetify, {iconfont: 'mdi'}).use(router).use(VueAxios, axios).use(store).mount('#app')