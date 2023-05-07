<script setup lang="ts">
import Logo from '@/assets/img/logo_big.svg?component'
import Clock from '@/assets/icon/clock.svg?component'
import Cart from '@/assets/icon/cart.svg?component'
import {HEAD_CONST} from '@/constants'
import router from '../router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
  console.log('###### onPhoneClick')
}

function onMenuClick(value: string) {
  router.push('/' + value)
}

function onCartClick() {
  router.push('/shopping-cart')
}

function onLogoClick() {
  router.push('/')
}

const screenWidth = ref(window.innerWidth);

const onResize = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});

</script>

<template>
  <header class="header__wrapper">
    <div class="header">

      <template v-if="screenWidth >= 910">
        <div class="info">
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
        <Logo class="header__logo" @click="onLogoClick"/>
        <div class="menu">
          <span
              v-for="item in menu"
              class="menu__item"
              :key="item.value"
              @click="onMenuClick(item.value)"
          >{{ item.label }}</span>

          <cart class="menu__item" @click="onCartClick"/>
        </div>
      </template>

      <template v-if="screenWidth < 910 && screenWidth > 780" >
        <div class="phone">
            <a class="phone__number" :href="'tel:'+HEAD_CONST.PHONE">
              {{ HEAD_CONST.PHONE }}
            </a>
            <span class="phone__feedback" @click="onPhoneClick">Перезвоните мне</span>
          </div>
          <Logo class="header__logo" @click="onLogoClick"/>
          <div class="menu">
            <span
                v-for="item in menu"
                class="menu__item"
                :key="item.value"
                @click="onMenuClick(item.value)"
            >{{ item.label }}</span>

            <cart class="menu__item" @click="onCartClick"/>
          </div>
      </template> 

      <template v-if="screenWidth < 780 && screenWidth > 660" >
          <Logo class="header__logo" @click="onLogoClick"/>
          <div class="menu">
            <span
                v-for="item in menu"
                class="menu__item"
                :key="item.value"
                @click="onMenuClick(item.value)"
            >{{ item.label }}</span>

            <cart class="menu__item" @click="onCartClick"/>
          </div>
      </template> 

      <template v-if="screenWidth <= 660">
        <select class="burger-menu__select">
          <option 
            v-for="item in menu"
            class="burger-menu__option"
            :key="item.value"
            @click="onMenuClick(item.value)"
          >
            {{ item.label }}
          </option>
          </select>
          <Logo class="header__logo" @click="onLogoClick"/>
          <cart class="menu__item" @click="onCartClick"/>
      </template>
      
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  margin: auto;
  &__wrapper {
    width: 100%;
    height: 100px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  &__logo {
    cursor: pointer;
    transition: transform .2s ease-in-out;
    &:hover {
      color: var(--color-warning);
      transform: scale(1.15);
    }
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
}
.menu {
  display: flex;
  gap: 1rem;
}

.menu__item {
  cursor: pointer;
  font-weight: 600;
  transition: transform .2s ease-in-out;
  &:hover {
    color: var(--color-warning);
    transform: scale(1.15);
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
    transition: color .2s ease-in-out;
    &:hover {
      color: var(--color-warning);
    }
  }

  &__feedback {
    cursor: pointer;
    color: var(--color-warning);
    text-decoration: underline;
  }
}

.burger-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

@media (max-width: 780px) {
    .header {
    justify-content: space-evenly;
  }
}
</style>