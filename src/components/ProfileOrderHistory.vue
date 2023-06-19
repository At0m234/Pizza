<script setup lang="ts">
import Order from '@/components/UI/Order.vue'

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

</script>

<template>
  <div class="order-list">
    <Order date="10.05.2023" number="№ 1234" :orderList="order" :delivery-summ="350" :total-summ="1000" :history="true" />
    <Order date="10.05.2023" number="№ 1234" :orderList="order1" :delivery-summ="350" :total-summ="1000"
      :history="true" />
    <Order date="10.05.2023" number="№ 1234" :orderList="order2" :delivery-summ="350" :total-summ="1000"
      :history="true" />
  </div>
</template>

<style lang="scss" scoped>
.order-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 650px;
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
</style>
