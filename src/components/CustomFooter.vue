<script setup lang="ts">
import {HEAD_CONST} from '@/constants'
import router from '../router';

const menu = [
  {label: 'Пицца', value: 'pizza'},
  {label: 'Вок', value: 'wok'},
  {label: 'Супы', value: 'soup'},
  {label: 'Закуски', value: 'snacks'},
  {label: 'Салаты', value: 'salads'},
  {label: 'Сэндвичи', value: 'sandwiches'},
  {label: 'Соусы', value: 'sauces'},
  {label: 'Десерты', value: 'desserts'},
  {label: 'Напитки', value: 'drinks'},
  {label: 'Магазин', value: 'shop'},
]
const info = [
  {label: 'Доставка и оплата', value: 'delivery'},
  {label: 'О компании', value: 'about'},
  {label: 'Условия обслуживания', value: 'terms'},
  {label: 'Сотрудничество', value: 'partnership'},
]
const personal = [
  {label: 'Вход в личный кабинет', value: 'login'},
  {label: 'Акции и промокоды', value: 'discount'},
  {label: 'Обратная связь', value: 'feedback'},
  {label: 'Отзывы', value: 'reviews'},
]

function onMenuClick(v: any){
  console.log('###### onMenuClick', v)
}

function onPhoneClick(){
  console.log('###### onPhoneClick' )
}

function onInfoClick(v: any) {
  router.push('/' + v);
}

</script>

<template>
  <footer class="footer__wrapper">
    <div class="footer">
      <div class="category category_type_menu">
        <h3 class="category__title">Меню</h3>
        <ul class="category__wrapper category__menu">
          <li
              v-for="item of menu"
              class="category__item"
              :key="item"
              @click="onMenuClick(item.value)">{{item.label}}</li>
        </ul>
      </div>
      <div class="category category_type_info">
        <h3 class="category__title">Информация</h3>
        <ul class="category__wrapper">
          <li
            v-for="item of info"
            class="category__item"
            :key="item"
            @click="onInfoClick(item.value)">
            {{item.label}}
          </li>
        </ul>
      </div>
      <div class="category category_type_personal-account">
        <h3 class="category__title">Личный кабинет</h3>
        <ul class="category__wrapper">
          <li
              v-for="item of personal"
              class="category__item"
              :class="{'category__item_active' : item.value === 'discount'}"
              :key="item"
              @click="onMenuClick(item.value)">{{item.label}}</li>
        </ul>
      </div>
      <div class="category category_type_contacts">
        <h3 class="category__title">Контакты</h3>
        <div class="phone">
          <a class="phone__number" :href="'tel:'+HEAD_CONST.PHONE">
            {{ HEAD_CONST.PHONE }}
          </a>
          <div class="category__socials">
            <a href="https://wa.me/74999999999" target="_blank">
              <img src='../assets/img/footer/whatsUp.svg' alt="whatsUp"/>
            </a>
            <a href="https://instagram.com" target="_blank">
              <img src='../assets/img/footer/instagram.svg' alt="instagram"/>
            </a>
            <a href="https://vk.com" target="_blank">
              <img src='../assets/img/footer/vk.svg' alt="vk"/>
            </a>
          </div>
          
          <span class="phone__feedback" @click="onPhoneClick">Перезвоните мне</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
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
  &__wrapper{
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
    &:hover {
      text-decoration: underline;
    }
    &_active {
      color: var(--color-warning)
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
    transition: opacity 0.3s ease-in-out 0.3s;
    cursor: pointer;
    :hover {
      opacity: .5;
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
    &:hover {
      background-color: transparent;
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