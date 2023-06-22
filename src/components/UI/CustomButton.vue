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
  active: {
    type: Boolean,
  },
})
</script>

<template>
  <button
    class="button"
    :click="click"
    :style="customStyles"
    :class="{ active }"
    :active="active"
  >
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  // width: 160px;
  padding: 15px 5px;
  cursor: pointer;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--color-text-black);
  &.active {
    background: var(--color-yellow);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
}
</style>
