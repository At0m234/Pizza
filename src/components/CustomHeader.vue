<script setup lang="ts">
import Logo from '@/assets/img/logo_big.svg'
import Clock from '@/assets/icon/clock.svg'
import Cart from '@/assets/icon/cart.svg'
// import whatsUp from '@/assets/img/footer/whatsUp.svg?component'
// import instagram from '@/assets/img/footer/instagram.svg?component'
// import vk from '@/assets/img/footer/vk.svg?component'
import { HEAD_CONST } from '@/constants'
import router from '../router'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useGlobalStore } from '@/stores/global'
import LoginModal from './UI/LoginModal.vue'
import CallMeModal from './UI/CallMeModal.vue'

const loginModalVisible = ref(false)
const сallMeModalVisible = ref(false)
const globalStore = useGlobalStore()
const screenWidth = ref(window.innerWidth)
const isMenuOpen = ref(false)
const selectedItem = ref('')
const selectedLabel = computed(() => {
  return globalStore.state.selectedMenuItem
})

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

const menuConfig = [
  {
    label: 'Пицца',
    value: 'pizza',
  },
  {
    label: 'Вок',
    value: 'wok',
  },
  {
    label: 'Супы',
    value: 'soup',
  },
  {
    label: 'Закуски',
    value: 'snack',
  },
  {
    label: 'Салаты',
    value: 'salad',
  },
  {
    label: 'Сэндвичи',
    value: 'sandwich',
  },
  {
    label: 'Соусы',
    value: 'souse',
  },
  {
    label: 'Десерты',
    value: 'dessert',
  },
  {
    label: 'Напитки',
    value: 'drinks',
  },
  {
    label: 'Магазин',
    value: 'shop',
  },
]

function showCallMeModal() {
  сallMeModalVisible.value = true
}

function onCartClick() {
  router.push('/shopping-cart')
}

function onLogoClick() {
  router.push('/')
}

const onResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function onMenuClick(value: string) {
  globalStore.state.selectedMenuItem = value
  router.push('/' + value)
  isMenuOpen.value = false
}

function onMenuSelect(value: string) {
  console.log(value)
  router.push('/' + value)
  isMenuOpen.value = false
}

function showLoginModal() {
  loginModalVisible.value = true
}
</script>

<template>
  <header class="header__wrapper">
    <div class="header">
      <template v-if="screenWidth >= 910">
        <div class="info">
          <div class="info__delivery">
            <clock />
            {{ HEAD_CONST.DELIVERY_TIME }}
          </div>
          <div class="info__time">
            c {{ HEAD_CONST.TIME_START }} до {{ HEAD_CONST.TIME_FINISH }}
          </div>
        </div>
        <div class="phone">
          <a class="phone__number" :href="'tel:' + HEAD_CONST.PHONE">
            {{ HEAD_CONST.PHONE }}
          </a>
          <span class="phone__feedback" @click="showCallMeModal">Перезвоните мне</span>
        </div>
        <Logo class="header__logo" @click="onLogoClick" />
        <div class="menu">
          <span v-for="item in menu" class="menu__item" :class="{ selected: selectedLabel === item.value }"
            :key="item.value" @click="
              item.label === 'Вход' ? showLoginModal() : onMenuClick(item.value)
              ">{{ item.label }}</span>

          <cart class="menu__item" @click="onCartClick" />
        </div>
      </template>

      <template v-if="screenWidth < 910 && screenWidth > 780">
        <div class="phone">
          <a class="phone__number" :href="'tel:' + HEAD_CONST.PHONE">
            {{ HEAD_CONST.PHONE }}
          </a>
          <span class="phone__feedback" @click="showCallMeModal">Перезвоните мне</span>
        </div>
        <Logo class="header__logo" @click="onLogoClick" />
        <div class="menu">
          <span v-for="item in menu" class="menu__item" :class="{ selected: selectedLabel === item.value }"
            :key="item.value" @click="
              item.label === 'Вход' ? showLoginModal() : onMenuClick(item.value)
              ">{{ item.label }}</span>
          <cart class="menu__item" @click="onCartClick" />
        </div>
      </template>

      <template v-if="screenWidth < 780 && screenWidth > 660">
        <Logo class="header__logo" @click="onLogoClick" />
        <div class="menu">
          <span v-for="item in menu" class="menu__item" :class="{ selected: selectedLabel === item.value }"
            :key="item.value" @click="
              item.label === 'Вход' ? showLoginModal() : onMenuClick(item.value)
              ">{{ item.label }}</span>

          <cart class="menu__item" @click="onCartClick" />
        </div>
      </template>

      <template v-if="screenWidth <= 660">
        <button class="burger-menu" @click="toggleMenu"></button>
        <div class="burger-menu__list" v-bind:class="{ hidden: !isMenuOpen }">
          <span v-for="item in menu" :key="item.value" class="burger-menu__link">
            <a @click="
              item.label === 'Вход' ? showLoginModal() : onMenuClick(item.value)
              ">
              {{ item.label }}
            </a>

            <select class="burger-menu__select" v-if="item.value === 'menu'" v-model="selectedItem"
              @change="onMenuSelect(selectedItem)">
              <option class="burger-menu__option" v-for="item in menuConfig" :key="item.value" :value="item.value">
                <a>
                  {{ item.label }}
                </a>
              </option>
            </select>
          </span>

          <div class="burger-menu__phone">
            <a class="burger-menu__phone_number" :href="'tel:' + HEAD_CONST.PHONE">
              {{ HEAD_CONST.PHONE }}
            </a>
            <span class="phone__feedback" @click="showCallMeModal">Перезвоните мне</span>
            <!-- <div class="category__socials">
              <a class="category__socials-link" href="https://wa.me/74999999999" target="_blank">
                <whatsUp/>
              </a>
              <a class="category__socials-link" href="https://instagram.com" target="_blank">
                <instagram/>
              </a>
              <a class="category__socials-link" href="https://vk.com" target="_blank">
                <vk/>
              </a>
            </div> -->
          </div>
        </div>
        <Logo class="header__logo" @click="onLogoClick" />
        <cart class="menu__item" @click="onCartClick" />
      </template>
    </div>
    <transition name="modal">
      <LoginModal v-if="loginModalVisible" @close="loginModalVisible = false" />
    </transition>
    <transition name="modal">
      <CallMeModal v-if="сallMeModalVisible" @close="сallMeModalVisible = false" />
    </transition>
  </header>
</template>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.burger-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-image: url('../assets/icon/burger-menu.svg');
  background-repeat: no-repeat;
  padding: 0;
  width: 45px;
  height: 45px;
  position: relative;
  background-color: transparent;
  border: none;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    list-style: none;
    position: absolute;
    padding: 20px;
    top: 75px;
    background: #fff;
    z-index: 2;
  }

  &__link {
    display: flex;
    min-width: 100%;
    border-bottom: 1px solid #e7e7e7;
    transition: transform 0.2s ease-in-out;
    padding: 0 20px;

    &:hover {
      color: var(--color-warning);
      // transform: scale(1.15);
    }
  }

  &__link a {
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    color: var(--color-text-gray);
    margin: 20px 0;
  }

  &__phone {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
  }

  &__phone_number {
    font-size: 20px;
    font-weight: bold;
    color: var(--color-text);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--color-warning);
    }
  }

  &__select {
    display: flex;
    margin-left: auto;
    border: none;
    z-index: 3;
    border-radius: 15px;

    &:focus {
      outline: none;
      border: none;
    }
  }

  &__option {
    display: flex;
    background: #ffffff;
    width: 50%;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    color: var(--color-text-gray);
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: var(--color-warning);
    }

    &:focus {
      background-color: transparent;
      color: var(--color-warning);
    }

    &:checked {
      background-color: transparent;
      color: var(--color-warning);
    }
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
    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  }

  &__logo {
    display: flex;
    max-width: 170px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

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
  transition: transform 0.2s ease-in-out;
  color: var(--color-icon-gray);

  &:hover {
    color: var(--color-warning);
    transform: scale(1.15);

    svg {
      fill: var(--color-warning);
    }
  }

  &:active {
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
    transition: color 0.2s ease-in-out;

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
      opacity: 0.5;
    }
  }
}

.hidden {
  display: none;
}

.selected {
  color: var(--color-warning);
  transform: scale(1.15);
}

@media (max-width: 780px) {
  .header {
    justify-content: space-evenly;
  }
}
</style>
