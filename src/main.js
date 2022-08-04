import { createApp } from 'vue'
import App from './App.vue'
import main_router from "./router/main_router"
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(main_router).use(pinia).mount('#app')
