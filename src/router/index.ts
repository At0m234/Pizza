import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import View404 from '../views/404View.vue'
import View500 from '../views/500View.vue'
import AboutCompanyView from '../views/AboutCompanyView.vue'
import DeliveryView from '../views/DeliveryView.vue'
import DiscountView from '../views/DiscountView.vue'
import ShoppingСartView from '../views/ShoppingСartView.vue'
import DiscountCard from '../components/UI/DiscountCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: DeliveryView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutCompanyView,
    },
    {
      path: '/shopping-cart',
      name: 'ShoppingСart',
      component: ShoppingСartView,
    },
    {
      path: '/discounts',
      name: 'discount',
      component: DiscountView,
    },
    {
      path: '/discounts/:idCard',
      name: 'DiscountCard',
      component: DiscountCard,
      props: true,
    },
    {
      path: '/500',
      name: 'serverError',
      component: View500,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFoundPage',
      component: View404,
    },
  ],
})

export default router
