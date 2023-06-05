<script setup lang="ts">
import { ref } from 'vue'
import closeModalCross from '@/assets/icon/orderCard/cross.svg'
import succeessImage from '@/assets/icon/modal/Success.svg'
import CustomInput from './CustomInput.vue'
import CustomCheckbox from './CustomCheckbox.vue'
import PinCodeField from './PinCodeField.vue'
import SubmitButton from './SubmitButton.vue'
import router from '@/router'

const phoneInputValue = ref('')
const sendCode = ref(false)
const success = ref(false)

const sendForCode = () => {
  if (phoneInputValue.value !== '') {
    sendCode.value = true
  }
}

const changePhoneNumber = () => {
  sendCode.value = false
}

const submitPinCode = () => {
  success.value = true
}

const redirectToPersonalAccount = () => {
  router.push('/personal-account')
}
</script>

<template>
  <div class="modal">
    <form class="modal__content" @submit.prevent="sendForCode">
      <closeModalCross class="modal__cross" @click="$emit('close')" />
      <template v-if="!sendCode">
        <h2 class="modal__title">Введите номер телефона</h2>
        <CustomInput
          placeholder="+7 (99Х) ХХХ-ХХ-ХХ"
          type="number"
          :customStyles="{ marginBottom: '30px', width: '230px' }"
          :required="true"
          v-model="phoneInputValue"
        />
        <CustomCheckbox
          name="politics"
          label="Согласен с пользовательским соглашением и политикой
            конфиденциальности"
          :required="true"
        />
        <CustomCheckbox
          name="advertisement"
          label="Согласен получать рекламные уведомления"
        />

        <SubmitButton
          text="Отправить код"
          :customStyles="{ width: '170px' }"
          type="submit"
          :disabled="false"
        />
      </template>

      <template v-else>
        <h2 class="modal__title">Введите код</h2>
        <h3 class="modal__success">
          Код отправлен по SMS на номер: +7 (915) 488-66-66
        </h3>

        <SubmitButton
          text="Изменить"
          :customStyles="{ backgroundColor: 'transparent', color: '#FF6161' }"
          type="submit"
          :disabled="false"
          @click="changePhoneNumber"
        />
        <PinCodeField/>

        <SubmitButton
          text="Подтвердить"
          type="submit"
          :disabled="false"
          @click="submitPinCode"
        />
      </template>

      <template v-if="success">
        <succeessImage class="modal__image"/>
        <h2 class="modal__success">Вы успешно авторизовались</h2>
        <SubmitButton
          text="Перейти в Личный Кабинет"
          type="submit"
          :disabled="false"
          @click="redirectToPersonalAccount"
        />
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
    text-align: center;
    box-sizing: border-box;
    width: 380px;
    height: 380px;
    background: #ffffff;
    border-radius: 20px;
    padding: 65px;
  }

  &__cross {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: var(--color-text-black);
    margin-bottom: 25px;
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
