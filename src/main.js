import './assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import router from '@/router'
import {createPinia} from 'pinia'
import App from './App.vue'
import { useAuthStore } from './stores/auth'

const app=createApp(App)
app.use(VueQueryPlugin)

const pinia=createPinia()
app.use(pinia)

app.use(router)

const authStore=useAuthStore();
authStore.initializeAuth();

app.mount('#app')
