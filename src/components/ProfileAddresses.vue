<script setup lang="ts">
import { ref } from 'vue';
import CustomInput from '../components/UI/CustomInput.vue';
import SubmitButton from '../components/UI/SubmitButton.vue';
import CustomCheckbox from '../components/UI/CustomCheckbox.vue';
import edit from '../assets/icon/Profile/edit.svg';
import add from '../assets/icon/Profile/add.svg';

const addNewAddress = ref(false);

const addresses = [
  {
    id: 1,
    city: 'Тула',
    street: 'Дмитрия Донского',
    house: 10,
    building: 1,
    entrance: 1,
    flour: 1,
    apartment: 100,
    comment: 'Позвонить на охрану',
  },
  {
    id: 2,
    city: 'Тула',
    street: 'Дмитрия Донского',
    house: 20,
    building: 2,
    entrance: 2,
    flour: 2,
    apartment: 200,
    comment: '',
  },
  {
    id: 3,
    city: 'Тула',
    street: 'Дмитрия Донского',
    house: 30,
    building: 3,
    entrance: 3,
    flour: 3,
    apartment: 300,
    comment: 'Позвонить на охрану',
  },
  {
    id: 4,
    city: 'Тула',
    street: 'Дмитрия Донского',
    house: 40,
    building: 4,
    entrance: 4,
    flour: 4,
    apartment: 400,
    comment: '',
  },
  {
    id: 5,
    city: 'Тула',
    street: 'Дмитрия Донского',
    house: 50,
    building: 5,
    entrance: 5,
    flour: 5,
    apartment: 500,
    comment: 'Позвонить на охрану',
  },
  {
    id: 2,
    city: 'Тула',
    street: 'Дмитрия Донского',
    house: 20,
    building: 2,
    entrance: 2,
    flour: 2,
    apartment: 200,
    comment: '',
  },
  {
    id: 3,
    city: 'Тула',
    street: 'Дмитрия Донского',
    house: 30,
    building: 3,
    entrance: 3,
    flour: 3,
    apartment: 300,
    comment: 'Позвонить на охрану',
  },
  {
    id: 4,
    city: 'Тула',
    street: 'Дмитрия Донского',
    house: 40,
    building: 4,
    entrance: 4,
    flour: 4,
    apartment: 400,
    comment: '',
  },
  {
    id: 5,
    city: 'Тула',
    street: 'Дмитрия Донского',
    house: 50,
    building: 5,
    entrance: 5,
    flour: 5,
    apartment: 500,
    comment: 'Позвонить на охрану',
  },
]

function removeAddress() {
  console.log('remove address')
}

function editAddress() {
  console.log('edit address')
}

function addAddress() {
  addNewAddress.value = true
}

function saveAddress() {
  addNewAddress.value = false
}
</script>

<template>
  <template v-if="addNewAddress">
    <div class="add">
      <h2 class="add__title">Куда везем</h2>
      <form class="add__form">
        <div class="add__city">
          <CustomInput name="city" label="Город" :required="true" value="Тула" :customStyles="{ width: '100%' }"
            type="text" />
        </div>
        <div class="add__street">
          <CustomInput name="street" label="Улица *" :required="true" :customStyles="{
            width: '100%',
          }" type="text" />
        </div>
        <div class="add__house">
          <CustomInput name="house" label="Дом *" :required="true" :customStyles="{
            width: '70px',
            margin: '0 4px 0 0',
          }" type="text" />
          <CustomInput name="building" label="Корпус" :customStyles="{
            width: '70px',
            margin: '0 4px',
          }" type="text" />

          <CustomInput name="entrance" label="Подъезд" :customStyles="{
            width: '70px',
            margin: '0 4px',
          }" type="text" />
        </div>
        <div class="add__flat">
          <CustomInput name="intercom" label="Домофон" :customStyles="{
            width: '70px',
            marginRight: '10px',
          }" type="text" />
          <CustomInput name="floor" label="Этаж" :customStyles="{ width: '70px' }" type="number" />
          <CustomInput name="flat" label="Кв/офис " :customStyles="{
            width: '70px',
            margin: '0 4px',
          }" type="text" />
        </div>
        <div class="add__comment">
          <label class="add__comment-label" for="comment">Комментарий</label>
          <textarea class="add__comment-text" name="comment" type="text" :maxlength="300"></textarea>
          <SubmitButton text="Сохранить" :customStyles="{ width: '110px', marginTop: '35px', alignSelf: 'center' }"
            @submut.prevent="saveAddress" />
        </div>
      </form>
    </div>
  </template>
  <template v-else>
    <div class="addresses">
      <ul class="addresses__list">

        <li class="addresses__list-item" v-for="item in addresses" :key="item.id">{{ `${item.city},
                  ул.${item.street},
                  ${item.house}/ ${item.building}, подъезд ${item.entrance}, этаж${item.flour}, кв.${item.apartment},
                  ${item.comment}` }}
          <div class="addresses__actions">
            <button class="action__btn" @click="editAddress">
              <edit />
            </button>
            <button class="action__btn" @click="removeAddress">Удалить</button>
          </div>
        </li>
      </ul>
      <div class="addresses__add">
        <span class="addresses__add-text">Добавить новый адрес</span>
        <button class="action__btn" @click="addAddress">
          <add />
        </button>
      </div>

      <CustomCheckbox label="Запоминать последний адрес при оформлении заказов"
        :customStyles="{ marginTop: '40px', maxWidth: '500px', alignItems: 'center' }" />
    </div>
  </template>
</template>

<style lang="scss" scoped>
.add {
  display: flex;
  flex-direction: column;
  padding: 20px;

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: var(--color-text-black);
    text-transform: uppercase;
    margin: 0 0 35px 0;
  }

  &__form {
    display: grid;
    grid-template-columns: 256px 240px;
    grid-template-rows: repeat(4, auto);
    gap: 20px 115px;
    width: 100%;
  }

  &__city {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  &__street {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    display: flex;
    flex-wrap: wrap;
  }

  &__house {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    display: flex;
  }

  &__flat {
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
    display: flex;
  }

  &__comment {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    box-sizing: border-box;
  }

  &__comment-label {
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    color: var(--color-text-black);
    margin-bottom: 10px;
  }

  &__comment-text {
    padding: 10px;
    background: var(--bg-input-order);
    border-radius: 5px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
    resize: vertical;
    width: 100%;
    margin-top: 10px;

    &:hover {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #ff6161;
    }

    &:focus {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #ff6161;
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

.addresses {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 40px;

  &__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0;
    width: 100%;
    max-height: 550px;
    overflow-y: scroll;
    overflow-x: hidden;
    border-bottom: 1px solid #EAEAEA;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-warning);
    }

    &::-webkit-scrollbar-track {
      background-color: var(--color-light-gray);
    }
  }

  &__list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 30px 0;
    border-bottom: 1px solid #EAEAEA;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
    white-space: pre-line;
    width: 100%;
  }

  &__actions {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    margin: 0 40px 0 30px;
  }

  &__add {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #EAEAEA;
  }

  &__add-text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #AFAFAF;
    padding: 30px 0;
    width: 100%;
  }
}

.action__btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #AFAFAF;
  margin-left: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
    opacity: 0.7;
    color: var(--color-warning);
  }
}

@media (max-width: 700px) {
  .add {
    &__form {
      grid-template-columns: 256px;
      grid-template-rows: repeat(5, auto);
      gap: 20px 30px;
    }

    &__city {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }

    &__street {
      grid-column: 1 / span 1;
      grid-row: 2 / span 1;
      display: flex;
      flex-wrap: wrap;
    }

    &__house {
      grid-column: 1 / span 1;
      grid-row: 3 / span 1;
      display: flex;
    }

    &__flat {
      grid-column: 1 / span 1;
      grid-row: 4 / span 1;
      display: flex;
    }

    &__comment {
      grid-column: 1 / span 1;
      grid-row: 5 / span 1;
      box-sizing: border-box;
    }
  }
}

@media (max-width: 520px) {
  .addresses {
    padding: 20px 10px;

    &__actions {
      flex-direction: column;
    }
  }

  .action__btn {
    margin-left: 0;
    margin-bottom: 10px;
  }
}
</style>
