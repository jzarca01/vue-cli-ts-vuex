import Vue from 'vue';
import Router from 'vue-router';

import Home from 'Views/Home.vue';
import About from 'Views/About.vue';
import Table from 'Views/Table.vue';
import Form from 'Views/Form.vue';
import Error404 from 'Views/Error404.vue';

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
    {
      path: '/form/:id',
      name: 'form',
      component: Form,
      props: true,
    },
    { path: '/404',
      component: Error404,
      alias: '*',
    },
  ],
});
