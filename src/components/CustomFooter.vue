<script setup lang="ts">
import { HEAD_CONST } from '@/constants'
import router from '../router'
import { computed, ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
// import whatsUp from '@/assets/icon/footer/whatsUp.svg?component'
// import instagram from '@/assets/icon/footer/instagram.svg?component'
// import vk from '@/assets/icon/footer/vk.svg?component'
import LoginModal from './UI/LoginModal.vue'
import CallMeModal from './UI/CallMeModal.vue'

const loginModalVisible = ref(false)
const сallMeModalVisible = ref(false)

const globalStore = useGlobalStore()
const selectedLabel = computed(() => {
  return globalStore.state.selectedMenuItem
})

const menu = [
  { label: 'Пицца', value: 'pizza' },
  { label: 'Вок', value: 'wok' },
  { label: 'Супы', value: 'soup' },
  { label: 'Закуски', value: 'snacks' },
  { label: 'Салаты', value: 'salads' },
  { label: 'Сэндвичи', value: 'sandwiches' },
  { label: 'Соусы', value: 'sauces' },
  { label: 'Десерты', value: 'desserts' },
  { label: 'Напитки', value: 'drinks' },
  { label: 'Магазин', value: 'shop' },
]
const info = [
  { label: 'Доставка и оплата', value: 'delivery' },
  { label: 'О компании', value: 'about' },
  { label: 'Условия обслуживания', value: 'terms' },
  { label: 'Сотрудничество', value: 'partnership' },
]
const personal = [
  { label: 'Вход в личный кабинет', value: 'login' },
  { label: 'Акции и промокоды', value: 'discounts' },
  { label: 'Обратная связь', value: 'feedback' },
  { label: 'Отзывы', value: 'reviews' },
]

// function onMenuClick(value: any) {
//   console.log('###### onMenuClick', value)
//   selectedLabel.value = value
//   router.push('/' + value)
// }

function showLoginModal() {
  loginModalVisible.value = true
}

function showCallMeModal() {
  сallMeModalVisible.value = true
}

function onInfoClick(value: any) {
  globalStore.state.selectedMenuItem = value
  router.push('/' + value)
}

</script>

<template>
  <footer class="footer__wrapper">
    <div class="footer">
      <div class="category category_type_menu">
        <h3 class="category__title">Меню</h3>
        <ul class="category__wrapper category__menu">
          <li v-for="item of menu" class="category__item" :class="{ selected: selectedLabel === item.value }"
            :key="item.value" @click="onInfoClick(item.value)">
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="category category_type_info">
        <h3 class="category__title">Информация</h3>
        <ul class="category__wrapper">
          <li v-for="item of info" class="category__item" :key="item.value" @click="onInfoClick(item.value)"
            :class="{ selected: selectedLabel === item.value }">
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="category category_type_personal-account">
        <h3 class="category__title">Личный кабинет</h3>
        <ul class="category__wrapper">
          <li v-for="item in personal" class="category__item" :key="item.value"
            @click="item.label === 'Вход в личный кабинет' ? showLoginModal() : onInfoClick(item.value)"
            :class="{ selected: selectedLabel === item.value }">
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="category category_type_contacts">
        <h3 class="category__title">Контакты</h3>
        <div class="phone">
          <a class="phone__number" :href="'tel:' + HEAD_CONST.PHONE">
            {{ HEAD_CONST.PHONE }}
          </a>
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

          <span class="phone__feedback" @click="showCallMeModal">Перезвоните мне</span>
        </div>
      </div>
    </div>
    <transition name="modal">
      <LoginModal v-if="loginModalVisible" @close="loginModalVisible = false" />
    </transition>
    <transition name="modal">
      <CallMeModal v-if="сallMeModalVisible" @close="сallMeModalVisible = false" />
    </transition>
  </footer>
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

.footer {
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: auto;

  &__wrapper {
    border-top: 1px solid var(--color-light-gray);
    padding: 30px;
  }
}

.category {
  &__wrapper {
    padding: 0;
    display: grid;
    gap: 15px;
  }

  &__title {
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 30px;
  }

  &__item {
    color: var(--color-text-gray);
    list-style: none;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      color: var(--color-warning);
      transform: scale(1.15);
    }
  }

  &__menu {
    display: grid;
    grid-template-columns: minmax(80px, 120px) 1fr;
  }

  &__socials {
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

.phone {
  display: flex;
  flex-direction: column;

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
    margin-top: 20px;
  }
}

.selected {
  color: var(--color-warning);
  transform: scale(1.15);
}

@media (max-width: 1000px) {
  .category__menu {
    grid-template-columns: minmax(80px, 80px) 1fr;
  }
}

@media (max-width: 760px) {
  .category_type_menu {
    display: none;
  }

  .category__menu {
    grid-template-columns: minmax(60px, 60px) 1fr;
  }
}

@media (max-width: 580px) {
  .category_type_personal-account {
    display: none;
  }
}

@media (max-width: 420px) {
  .category_type_contacts {
    display: none;
  }
}
</style>
