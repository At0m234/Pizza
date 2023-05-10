<script setup lang="ts">

import OrderCard from '../UI/OrderCard.vue';

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
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
          />
          <OrderCard
            title="Пицца “Четыре сыра” 30 см"
            count="1 шт."
            price="449"
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
          <div class="sum__discounts">
            <input class="sum__promo" type="text" placeholder="ПРОМОКОД"/>
            <button class="sum__apply">Применить</button>
          </div>
        </div>

        <button class="place-order_submit">Оформить заказ</button>
      </div>
      
    </div>

    <div class="shopping-cart__add-to-order">
      <div class="shopping-cart__slaider">
        
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
.shopping-cart{
  &__order {
    display: flex;
    justify-content: space-between;
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
  box-sizing: border-box;
  border: 1px solid var(--border-order);
  border-radius: 10px;
  padding: 40px;
  width: 70%;
  max-width: 918px;
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
  max-width: 405px;
  width: 30%;
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
  height: 15vh;
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
  &__discounts {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  &__promo {
    border: none;
    background: var(--bg-input-order);
    border-radius: 5px;
    padding: 7px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: var(--order-placeholder);
    }
  }
  &__apply {
    border: none;
    background-color: transparent;
    color: var(--color-warning);
    cursor: pointer;
  }
}

@media (max-width: 900px) {

}
</style>
