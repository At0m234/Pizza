<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from '@/components/UI/CustomInput.vue'
import SubmitButton from '@/components/UI/SubmitButton.vue'
import arrowBack from '@/assets/icon/orderRegistration/arrowBack.svg'
import CustomButton from '@/components/UI/CustomButton.vue'
import router from '@/router'

const deliveryButtons = ref([
  { text: 'Доставить сейчас', index: 0, active: true },
  { text: 'Доставить ко времени', index: 1, active: false },
])

const paymentButtons = ref([
  { text: 'Наличными курьеру', active: true, index: 0 },
  { text: 'Картой на сайте', active: false, index: 1 },
  { text: 'Картой курьеру', active: false, index: 2 },
])

const confirmationButtons = ref([
  { text: 'Звонок оператора', active: true, index: 0 },
  { text: 'По SMS', active: false, index: 1 },
])

function handleSubmitOrder() {
  console.log('Заказано!')
}

function goBack() {
  router.back()
}

interface Button {
  text: string
  index: number
  active: boolean
}

function toggleButtonActive(buttons: Button[], index: number) {
  buttons.forEach((button, i) => {
    button.active = i === index // Устанавливаем активное состояние только для выбранной кнопки
  })
}
</script>

<template>
  <section class="order">
    <h1 class="order__title">Оформление заказа</h1>
    <form class="order__form">
      <!-- КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ КОМУ -->
      <div class="order__block">
        <h2 class="order__subtitle" style="margin: 0">КОМУ ВЕЗЕМ</h2>
        <CustomInput
          name="name"
          label="Имя *"
          :required="true"
          placeholder="Введите имя"
          :customStyles="{ width: '320px', marginTop: '35px' }"
          type="text"
        />
        <CustomInput
          name="phone"
          label="Телефон *"
          :required="true"
          placeholder="+7 999 999 99 99"
          :customStyles="{ width: '320px', marginTop: '35px' }"
          type="tel"
        />
      </div>
      <!-- КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА КУДА   -->
      <div class="order__block">
        <h2 class="order__subtitle">КУДА ВЕЗЕМ</h2>
        <CustomInput
          name="city"
          label="Город"
          :required="true"
          value="Тула"
          :customStyles="{ width: '320px' }"
          type="text"
        />
        <div class="street">
          <CustomInput
            name="street"
            label="Улица *"
            placeholder="Введите название улицы"
            :required="true"
            :customStyles="{
              width: '320px',
              marginRight: '15px',
              marginTop: '35px',
            }"
            type="text"
          />
          <div class="street__house">
            <CustomInput
              name="house"
              label="Дом *"
              :required="true"
              :customStyles="{
                width: '70px',
                margin: '0 4px 0 0',
                marginTop: '35px',
              }"
              type="text"
            />
            <CustomInput
              name="building"
              label="Корпус"
              :customStyles="{
                width: '70px',
                margin: '0 4px',
                marginTop: '35px',
              }"
              type="text"
            />
            <CustomInput
              name="flat"
              label="Кв/офис "
              :customStyles="{
                width: '70px',
                margin: '0 4px',
                marginTop: '35px',
              }"
              type="text"
            />
            <CustomInput
              name="entrance"
              label="Подъезд"
              :customStyles="{
                width: '70px',
                margin: '0 4px',
                marginTop: '35px',
              }"
              type="text"
            />
          </div>
        </div>

        <div class="street__intercom">
          <CustomInput
            name="intercom"
            label="Домофон"
            placeholder="Домофон"
            :customStyles="{
              width: '230px',
              marginRight: '10px',
            }"
            type="text"
          />
          <CustomInput
            name="floor"
            label="Этаж"
            :customStyles="{ width: '70px' }"
            type="number"
          />
        </div>
      </div>
      <!-- ДАТА И ВРЕМЯ ДАТА И ВРЕМЯ ДАТА И ВРЕМЯ ДАТА И ВРЕМЯ ДАТА И ВРЕМЯ ДАТА И ВРЕМЯ ДАТА И ВРЕМЯ ДАТА И ВРЕМЯ  -->
      <div class="order__block">
        <h2 class="order__subtitle" style="margin-bottom: 0">
          ДАТА И ВРЕМЯ ДОСТАВКИ
        </h2>
        <div class="flex-row">
          <div class="order__block-btns">
            <CustomButton
              v-for="(button, index) in deliveryButtons"
              :key="index"
              :text="button.text"
              :active="button.active"
              @click="toggleButtonActive(deliveryButtons, index)"
            />
          </div>
          <transition name="fade">
            <div class="order__time-inputs" v-if="deliveryButtons[1].active">
              <CustomInput
                name="date"
                label="Дата *"
                :required="true"
                :customStyles="{
                  width: '150px',
                  marginRight: '8px',
                  height: '90px',
                }"
                type="date"
              />
              <CustomInput
                name="time"
                label="Время *"
                :required="true"
                :customStyles="{ width: '150px', height: '90px' }"
                type="time"
              />
            </div>
          </transition>
        </div>
      </div>
      <!-- СПОСОБ ОПЛАТЫ СПОСОБ ОПЛАТЫ СПОСОБ ОПЛАТЫ СПОСОБ ОПЛАТЫ СПОСОБ ОПЛАТЫ СПОСОБ ОПЛАТЫ СПОСОБ ОПЛАТЫ СПОСОБ ОПЛАТЫ -->
      <div class="order__block">
        <h2 class="order__subtitle" style="margin: 0">СПОСОБ ОПЛАТЫ</h2>
        <div class="order__block-btns">
          <CustomButton
            v-for="(button, index) in paymentButtons"
            :key="index"
            :text="button.text"
            :active="button.active"
            @click="toggleButtonActive(paymentButtons, index)"
          />
        </div>
        <CustomInput
          name="change"
          label="Нужна сдача с:"
          placeholder="1000/2000/5000"
          :customStyles="{ width: '320px' }"
          type="number"
        />
      </div>
      <!-- ПОДТВЕРЖДЕНИЕ ЗАКАЗА ПОДТВЕРЖДЕНИЕ ЗАКАЗА ПОДТВЕРЖДЕНИЕ ЗАКАЗА ПОДТВЕРЖДЕНИЕ ЗАКАЗА ПОДТВЕРЖДЕНИЕ ЗАКАЗА ПОДТВЕРЖДЕНИЕ ЗАКАЗА ПОДТВЕРЖДЕНИЕ ЗАКАЗА -->
      <div class="order__block">
        <h2 class="order__subtitle" style="margin-bottom: 0">ПОДТВЕРЖДЕНИЕ ЗАКАЗА</h2>
        <div class="order__block-btns">
          <CustomButton
            v-for="(button, index) in confirmationButtons"
            :key="index"
            :text="button.text"
            :active="button.active"
            @click="toggleButtonActive(confirmationButtons, index)"
          />
        </div>
        <h3 class="order__hint">
          Для ускорения обработки вашего заказа, используйте способ
          подтверждения по SMS
        </h3>
        <CustomInput
          name="comment"
          label="Комментарий к заказу"
          :customStyles="{ width: '100%', minWidth: '320px' }"
          type="text"
          :maxlength="100"
        />
      </div>
      <!-- Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit Submit -->
      <div class="order__submit">
        <button class="order__back-btn" @click="goBack()">
          <arrowBack class="order__back-image" />
          К корзине
        </button>
        <SubmitButton @click="handleSubmitOrder()" text="Подтвердить" />
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.flex-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.fade-enter-active {
  animation: fade-in 0.5s ease;
}

.fade-leave-active {
  animation: fade-out 0.5s ease;
}

.fade-in {
  animation: fade-in 0.5s ease;
}

.fade-out {
  animation: fade-out 0.5s ease;
}

.order {
  display: flex;
  flex-direction: column;

  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: var(--color-text-black);
    margin-bottom: 35px;
    text-transform: uppercase;
  }

  &__subtitle {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: var(--color-text-black);
    text-transform: uppercase;
    align-self: flex-start;
    margin: 35px 0;
  }

  &__form {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-order);
    width: 70%;
    min-width: 350px;
    border-radius: 10px;
    padding: 35px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  &__block-btns {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 35px 15px 35px 0;
  }

  &__time-inputs {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  &__hint {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
    margin-top: 20px;
    margin-bottom: 35px;
  }

  &__submit {
    display: flex;
    align-items: flex-end;
    justify-items: flex-end;
    margin-top: 70px;
  }

  &__back-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    border: none;
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: var(--color-text-gray);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    padding-bottom: 8px;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__back-image {
    margin-right: 20px;
  }
}

.street {
  display: flex;
  flex-wrap: wrap;
  &__house {
    display: flex;
  }

  &__intercom {
    display: flex;
    margin-top: 35px;
  }
}

// @media (max-width: 1078px) {
//   .order__time-inputs {
//     margin-top: 20px;
//   }
// }

@media (max-width: 744px) {
  .order__form {
    padding: 15px;
  }
}

@media (max-width: 690px) {
  .order__form {
    padding: 5px;
  }
}
</style>
