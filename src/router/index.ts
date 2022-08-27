import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'top',
    component: () => import('@/page/TopPage.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/page/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/page/AboutPage.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/page/HistoryPage.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/page/ProductsPage.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
