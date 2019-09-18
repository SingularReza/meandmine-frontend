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
      component: Home,
    },
    {
      path: '/article/:id',
      name: 'article',
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
      name: 'blog',
      component: () => import('./views/List.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/List.vue'),
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('./views/List.vue'),
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('./views/List.vue'),
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      var position = {
        selector: to.hash,
      }
      return position
    }
  }

});
