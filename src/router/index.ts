import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/customer-opinions',
    name: 'Customer-opinions',
    component: () => import(/* webpackChunkName: "Customer-opinions" */ '../views/Customer-opinions.vue'),
  },
  {
    path: '/order-design',
    name: 'Design now',
    component: () => import(/* webpackChunkName: "Order-design" */ '../views/Order-design.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
