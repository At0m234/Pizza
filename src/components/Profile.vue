<script setup lang="ts">
import { ref, type Component } from 'vue';
import CustomButton from '@/components/UI/CustomButton.vue';
import ProfileMyData from '../components/ProfileMyData.vue';
import ProfileAddresses from '../components/ProfileAddresses.vue';
import ProfileOrderHistory from '../components/ProfileOrderHistory.vue';

interface Button {
  index: number
  active: boolean
  title: string
  component: Component;
}

const profileNavigation: Button[] = [
  { index: 0, active: true, title: 'Мои данные', component: ProfileMyData },
  { index: 1, active: false, title: 'Адреса', component: ProfileAddresses },
  { index: 2, active: false, title: 'История заказов', component: ProfileOrderHistory },
];

let activeComponent = ref<Component>(profileNavigation[0].component);

function navigateTo(buttons: Button[], index: number, component: Component) {
  buttons.forEach((button, i) => {
    button.active = i === index // Устанавливаем активное состояние только для выбранной кнопки
    activeComponent.value = component as Component;
  })
}
</script>

<template>
  <section class="profile">
    <nav class="profile__navigation">
      <div class="profile__navigation-btns">
        <CustomButton v-for="(item, index) in profileNavigation" :key="index"
          @click="navigateTo(profileNavigation, index, item.component)" :active="item.active" :text="item.title"
          :customStyles="{ borderRadius: '10px', padding: '5px 10px', marginBottom: '20px', marginLeft: '5px', marginRight: '5px', }">
        </CustomButton>
      </div>
      <div class="clear-orders" v-if="profileNavigation[2].active">
        <button class="clear-orders__btn">Очистить историю заказов</button>
      </div>
    </nav>
    <div class="profile__content">
      <component :is="activeComponent" v-if="activeComponent" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;

  &__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1040px;
    margin: 40px 0 0 0;
  }

  &__navigation-btns {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1040px;
    border: 1px solid var(--border-order);
    border-radius: 10px;
  }
}

.clear-orders {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  justify-self: flex-end;
  align-self: center;

  &__btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #AFAFAF;
    margin-bottom: 20px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.25);
      color: var(--color-warning);
    }
  }
}

@media (max-width: 768px) {
  .profile__navigation {
    flex-direction: column;
  }

  .profile__navigation-btns {
    width: 100%;
    justify-content: center;
  }
}
</style>
