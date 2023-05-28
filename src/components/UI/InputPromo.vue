<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
  },
  btnText: {
    type: String,
  },
})

const inputValue = ref('')

function logInputValue() {
  console.log(inputValue.value)
}
</script>

<template>
  <div class="promocode">
    <input
      class="promocode__input"
      type="text"
      v-model="inputValue"
      :placeholder="placeholder"
    />
    <button class="promocode__apply" @click="logInputValue">
      {{ btnText }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.promocode {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  &__input {
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
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: var(--color-warning);
    border: none;
    background-color: transparent;
    color: var(--color-warning);
    cursor: pointer;
  }
}
</style>
