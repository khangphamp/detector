import { createRouter,createWebHistory } from 'vue-router';

import Home from './view/index.vue';
import Video from './view/video.vue';

const routes = [
    { path: '/home', component: Home },
    { path: '/', component: Video },
  ]
  
  const router =createRouter({
    history:createWebHistory(),
    routes,
  })

export default router;
