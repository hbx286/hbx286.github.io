import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useThemeStore } from '@/stores/theme'

import '@/assets/styles/index.css'
import '@/assets/styles/scrollbar.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// 初始化主题 store
const themeStore = useThemeStore()
themeStore.init()

app.use(router)

app.mount('#app')
