<script setup lang="ts">
// @ts-nocheck
import pizza from '@/assets/icon/menu/pizza.svg?component'
import wok from '@/assets/icon/menu/wok.svg?component'
import soup from '@/assets/icon/menu/soup.svg?component'
import snack from '@/assets/icon/menu/snack.svg?component'
import salad from '@/assets/icon/menu/salad.svg?component'
import sandwich from '@/assets/icon/menu/sandwich.svg?component'
import sauces from '@/assets/icon/menu/sauces.svg?component'
import desserts from '@/assets/icon/menu/desserts.svg?component'
import drinks from '@/assets/icon/menu/drink.svg?component'
import shop from '@/assets/icon/menu/shop.svg?component'
import { useGlobalStore } from '@/stores/global'
import type { Component } from 'vue'

const store = useGlobalStore()

const icons: Record<string, Component> = {
  pizza,
  wok,
  soup,
  snack,
  sandwich,
  sauces,
  desserts,
  drinks,
  shop,
  salad,
}

const menuConfig = store.state.categories.map((item) => {
  return {
    label: item.label,
    value: item.value,
    icon: icons[item.icon] || '',
  }
})
function onMenuItemClick(value: string) {
  console.log('###### onMenuItemClick', value)
}
</script>

<template>
  <div class="menu">
    <div
      v-for="item of menuConfig"
      :key="item.label"
      class="menu__item"
      @click="onMenuItemClick(item.value)"
    >
      <component :is="item.icon" />
      <span class="menu__label">{{ item.label }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  padding: 50px;
  width: 100%;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 10px;
    cursor: pointer;
    color: var(--color-icon-gray);

    &:hover {
      color: var(--color-warning);

      svg {
        fill: var(--color-warning);
      }
    }
  }

  &__label {
    font-weight: 600;
    font-size: 14px;
  }
}

@media (max-width: 1024px) {
  .menu {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 25px;
  }
}
</style>
