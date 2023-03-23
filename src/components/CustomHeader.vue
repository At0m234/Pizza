<script setup lang="ts">
import Logo from '@/assets/img/logo_big.svg?component'
import Clock from '@/assets/icon/clock.svg?component'
import Chevron from '@/assets/icon/chevron.svg?component'
import Cart from '@/assets/icon/cart.svg?component'
import {HEAD_CONST} from '@/constants'

const menu = [
  {
    label: 'Меню',
    value: 'menu',
  },
  {
    label: 'Акции',
    value: 'discounts',
  },
  {
    label: 'О нас',
    value: 'about',
  },
  {
    label: 'Доставка',
    value: 'delivery',
  },
  {
    label: 'Вход',
    value: 'login',
  },
]

function onPhoneClick() {
  console.log('###### onPhoneClick',)
}

function onMenuClick(value) {
  console.log('###### onMenuClick', value)
}

function onCartClick() {
  console.log('###### onCartClick',)
}

</script>

<template>
  <header class="header__wrapper">
    <div class="header">
      <div class="info">
        <!--        <div>{{ HEAD_CONST.CITY }}-->
        <!--          <chevron/>-->
        <!--        </div>-->
        <div class="info__delivery">
          <clock/>
          {{ HEAD_CONST.DELIVERY_TIME }}
        </div>
        <div class="info__time">
          c {{ HEAD_CONST.TIME_START }} до {{ HEAD_CONST.TIME_FINISH }}
        </div>
      </div>
      <div class="phone">
        <a class="phone__number" :href="'tel:'+HEAD_CONST.PHONE">
          {{ HEAD_CONST.PHONE }}
        </a>
        <span class="phone__feedback" @click="onPhoneClick">Перезвоните мне</span>
      </div>
      <Logo/>
      <div class="menu">
        <span
            v-for="item in menu"
            class="menu__item"
            :key="item.value"
            @click="onMenuClick(item)"
        >{{ item.label }}</span>

        <cart class="menu__item" @click="onCartClick"/>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>



.header {
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: auto;
  &__wrapper {
      width: 100%;
      height: 100px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
}

.info {
  &__delivery {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__time {
    margin-left: 8px;
  }
  //@media screen and (max-width: 900px) {
  //  display: none;
  //}
}

.menu {
  display: flex;
  gap: 1rem;
}

.menu__item {
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: var(--color-warning);
  }
}

.phone {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__number {
    font-size: 20px;
    font-weight: bold;
    color: var(--color-text);
    &:hover {
      background-color: transparent;
    }
  }

  &__feedback {
    cursor: pointer;
    color: var(--color-warning);
    text-decoration: underline;
  }
}
</style>