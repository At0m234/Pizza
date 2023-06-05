<script setup lang="ts">
import { defineProps, type PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
  },
  text: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  customStyles: {
    type: Object,
    default: () => ({}),
  },
  click: {
    type: Function as PropType<(payload: MouseEvent) => void>,
  },
})
</script>

<template>
  <button
    class="button"
    @click="click"
    :style="{ background: disabled ? '#E5E5E5' : '#FF6161', ...customStyles }"
    :type="type"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
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
