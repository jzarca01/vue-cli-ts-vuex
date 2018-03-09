import Vue from 'vue';
import Router from 'vue-router';
import Home from 'Views/Home.vue';
import About from 'Views/About.vue';
import Table from 'Views/Table.vue';

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
      component: About,
    },
    {
      path: '/table',
      name: 'table',
      component: Table,
    },
  ],
});
