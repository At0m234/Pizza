<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
  },
  customStyles: {
    type: Object,
    default: () => ({}),
  },
  click: {
    type: Function,
  },
})
</script>

<template>
  <button class="button" :click="click" :style="customStyles">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  border: none;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  background: var(--color-warning);
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: var(--color-text-white);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
