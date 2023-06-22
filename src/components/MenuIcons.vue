<script setup lang="ts">
// @ts-nocheck
import pizza from '@/assets/icon/menu/pizza.svg?component'
import wok from '@/assets/icon/menu/wok.svg?component'
import soup from '@/assets/icon/menu/soup.svg?component'
import snack from '@/assets/icon/menu/snack.svg?component'
import salad from '@/assets/icon/menu/salad.svg?component'
import sandwich from '@/assets/icon/menu/sandwich.svg?component'
import souse from '@/assets/icon/menu/souse.svg?component'
import dessert from '@/assets/icon/menu/dessert.svg?component'
import drinks from '@/assets/icon/menu/drink.svg?component'
import shop from '@/assets/icon/menu/shop.svg?component'

const menuConfig = [
  {
    label: 'Пицца',
    icon: pizza,
    value: 'pizza',
  },
  {
    label: 'Вок',
    icon: wok,
    value: 'wok',
  },
  {
    label: 'Супы',
    icon: soup,
    value: 'soup',
  },
  {
    label: 'Закуски',
    icon: snack,
    value: 'snack',
  },
  {
    label: 'Салаты',
    icon: salad,
    value: 'salad',
  },
  {
    label: 'Сэндвичи',
    icon: sandwich,
    value: 'sandwich',
  },
  {
    label: 'Соусы',
    icon: souse,
    value: 'souse',
  },
  {
    label: 'Десерты',
    icon: dessert,
    value: 'dessert',
  },
  {
    label: 'Напитки',
    icon: drinks,
    value: 'drinks',
  },
  {
    label: 'Магазин',
    icon: shop,
    value: 'shop',
  },
]

function onMenuItemClick(value: string) {
  console.log('###### onMenuItemClick', value)
}
</script>

<template>
  <div class="menu">
    <div v-for="item of menuConfig" :key="item.label" class="menu__item" @click="onMenuItemClick(item.value)">
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
