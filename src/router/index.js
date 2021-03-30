import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue'),
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "about" */ '../views/Create.vue'),
    props: true
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tag.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
