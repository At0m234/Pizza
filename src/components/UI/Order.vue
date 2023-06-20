<script setup lang="ts">
import repeat from '@/assets/icon/Profile/repeat.svg'
import OrderCard from '@/components/UI/OrderCard.vue'
import { defineProps } from 'vue'

const props = defineProps({
  date: {
    type: String,
  },
  number: {
    type: String,
  },
  orderList: {
    type: Array,
  },
  item: {
    type: Array as () => { title: string, count: string, price: string }[],
  },
  deliverySumm: {
    type: Number,
  },
  totalSumm: {
    type: Number,
  },
  history: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="order">
    <div class="order__info">
      <div class="order__details">
        <span class="order__date">{{ date }}</span>
        <span class="order__number">{{ number }}</span>
      </div>
      <div v-if="history" class="order__repeat">
        <repeat />
      </div>
    </div>

    <div class="order__container" :class="{ scrollbar: !history }">
      <OrderCard v-for="(item, index) in orderList" :key="index" :title="item.title" :count="item.count"
        :price="item.price" :history="history" />
    </div>

    <div class="order__delivery">
      <span>Доставка</span>
      <span>{{ deliverySumm }} &#8381;</span>
    </div>
    <div class="order__total">
      <strong>Всего</strong>
      <strong>{{ totalSumm }} &#8381;</strong>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
    margin-bottom: 20px;
  }

  &__details {
    display: flex;
  }

  &__date {
    margin-right: 10px;
  }

  &__repeat {
    width: 18px;
    height: 18px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.55);
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    padding: 16px 10px;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    gap: 10px;

  }

  &__delivery {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 10px 0;
  }

  &__delivery span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
  }

  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__total strong {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: var(--color-text-black);
  }
}

.scrollbar {
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

@media (max-width: 820px) {
  .order {
    width: 100%;
  }
}

@media (max-width: 580px) {
  .order {
    padding: 20px;
  }
}
</style>
