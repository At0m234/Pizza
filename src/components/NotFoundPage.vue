<script setup lang="ts">
import pizzaImg from '@/assets/icon/404/pizza.svg';
import fourImg from '@/assets/icon/404/four.svg';

</script>

<template>
  <section class="not-found">
    <div class="not-found__content">

      <span class="not-found__404">
        <fourImg class="not-found__4"/>
        <pizzaImg class="pizza"/>
        <fourImg class="not-found__4"/>
      </span>
      <span class="not-found__text">Страница не найдена. Вернуться на 
        <router-link to="/" style="text-decoration: none;"><span class="not-found__main-page">ГЛАВНУЮ</span></router-link>
      </span>

    </div>
  </section>
</template>

<style scoped lang="scss">
.not-found {
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
  &__404 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: calc(110/234)*50vh;
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
  .not-found__404 {
    flex-direction: column;
    height: 100%;
  }
}
</style>