import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          // icon: 'mdi:home',
        },
      },
      {
        path: 'project',
        name: 'project',
        component: () => import('@/views/project/index.vue'),
        meta: {
          title: '项目',
          // icon: 'mdi:project',
        },
      },
      {
        path: 'lab',
        name: 'lab',
        component: () => import('@/views/laboratory/index.vue'),
        meta: {
          title: '实验室',
          // icon: 'mdi:lab',
        },
      },
      {
        path: 'note',
        name: 'note',
        component: () => import('@/views/note/index.vue'),
        meta: {
          title: '笔记',
          // icon: 'mdi:note',
        },
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: '关于我',
          // icon: 'mdi:about',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
