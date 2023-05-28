<script setup lang="ts">
import router from '@/router';
import DiscountCard from './UI/DiscountCard.vue'

const discountCards = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    title: 'Подарок 1',
    subtitle: 'Большая пицца в подарок!',
    btnText: 'Подробнее',
    promo: 'FIESTA',
    text: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis sem sed magna fringilla, eu congue massa consequat. Maecenas ut ornare velit. Donec vel quam mi. Sed tellus leo, pharetra in pulvinar eget, accumsan sed erat. Vestibulum dictum rhoncus nibh id blandit. Nulla posuere, dolor eu hendrerit laoreet, felis nisl ultrices lectus, ut tincidunt turpis odio ut dui. Ut tempor efficitur ligula mollis facilisis. Duis tempus semper enim in ornare. ',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    title: 'Подарок 2',
    subtitle: 'Большая пицца в подарок!',
    btnText: 'Подробнее',
    promo: 'FIESTA',
    text: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis sem sed magna fringilla, eu congue massa consequat. Maecenas ut ornare velit. Donec vel quam mi. Sed tellus leo, pharetra in pulvinar eget, accumsan sed erat. Vestibulum dictum rhoncus nibh id blandit. Nulla posuere, dolor eu hendrerit laoreet, felis nisl ultrices lectus, ut tincidunt turpis odio ut dui. Ut tempor efficitur ligula mollis facilisis. ',
  },
]

const redirectToDiscountCard = (id) => {  
  router.push({
    name: 'DiscountCard',
    params: { id: id },
  })
}

</script>

<template>
  <section class="discounts">
    <h1 class="discounts__title">Акции и спецпредложения</h1>
    <div class="discounts__container">
      <div v-for="card in discountCards" :key="card.id">
        <DiscountCard
          :id="card.id"
          :imageUrl="card.imageUrl"
          :title="card.title"
          :subtitle="card.subtitle"
          :btnText="card.btnText"
          :text="card.text"
          :promo="card.promo"
          @click="redirectToDiscountCard(card.id)"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.discounts {
  position: relative;
  display: flex;
  flex-direction: column;
  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: var(--color-text-black);
    text-transform: uppercase;
    margin: 40px 0;
  }
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
}

@media (max-width: 900px) {
  .discounts {
    align-items: center;
  }
}

@media (max-width: 440px) {
  .discounts__title {
    text-align: center;
  }
}
</style>
