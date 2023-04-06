<script setup lang="ts">
import { computed, reactive } from 'vue'
import { Plus, Minus } from '@element-plus/icons-vue'

const state = reactive({
  visible: false,
  list: [
    {
      name: 'Хапапеньо',
      title: 'Хапапеньо',
      count: 0,
      price: 49,
    },
    {
      name: 'Сыр',
      title: 'Сыр',
      count: 0,
      price: 49,
    },
    {
      name: 'Бекон',
      title: 'Бекон',
      count: 0,
      price: 49,
    },
    {
      name: 'Грибы',
      title: 'Грибы',
      count: 0,
      price: 20,
    },
    {
      name: 'Семга',
      title: 'Грибы',
      count: 0,
      price: 150,
    },
  ],
})

const emits = defineEmits(['update-sum'])

const sum = computed(() => {
  let result = 0
  state.list.forEach((item) => {
    result = result + item.count * item.price
  })
  emits('update-sum', result)
  return result
})

const totalCount = computed(() => {
  let result = 0
  state.list.forEach((item) => {
    result = result + item.count
  })
  return result
})

function onCloseTag() {
  state.list.map((item) => {
    item.count = 0
  })
  emits('update-sum', sum.value)
}

function addTopping(index: number) {
  state.list[index].count++
}

function removeTopping(index: number) {
  state.list[index].count--
}
</script>

<template>
  <div class="topping">
    Ингридиенты:
    <el-tag
      type="success"
      class="tag"
      closable
      @close="onCloseTag"
      disable-transitions
    >
      + {{ totalCount }}
    </el-tag>
    {{ sum }} ₽

    <el-popover
        placement="right"
        trigger="click"
        width="220px"
        :show-arrow="false"
    >
      <template #reference>
        <el-button :icon="Plus" circle size="small" @click="state.visible = true"/>
      </template>
      <div class="topping-popover">
        <div
          class="topping__item"
          v-for="(item, index) of state.list"
          :key="item.name"
        >
          {{ item.name }}
          <div class="count">
            <el-button
              v-show="item.count > 0"
              class="topping__button"
              :icon="Minus"
              circle
              size="small"
              @click="removeTopping(index)"
            />

            <div v-show="item.count > 0" class="number">
              {{ item.count }}
            </div>
            <el-button
              class="topping__button"
              :icon="Plus"
              circle
              size="small"
              @click="addTopping(index)"
            />
            <div class="price">{{ item.price }} ₽</div>
          </div>
        </div>
        <div class="submit">
<!--          <el-button class="submit__btn" >Применить закрыть</el-button>-->
        </div>
      </div>
    </el-popover>
  </div>
</template>

<style lang="scss" scoped>

.topping {
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  gap: 10px;

  &__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;
    gap: 8px;
  }

  &__button {
    border: none;
  }
}

.count {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

.number {
  display: flex;
  justify-content: center;
}

.submit {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  &__btn {

  }
}

.price {
  font-weight: bold;
  min-width: 50px;
}

.tag {
  font-weight: 500;
}
</style>
