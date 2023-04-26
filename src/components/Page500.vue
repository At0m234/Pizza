<script setup lang="ts">
import pizzaImg from '@/assets/img/404/pizza.svg';
import fiveImg from '@/assets/img/500/five.svg';

</script>

<template>
  <section class="server-error">
    <div class="server-error__content">

      <span class="server-error__500">
        <fiveImg/>
        <pizzaImg class="pizza"/>
        <pizzaImg />
      </span>
      <span class="server-error__text">Ошибка сервера. Вернуться на 
        <router-link to="/"><span class="server-error__main-page">ГЛАВНУЮ</span></router-link>
      </span>

    </div>
  </section>
</template>

<style scoped lang="scss">
.server-error {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
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
  .server-error__text {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    margin-top: 25px;
  }
}
</style>