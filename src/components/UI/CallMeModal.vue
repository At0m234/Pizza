<script setup lang="ts">
import { ref } from 'vue'
import closeModalCross from '@/assets/icon/orderCard/cross.svg'
import succeessImage from '@/assets/icon/modal/Success.svg'
import CustomInput from './CustomInput.vue'
import SubmitButton from './SubmitButton.vue'

const nameInputValue = ref('')
const phoneInputValue = ref('')
const isFormSubmitted = ref(false)

const handleSubmit = () => {
  if (nameInputValue.value !== '' && phoneInputValue.value !== '') {
    isFormSubmitted.value = true
  }
}
</script>

<template>
  <div class="modal">
    <form class="modal__content" @submit.prevent="handleSubmit">
      <closeModalCross class="modal__cross" @click="$emit('close')" />
      <template v-if="!isFormSubmitted">
        <CustomInput
          placeholder="Ваше имя"
          type="text"
          :customStyles="{ marginTop: '35px', width: '100%' }"
          :required="true"
          v-model="nameInputValue"
        />
        <CustomInput
          placeholder="Телефон"
          type="number"
          :customStyles="{ width: '100%' }"
          :required="true"
          v-model="phoneInputValue"
        />
        <h4 class="modal__text">
          Наш оператор свяжется с вами для уточнение деталей заказа.
        </h4>
        <SubmitButton
          text="Перезвоните мне"
          :customStyles="{ width: '170px' }"
          type="submit"
          :disabled="false"
        />
      </template>
      <template v-else>
        <succeessImage class="modal__image"/>
        <h2 class="modal__success">Ваш запрос отправлен.</h2>
      </template>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 300px;
    height: 310px;
    background: #ffffff;
    border-radius: 20px;
    padding: 20px;
  }

  &__cross {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  &__text {
    margin: 15px auto 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: var(--color-text-gray);
  }

  &__image {
    width: 50px;
    height: 50px;
  }

  &__success {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
    margin-top: 20px;
  }
}
</style>
