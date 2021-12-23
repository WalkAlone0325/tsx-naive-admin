import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'
// import './permission'

// 通用字体
// import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import '@/assets/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
