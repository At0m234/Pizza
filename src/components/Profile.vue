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
      <CustomButton v-for="(item, index) in profileNavigation" :key="index"
        @click="navigateTo(profileNavigation, index, item.component)" :active="item.active" :text="item.title"
        :customStyles="{ borderRadius: '10px', padding: '5px 10px', marginBottom: '20px' }">
      </CustomButton>
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
    max-width: 550px;
    margin: 40px 0 0 0;
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

@media (max-width: 520px) {
  .profile__navigation {
    flex-direction: column;
  }
}
</style>
