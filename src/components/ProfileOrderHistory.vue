<script setup lang="ts">
import Order from '@/components/UI/Order.vue'
import router from '../router/'

const hasOrders = true

const order = [
  {
    title: 'Пицца “Четыре сыра” 20 см',
    count: '2 шт.',
    price: '222',
  },
  {
    title: 'Пицца “Четыре сыра” 20 см',
    count: '2 шт.',
    price: '222',
  },
  {
    title: 'Пицца “Четыре сыра” 20 см',
    count: '2 шт.',
    price: '222',
  },
  {
    title: 'Пицца “Четыре сыра” 20 см',
    count: '2 шт.',
    price: '222',
  },
  {
    title: 'Пицца “Четыре сыра” 20 см',
    count: '2 шт.',
    price: '222',
  },
  {
    title: 'Пицца “Четыре сыра” 20 см',
    count: '2 шт.',
    price: '222',
  },
]
const order1 = [
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '3 шт.',
    price: '333',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '3 шт.',
    price: '333',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '3 шт.',
    price: '333',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '3 шт.',
    price: '333',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '3 шт.',
    price: '333',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '3 шт.',
    price: '333',
  },
]
const order2 = [
  {
    title: 'Пицца “Четыре сыра” 40 см',
    count: '4 шт.',
    price: '444',
  },
  {
    title: 'Пицца “Четыре сыра” 40 см',
    count: '4 шт.',
    price: '444',
  },
  {
    title: 'Пицца “Четыре сыра” 40 см',
    count: '4 шт.',
    price: '444',
  },
  {
    title: 'Пицца “Четыре сыра” 40 см',
    count: '4 шт.',
    price: '444',
  },
  {
    title: 'Пицца “Четыре сыра” 40 см',
    count: '4 шт.',
    price: '444',
  },
  {
    title: 'Пицца “Четыре сыра” 40 см',
    count: '4 шт.',
    price: '444',
  },
]

function goToMenu() {
  router.push('/main')
}
</script>

<template>
  <template v-if="hasOrders">
    <div class="order-list scroll">
      <Order date="10.05.2023" number="№ 1111" :orderList="order" :delivery-summ="350" :total-summ="1000"
        :history="true" />
      <Order date="10.05.2023" number="№ 2222" :orderList="order1" :delivery-summ="350" :total-summ="1000"
        :history="true" />
      <Order date="10.05.2023" number="№ 3333" :orderList="order2" :delivery-summ="350" :total-summ="1000"
        :history="true" />
    </div>
  </template>
  <template v-else>
    <div class="no-orders">
      <h2 class="no-orders__title">У вас пока нет ни одного заказа. Перейти в <span @click="goToMenu">МЕНЮ</span></h2>
    </div>
  </template>
</template>

<style lang="scss" scoped>
.order-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 550px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-warning);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
}

.no-orders {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;

  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);

    & span {
      cursor: pointer;
      color: var(--color-warning);

      &:hover {
        transform: scale(1.25);
      }
    }
  }
}
</style>
