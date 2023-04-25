<script setup lang="ts">
import pizzaImg from '@/assets/img/404/pizza.svg';
import fourImg from '@/assets/img/404/four.svg';

</script>

<template>
  <section class="not-found">
    <div class="not-found__content">

      <span class="not-found__404">
        <fourImg/>
        <pizzaImg class="pizza"/>
        <fourImg/>
      </span>
      <span class="not-found__text">Страница не найдена. Вернуться на 
        <router-link to="/"><span class="not-found__main-page">ГЛАВНУЮ</span></router-link>
      </span>

    </div>
  </section>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color-white);
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
  &__404 {
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
  .not-found__text {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    margin-top: 25px;
  }
}
</style>