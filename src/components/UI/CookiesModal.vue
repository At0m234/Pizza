<script setup lang="ts">
import SubmitButton from './SubmitButton.vue'

const handleSubmit = () => {
  console.log('cookie приняты')
}
</script>

<template>
  <div class="modal">
    <h2 class="modal__title">Мы используем cookie</h2>
    <p class="modal__text">Во время посещение сайта вы соглашаетесь с тем, что мы обрабатываем ваши персональные данные
      с использованием метрических программ.</p>
    <SubmitButton text="Понятно, спасибо" :customStyles="{ width: '170px' }" type="submit" :disabled="false"
      @click="handleSubmit" />
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 390px;
  padding: 15px;
  background: #FFFFFF;
  border-radius: 20px 20px 0px 0px;
  z-index: 10;

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: var(--color-text-black);
  }

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-top: 10px;
    margin-bottom: 15px;
    color: var(--color-text-black);
  }
}
</style>
