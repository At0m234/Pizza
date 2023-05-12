<script setup lang="ts">
import { computed, defineProps, reactive, ref, watch } from 'vue'
import pizzaImg from '@/assets/img/4.jpg'
import { Plus } from '@element-plus/icons-vue'
import ToppingPopover from '@/components/ToppingPopover.vue'

const props = defineProps({
  data: Object,
})
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

const totalPrice = computed(() => {
  const totalPrice =  state.activeSize === 'small' ? state.price : state.priceBig
  return (totalPrice + state.toppingsSum) * state.count
})

function setActive(size: string) {
  state.activeSize = size
}

function onCardClick() {
  console.log('###### onCardClick')
}

function addToCart() {
  console.log('###### addToCart')
}

function updateToppings(val: number) {
  state.toppingsSum = val
  console.log('###### updateToppings', val)
}
</script>

<template>
  <div class="card">
    <img :src="pizzaImg" alt="img" class="image" />
    <h1 class="title" type="info" @click="onCardClick">{{ state.title }}</h1>
    <p class="description">{{ state.description }}</p>

    <topping-popover @update-sum="updateToppings" />

    <el-button-group>
      <el-button
        class="button"
        :type="state.activeSize === 'small' ? 'info' : 'text'"
        @click.stop="setActive('small')"
        >{{ state.size.small }}
      </el-button>

      <el-button
        class="button"
        :type="state.activeSize === 'big' ? 'info' : 'text'"
        @click.stop="setActive('big')"
        >{{ state.size.big }}
      </el-button>
    </el-button-group>
    <div class="bottom">
      <p class="weight">{{ state.weight }} гр.</p>
      <b class="price">{{ totalPrice }} ₽</b>
      <el-input-number class="count" v-model="state.count" :min="1" :max="99" />
      <div></div>
    </div>
    <el-button
      type="danger"
      :icon="Plus"
      plain
      @click="addToCart"
      class="to-cart"
      >В корзину
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.card {
  max-width: 302px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.title {
  font-size: 18px;
  font-weight: 700;
  border-bottom: #e0ded8 solid 1px;
  cursor: pointer;
}

.description {
  font-size: 14px;
}

.image {
}

.button {
  padding-left: 30px;
  padding-right: 30px;
}

.bottom {
  display: grid;
  grid-template-areas: 'weight count' 'price count';
  column-gap: 15px;
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

.count {
  grid-area: count;
  height: 30px;
  place-self: center;
}

.to-cart {
  width: 85%;
}
</style>
