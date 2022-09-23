import { createApp } from 'vue'
import YDesign from '../../src/index'

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(YDesign).mount('#app')
