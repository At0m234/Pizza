<script setup lang="ts">
import Logo from '@/assets/img/logo_big.svg?component'
import Clock from '@/assets/icon/clock.svg?component'
import Cart from '@/assets/icon/cart.svg?component'
import whatsUp from '@/assets/img/footer/whatsUp.svg?component'
import instagram from '@/assets/img/footer/instagram.svg?component'
import vk from '@/assets/img/footer/vk.svg?component'
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

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
}
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
        <div class="burger-menu">
          <button class="burger-menu__button" @click="toggleMenu"></button>

          <ul class="burger-menu__list" v-show="isMenuOpen">
            <li v-for="item in menu" :key="item.value">
              <a class="burger-menu__link" @click="onMenuClick(item.value)">
                {{ item.label }}
              </a>
            </li>
            <div class="category category_type_contacts">
              <div class="phone">
                <a class="phone__number" :href="'tel:'+HEAD_CONST.PHONE">
                  {{ HEAD_CONST.PHONE }}
                </a>
                <div class="category__socials">
                  <a class="category__socials-link" href="https://wa.me/74999999999" target="_blank">
                    <whatsUp/>
                  </a>
                  <a class="category__socials-link" href="https://instagram.com" target="_blank">
                    <instagram/>
                  </a>
                  <a class="category__socials-link" href="https://vk.com" target="_blank">
                    <vk/>
                  </a>
                </div>
                
              </div>
            </div>
          </ul>

        </div>
        <Logo class="header__logo" @click="onLogoClick"/>
        <cart class="menu__item" @click="onCartClick"/>
      </template>

    </div>
  </header>
</template>

<style lang="scss" scoped>
.burger-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/icon/burger-menu.svg');
  background-repeat: no-repeat;
  padding: 0;
  width: 45px;
  height: 45px;
  &__button {
    position: relative;
    background-color: transparent;
    border: none;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 250px;
    height: 420px;
    list-style: none;
    position: absolute;
    padding: 20px;
    top: 40px;
    left: 0;
    background: #FFFFFF;
    border-radius: 0px 15px 15px 0px;
    z-index: 2;
  }
  &__link {
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    color: var(--color-text-gray);
    margin-bottom: 20px;
    border-bottom: 1px solid #E7E7E7;
  }
}
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
    display: flex;
    max-width: 170px;
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
  display: flex;
  cursor: pointer;
  font-weight: 600;
  transition: transform .2s ease-in-out;
  color: var(--color-icon-gray);

  &:hover {
    color: var(--color-warning);
    transform: scale(1.15);

    svg {
        fill: var(--color-warning);
      }
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

.category {
  margin-top: 35px;
  &__socials {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
    &__socials-link {
    transition: opacity 0.15s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: .5;
    }
  }
}

@media (max-width: 780px) {
    .header {
    justify-content: space-evenly;
  }
}
</style>