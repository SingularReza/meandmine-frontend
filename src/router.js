import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/article/:id',
      name: 'blog',
      component: () => import('./views/Blog.vue'),
      props: true,
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('./views/Editor.vue'),
    },
    {
      path: '/blog',
      name: '/blog',
      component: () => import('./views/List.vue'),
    }
  ],
});
