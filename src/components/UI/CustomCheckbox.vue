<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  customStyles: {
    type: Object,
    default: () => ({}),
  },
  inputStyles: {
    type: Object,
    default: () => ({}),
  },
  labelStyles: {
    type: Object,
    default: () => ({}),
  },
  name: {
    type: String,
  },
  label: {
    type: String,
  },
  required: {
    type: Boolean,
  },

})
</script>

<template>
  <div class="checkbox__container" :style="customStyles">
    <input class="checkbox__input" type="checkbox" :name="name" :required="required" style="inputStyles"/>
    <label class="checkbox__label" :for="name" style="labelStyles"
      >{{ label }}</label
    >
  </div>
</template>

<style lang="scss" scoped>
.checkbox {

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    margin-bottom: 30px;
  }

  /* Скрываем оригинальный флажок */
  &__input {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    /* Создаем стилизованный флажок */
    &:before {
      content: '';
      display: inline-block;
      width: 30px;
      height: 30px;
      background-color: var(--bg-input-order);
    }

    /* Создаем стилизованную галочку */
    &:checked::before {
      background-image: url('@/assets/icon/modal/checkMark.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  &__label {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: var(--color-text-gray);
    margin-left: 45px;
  }
}
</style>
