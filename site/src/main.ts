import { createApp } from 'vue'
import { createPinia } from 'pinia'
import YDesign from '../../src/index'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia()).use(router).use(YDesign).mount('#app')
