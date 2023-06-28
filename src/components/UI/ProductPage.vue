<script setup lang="ts">
import pizzaImg from '@/assets/img/4.jpg'
import { Plus } from '@element-plus/icons-vue'
import Slider from '@/components/UI/CustomSlaider.vue'
import ProductCard from '@/components/UI/ProductCard.vue'
import ToppingPopover from '@/components/ToppingPopover.vue'
import { computed, reactive } from 'vue'

const state = reactive({
  title: 'Пицца Цезарь',
  description:
    'Пицца Цезарь - это классическая пицца с топпингом, напоминающим по вкусу салат Цезарь.',
  size: {
    small: '20см',
    big: '35см',
  },
  activeSize: 'small',
  topping: {
    sum: 0,
    added: [],
    list: [
      {
        name: 'Хапапеньо',
        value: 0,
      },
      {
        name: 'Сыр',
        value: 0,
      },
      {
        name: 'Бекон',
        value: 0,
      },
      {
        name: 'Грибы',
        value: 0,
      },
    ],
  },
  price: 500,
  priceBig: 730,
  count: 1,
  weight: 300,
  toppingsSum: 0,
})

function setActive(size: string) {
  state.activeSize = size
};

function updateToppings(val: number) {
  state.toppingsSum = val
  console.log('###### updateToppings', val)
}

function addToCart() {
  console.log('###### addToCart')
}

const totalPrice = computed(() => {
  const totalPrice = state.activeSize === 'small' ? state.price : state.priceBig
  return (totalPrice + state.toppingsSum) * state.count
})
</script>

<template>
  <section class="product-page">
    <img class="image" :src="pizzaImg" alt="img" />

    <div class="info">
      <h1 class="title">Пицца Цезарь
      </h1>

      <div class="nutritional-value">
        <h2 class="subtitle">Пищевая ценность на 100 г.</h2>
        <div class="nutritional-value__item">
          <span class="text">Энергетическая ценность</span>
          <span class="text">241 ккал</span>
        </div>
        <div class="nutritional-value__item">
          <span class="text">Белки</span>
          <span class="text">10.4 г.</span>
        </div>
        <div class="nutritional-value__item">
          <span class="text">Жиры</span>
          <span class="text">12.8 г.</span>
        </div>
        <div class="nutritional-value__item">
          <span class="text">Угглеводы</span>
          <span class="text">21.2 г.</span>
        </div>
      </div>

      <h2 class="subtitle">Срок годности и условия хранения:</h2>
      <p class="text">24 часа при t° от +2°C до +6°C</p>

      <el-button-group class="size">
        <el-button class="button" :type="state.activeSize === 'small' ? 'info' : 'text'" @click.stop="setActive('small')">
          {{ state.size.small }}
        </el-button>

        <el-button class="button" :type="state.activeSize === 'big' ? 'info' : 'text'" @click.stop="setActive('big')">{{
          state.size.big }}
        </el-button>
      </el-button-group>

      <topping-popover @update-sum="updateToppings" />

      <div class="bottom">
        <p class="weight">{{ state.weight }} гр.</p>
        <b class="price">{{ totalPrice }} ₽</b>
        <el-input-number class="count" :min="1" :max="99" />
      </div>
      <el-button type="danger" :icon="Plus" plain @click="addToCart" class="to-cart">В корзину
      </el-button>
    </div>

    <div class="description">
      <h2 class="subtitle">Пицца Цезарь
      </h2>
      <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum esse placeat
        suscipit, fugiat labore tempore repellendus cum maxime at sed magni perferendis aperiam molestias facere?
        Praesentium maxime hic enim quam inventore consequuntur odit, saepe rem velit itaque, totam architecto suscipit
        deserunt mollitia perspiciatis? Doloremque, sit voluptas voluptatum quia ex laudantium non quae porro eos
        veritatis? Voluptatem, velit quod molestiae impedit quasi tempore ipsum vitae, possimus tempora quos quae dolorum
        atque perferendis accusamus eius? Adipisci vel odio sunt cumque distinctio voluptas corrupti magni vero, quos
        accusamus nihil culpa earum rem tempore architecto doloremque. Quos sed illo consequuntur eius laborum quas
        maiores!</p>
    </div>

    <Slider class="slider-add-to-order" title="Добавьте к заказу">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Slider>

  </section>
</template>

<style lang="scss" scoped>
.product-page {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 40px;
}

.image {
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}

.title {
  font-size: 30px;
  font-weight: 700;
  color: var(--color-text-black);
  margin-bottom: 20px;
  align-self: start;
}
.subtitle {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-black);
  margin-bottom: 10px;
  align-self: start;
}
.text {
  font-size: 16px;
  line-height: 30px;
  color: var(--color-text-black);
  align-self: start;
}

.nutritional-value {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}

.size {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.button {
  padding: 0 30px;
}

.bottom {
  display: grid;
  grid-template-areas: 'weight count' 'price count';
  column-gap: 15px;
  margin: 20px 0;
}

.weight {
  color: #8b8781;
  font-size: 12px;
  grid-area: weight;
}

.price {
  grid-area: price;
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
}

.to-cart {
  justify-content: center;
  justify-self: center;
  align-self: center;
  width: 85%;
}

.description {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
}

.slider-add-to-order {
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
}

@media (max-width: 1024px) {
.product-page {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 20px;
}

.image {
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.description {
  grid-column: 1 / span 1;
  grid-row: 3 / span 1;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
}

.slider-add-to-order {
  grid-column: 1 / span 1;
  grid-row: 4 / span 1;
}
}
</style>
