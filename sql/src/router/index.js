import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/views/Home.vue';
import SignIn from '/src/views/SignIn.vue';
import SignUp from '/src/views/SignUp.vue';
import ImageViewer from '/src/views/ImageViewer.vue';
import ImageUpload from '/src/views/ImageUpload.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/images',
    name: 'ImageViewer',
    component: ImageViewer,
  },
  {
    path: '/upload',
    name: 'ImageUpload',
    component: ImageUpload,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

