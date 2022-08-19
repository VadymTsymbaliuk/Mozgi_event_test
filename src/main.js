import { createApp } from 'vue'
import App from './App.vue'

import 'animate.css'

import './assets/css/style.css'
import router from "@/router";



createApp(App).use(router).mount('#app')
