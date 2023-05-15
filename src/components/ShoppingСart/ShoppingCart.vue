<script setup lang="ts">

import OrderCard from '../UI/OrderCard.vue';
import Slaider from '../UI/Slaider.vue'
import ProductCard from '../UI/ProductCard.vue';
// import InputPromo from '../UI/InputPromo.vue';

const order = [
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
  {
    title: 'Пицца “Четыре сыра” 30 см',
    count: '1 шт.',
    price: '449',
  },
]
</script>

<template>
  <section class="shopping-cart">
    <div class="shopping-cart__order">

      <div class="order">
        <span class="order__info">
          <span class="order__date">10.05.23</span>
          <span class="order__number">№ 1234</span>
        </span>

        <div class="order__container">
          <OrderCard
            v-for="(item, index) in order"
            :key="index"
            :title="item.title"
            :count="item.count"
            :price="item.price"
          />
        </div>

        <div class="order__delivery">
          <span>Доставка</span>
          <span>350 &#8381;</span>
        </div>
        <div class="order__total">
          <strong>Всего</strong>
          <strong>1000 &#8381;</strong>
        </div>
      </div>

      <div class="place-order">

        <div class="sum">
          <div class="sum__total">
            <span>Всего:</span>
            <span>1000 &#8381;</span>
          </div>
          <!-- <InputPromo
            placeholder="ПРОМОКОД"
            btnText="Применить"
          /> -->
        </div>

        <button class="place-order_submit">Оформить заказ</button>
      </div>
      
    </div>

    <Slaider title="Добавьте к заказу">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/> 
    </Slaider>

  </section>
</template>

<style lang="scss" scoped>
.shopping-cart{
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  box-sizing: border-box;
  &__order {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
  &__add-to-order {
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-warning); /* Цвет ползунка скролла */
    }

    &::-webkit-scrollbar-track {
      background-color: var(--color-light-gray);
    }
  }
  &__slaider {
    display: flex;
  }
}

.order {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-order);
  border-radius: 10px;
  padding: 40px;
  width: 750px;
  &__info {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
    margin-bottom: 20px; 
  }
  &__date {
    margin-right: 10px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 40vh;
    padding: 16px 10px;
    border-top: 1px solid #EAEAEA;
    border-bottom: 1px solid #EAEAEA;
    gap: 10px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-warning); /* Цвет ползунка скролла */
    }

    &::-webkit-scrollbar-track {
      background-color: var(--color-light-gray);
    }
  }
  &__delivery {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 10px 0;
  }
  &__delivery span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
  }
  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__total strong {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: var(--color-text-black);
  }

}

.place-order {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 405px;
  &_submit {
    cursor: pointer;
    border: none;
    max-width: 150px;
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background: #FF6161;
    border-radius: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-white);
    transition: transform .2s ease-in-out ;
    &:hover {
      transform: scale(1.1);
    }
  }
}
.sum {
  width: 100%;
  border: 1px solid var(--border-order);
  border-radius: 10px;
  padding: 40px;
  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__total span {
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 27px;
    color: var(--color-text-black);
  }
}

@media (max-width: 1245px) {
  .shopping-cart__order {
    flex-direction: column;
    align-items: center;
  }

  .place-order {
    margin-top: 50px;
  }
}

@media (max-width: 820px) {
  .shopping-cart__order {
    width: 100%;
  }
  .order {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .place-order {
    width: 100%;
  }
  .sum{
    width: 100%;
  }
}
</style>
