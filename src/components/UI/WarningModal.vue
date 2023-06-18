<script setup lang="ts">
import ExclamationMark from '../../assets/icon/modal/ExclamationMark.svg';

import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
  },
})

</script>

<template>
  <div class="modal">
    <ExclamationMark />
    <p class="modal__text">
      {{ text }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 296px;
  padding: 20px;
  background: var(--color-warning);
  border-radius: 10px;

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: var(--color-text-white);
  }
}
</style>
