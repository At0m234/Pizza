<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  id: {
    type: String,
  },
  customStyles: {
    type: Object,
    default: () => ({}),
  },
  name: {
    type: String,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  required: {
    type: Boolean,
  },
  type: {
    type: String,
  },
  value: {
    type: String,
  },
  maxlength: {
    type: Number,
  },
})
</script>

<template>
  <div class="custom-input" :id="id" :style="customStyles">
    <label
      :class="[
        'custom-input__label',
        { 'font-bold': required, 'font-regular': !required },
      ]"
      :for="name"
      >{{ label }}</label
    >
    <input
      class="custom-input__input"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :type="type"
      :value="value"
      :maxlength="maxlength"
    />
  </div>
</template>

<style lang="scss" scoped>
.custom-input {
  display: flex;
  flex-direction: column;
  &__label {
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
    margin-bottom: 10px;
  }
  &__input {
    padding: 14px 20px;
    background: var(--bg-input-order);
    border-radius: 5px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);

    &:hover {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #FF6161;
    }

    &:focus {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #FF6161;
    }

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: var(--order-placeholder);
    }

  }
}
.font-bold {
  font-weight: 700;
}

.font-regular {
  font-weight: 400;
}

input[type="number"]::-webkit-inner-spin-button {
  appearance: none;
  display: none;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background-image: url(@/assets/icon/orderRegistration/calendar.svg);
  width: 20px;
  height: 22px;
  cursor: pointer;
}

input[type="time"]::-webkit-calendar-picker-indicator {
  background-image: url(@/assets/icon/orderRegistration/clock.svg);
  width: 20px;
  height: 20px;
  cursor: pointer;
}

</style>
