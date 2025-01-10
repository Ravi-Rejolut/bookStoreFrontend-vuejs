import './assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import router from '@/router'
import {createPinia} from 'pinia'
import App from './App.vue'

const app=createApp(App)
app.use(VueQueryPlugin)

const pinia=createPinia()
app.use(pinia)

app.use(router)

app.mount('#app')
