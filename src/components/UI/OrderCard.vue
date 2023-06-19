<script setup lang="ts">
import { defineProps } from 'vue'
import removeOrder from '@/assets/icon/orderCard/cross.svg'

const props = defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  count: {
    type: String,
  },
  price: {
    type: String,
  },
  history: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="card">
    <div class="card__description">
      <img class="food__image" alt="food" />
      <div class="food__info">
        <h3 class="food__title">{{ props.title }}</h3>
        <h4 class="food__count">{{ props.count }}</h4>
      </div>
    </div>

    <span class="food__price">{{ props.price }} &#8381;</span>
    <removeOrder class="card__remove" :history=" history " v-if="!history"/>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 8px 11px 10px 2px rgba(34, 60, 80, 0.25);
  border-radius: 10px;
  padding: 10px;
  transition: transform 0.1s ease-in-out;
  width: 98%;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &__description {
    display: flex;
    align-items: center;
  }

  &__remove {
    position: absolute;
    width: 26px;
    height: 26px;
    top: 0px;
    right: 10px;
  }
}

.food {
  &__image {
    width: 90px;
    height: 80px;
    background: #d9d9d9;
    margin-right: 25px;
    padding: 5px;
  }

  &__info {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
  }

  &__title {
    margin-bottom: 6px;
  }
}</style>
