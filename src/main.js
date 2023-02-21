import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/style.css'

import flickity from "@toneflix-code/flickity-vue";

createApp(App).use(flickity).use(router).mount('#app')