<script setup lang="ts">
import pizzaImg from '@/assets/icon/404/pizza.svg'
import fiveImg from '@/assets/icon/500/five.svg'
</script>

<template>
  <section class="server-error">
    <span class="server-error__500">
      <fiveImg class="server-error__5" />
      <pizzaImg class="pizza" />
      <pizzaImg class="pizza" />
    </span>
    <span class="server-error__text">Ошибка сервера. Вернуться на
      <router-link to="/" style="text-decoration: none"><span class="server-error__main-page">ГЛАВНУЮ</span></router-link>
    </span>
  </section>
</template>

<style scoped lang="scss">
.server-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 550px;
  }

  &__500 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__5 {
    margin: 0 30px;
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 29px;
    color: var(--color-text-black);
    margin-top: 50px;
    text-align: center;
  }

  &__main-page {
    color: var(--color-warning);
    text-transform: uppercase;
  }

}

.pizza {
  margin: 0 20px;
}

@media (max-width: 640px) {

  .server-error {

    &__500 {
      flex-direction: column;
      justify-content: space-between;
    }

    &__5 {
      flex-direction: column;
      justify-content: space-between;
      margin: 30px 0;
    }

    &__text {
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      margin-top: 25px;
    }
  }

  .pizza {
    margin: 20px 0;
  }
}
</style>
