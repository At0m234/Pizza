<script setup lang="ts">
import {HEAD_CONST} from '@/constants'

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

function onMenuClick(v){
  console.log('###### onMenuClick', v)
}

function onPhoneClick(){
  console.log('###### onPhoneClick', )
}

</script>

<template>
  <footer class="footer__wrapper">
    <div class="footer">
      <div class="category">
        <h3 class="category__title">Меню</h3>
        <ul class="category__wrapper category__menu">
          <li
              v-for="item of menu"
              class="category__item"
              :key="item"
              @click="onMenuClick(item.value)">{{item.label}}</li>
        </ul>
      </div>
      <div class="category">
        <h3 class="category__title">Информация</h3>
        <ul class="category__wrapper">
          <li
              v-for="item of info"
              class="category__item"
              :key="item"
              @click="onMenuClick(item.value)">{{item.label}}</li>
        </ul>
      </div>
      <div class="category">
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
      <div class="category">
        <h3 class="category__title">Контакты</h3>
        <div class="phone">
          <a class="phone__number" :href="'tel:'+HEAD_CONST.PHONE">
            {{ HEAD_CONST.PHONE }}
          </a>
          <span class="phone__feedback" @click="onPhoneClick">Перезвоните мне</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
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
    font-weight: 600;
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
    }
  }

  &__feedback {
    cursor: pointer;
    color: var(--color-warning);
    text-decoration: underline;
    margin-left: 20px;
  }
}
</style>