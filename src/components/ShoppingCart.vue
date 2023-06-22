<script setup lang="ts">
import Order from '@/components/UI/Order.vue'
import CustomSlaider from '@/components/UI/CustomSlaider.vue'
import ProductCard from '@/components/UI/ProductCard.vue'
import router from '../router'
import SubmitButton from '@/components/UI/SubmitButton.vue'

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

function onOrderClick() {
  router.push('/order-registration')
}
</script>

<template>
  <section class="shopping-cart">
    <div class="shopping-cart__order">
      <div class="order-frame">
        <Order date="10.05.2023" number="№ 1234" :orderList="order" :delivery-summ="350" :total-summ="1000" />
      </div>
      <div class="place-order">
        <div class="sum">
          <div class="sum__total">
            <span>Всего:</span>
            <span>1000 &#8381;</span>
          </div>
        </div>
        <SubmitButton @click="onOrderClick()" text="Оформить заказ" :custom-styles="{ marginTop: '35px' }" />
      </div>
    </div>
    <router-view></router-view>
    <!-- <CustomSlaider title="Добавьте к заказу">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </CustomSlaider> -->
  </section>
</template>

<style lang="scss" scoped>
.shopping-cart {
  display: flex;
  flex-direction: column;
  max-width: 1440px;

  &__order {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }

}

.order-frame {
  border: 1px solid var(--border-order);
  border-radius: 10px;
  width: 65%;
}

.place-order {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
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

@media (max-width: 1024px) {
  .shopping-cart__order {
    flex-direction: column;
    align-items: center;
  }

  .place-order {
    width: 100%;
    margin-top: 50px;
  }

  .order-frame {
    width: 100%;
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

  .sum {
    width: 100%;
  }
}
</style>
