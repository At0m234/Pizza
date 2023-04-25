import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import notFoundPage from '../views/notFoundPage.vue'
import serverError from '../views/serverError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/500',
      name: 'serverError',
      component: serverError,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFoundPage',
      component: notFoundPage,
    },
  ],
})

export default router
