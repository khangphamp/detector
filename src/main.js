import { createApp } from 'vue'
import App from './App.vue';
import router from './route';

import './assets/tailwind.css'

createApp(App).use(router).mount('#app')
