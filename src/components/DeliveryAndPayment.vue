<script setup lang="ts">

import shipping from '@/assets/img/delivery/shipping.svg?component'
import clock from '@/assets/img/delivery/clock.svg?component'
import card from '@/assets/img/delivery/card.svg?component'
import pizza from '@/assets/img/delivery/pizza.svg?component'

const delivery = [
  {
    id: 1,
    icon: shipping,
    title: 'Бесплатная доставка',
    text: 'Бесплатная доставка по Москве от 500 рублей',
  },
  {
    id: 2,
    icon: clock,
    title: '40 минут',
    text: 'Наше среднее время доставки составляет 40 минут, ваш заказ точно прибудет горячим',
  },
  {
    id: 3,
    icon: card,
    title: 'Три способа оплаты',
    text: 'Оплата заказа возможна наличными или банковской картой при получении, а также картой на сайте',
  },
  {
    id: 4,
    icon: pizza,
    title: 'График работы',
    text: 'Мы принимаем и доставляем заказы с 08:00 до 05:00',
  },
] 

</script>

<template>
  <section class="delivery">

    <div class="delivery__content">

      <h1 class="delivery__title">ДОСТАВКА</h1>

      <div class="delivery__terms">
        <div
          v-for="item of delivery"
          class="delivery__term"
          :key="item.id"
        >
          <component :is="item.icon" class="term__image"/>
          <h2 class="term__title">{{ item.title }}</h2>
          <p class="term__text">{{ item.text }}</p>
        </div>
      </div>

      <div class="delivery__territory">
        <h2 class="delivery__subtitle">Территория обслуживания</h2>
        <iframe class="delivery__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A67d8c4810053dd58db0a67c65b52d9a4aacc98b1214a9c6532662df398d269c9&amp;source=constructor"  frameborder="0"></iframe>
      </div>

    </div>

  </section>
</template>

<style lang="scss" scoped>
.delivery {
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 100px 0;
  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: var(--color-text-black); 
  }
  &__terms {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin: 35px 0 50px 0;
  }
  &__term {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 220px;
  }
  &__territory {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--color-text-black); 
    margin-bottom: 35px;
    align-self: start;
  }
  &__map {
    display: flex;
    width:  85%;
    height: calc(450px/1155px) * 100vh;
  }
}

.term {
  &__image {
    width: 50px;
    height: 50px;
  }
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: var(--color-warning);
    margin: 35px 0 15px 0;
  }
  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: var(--color-text-gray);   
  }
}

@media (max-width: 520px) {
  .delivery {
    &__title {
      justify-self: center;
      align-self: center;
    }
    &__terms {
      justify-content: center;
    }
    &__term {
      margin-bottom: 30px;
    }
    &__subtitle {
      align-self: center;
      text-align: center;
    }
  }
}
</style>
