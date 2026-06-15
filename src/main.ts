import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/styles/index.css'
import '@/assets/styles/scrollbar.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// 初始化主题 store (自动通过 watch immediate: true 完成)
// 主题 store 会在组件中按需导入

app.use(router)

app.mount('#app')
