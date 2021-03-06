import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import app from './app';
import database from './database';
import game from './game';
import word from './word';
import system from './system';
import worker from './worker';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/app',
    component: () => import('@layouts/App.vue'), // 懒加载组件
    children: app,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@layouts/Login.vue'), // 懒加载组件
  },
  database,
  game,
  word,
  system,
  worker,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
