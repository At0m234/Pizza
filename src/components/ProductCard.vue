<script setup lang="ts">
import {defineProps, reactive, ref, watch} from 'vue'
import pizzaImg from '@/assets/img/4.jpg'
import {Plus} from '@element-plus/icons-vue'

const props = defineProps({
  data: Object,
})
const state = reactive({
  title: 'Пицца Цезарь',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquam asperiores atque, culpa doloremque\n' +
      '    eaque fuga fugiat fugit hic, inventore iure natus praesentium quaerat quas quia reprehenderit sint sunt.',
  size: {
    small: '20см',
    big: '35см',
  },
  activeSize: 'small',
  topping: {
    sum: 0,
    added: [],
  },
  price: 500,
  count: 1,
  weight: 300,
})

function setActive(size: string) {
  state.activeSize = size;
}

function onCardClick() {
  console.log('###### onCardClick',)
}

function onCloseTag() {
  state.topping.sum = 0
  console.log('###### onCloseTag',)
}

function addTopping(){
  state.topping.sum = state.topping.sum + 1
  console.log('###### addToping', )
}
function addToCart(){
  console.log('###### addToCart', )
}
</script>

<template>
  <div class="card">
    <img :src="pizzaImg" alt="img" class="image"/>
    <h1 class="title" type="info" @click="onCardClick">{{ state.title }}</h1>
    <p class="description">{{ state.description }}</p>
    <div class="topping">Ингридиенты:
      <el-tag
          type="success"
          closable
          @close="onCloseTag"
          disable-transitions
      > {{state.topping.sum}}
      </el-tag>
      <el-button :icon="Plus" circle size="small" @click="addTopping"/>
    </div>
    <el-button-group>
      <el-button
          class="button"
          :type="state.activeSize === 'small' ? 'info' : '' "
          @click.stop="setActive('small')"
      >{{ state.size.small }}
      </el-button>
      <el-button
          class="button"
          :type="state.activeSize === 'big' ? 'info' : '' "
          @click.stop="setActive('big')"
      >{{ state.size.big }}
      </el-button>
    </el-button-group>
    <div class="bottom">
      <p class="weight">{{state.weight}} гр.</p>
      <b class="price">{{state.price}} ₽</b>
      <el-input-number class="count" v-model="state.count" :min="1" :max="99" @change="handleChange" />
      <div>

      </div>
    </div>
    <el-button
        type="danger"
        :icon="Plus"
        plain
        @click="addToCart"
        class="to-cart"

    >В корзину</el-button>
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid palevioletred;
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
}

.image {

}

.button {
  padding-left: 30px;
  padding-right: 30px;
}

.topping {
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  gap: 10px;
}

.bottom{
 display: grid;
 grid-template-areas: 'weight count' 'price count';
  column-gap: 15px;
}

.weight{
  color: #8b8781;
  font-size: 12px;
  grid-area: weight;
}
.price{
  grid-area: price;
  font-weight: 700;
  font-size: 28px;
}
.count{
  grid-area: count;
  height: 30px;
  place-self: center;
}
.to-cart{
  width: 85%;
}
</style>