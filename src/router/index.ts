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
    path: '/portrait-design',
    name: 'Portrait design',
    component: () => import(/* webpackChunkName: "portrait-design" */ '../views/Portrait-design.vue'),
  },
  {
    path: '/watercolor-design',
    name: 'Watercolor design',
    component: () => import(/* webpackChunkName: "watercolor-design" */ '../views/Watercolor-design.vue'),
  },
  {
    path: '/cuddly-design',
    name: 'Cuddly design',
    component: () => import(/* webpackChunkName: "cuddly-design" */ '../views/Cuddly-design.vue'),
  },
  {
    path: '/shopping-cart',
    name: 'Shopping cart',
    component: () => import(/* webpackChunkName: "shopping-cart" */ '../views/Shopping-cart.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
