import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import notFoundPage from '../views/notFoundPage.vue'
import serverError from '../views/serverError.vue'
import aboutCompany from '../components/aboutCompany.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: aboutCompany,
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
