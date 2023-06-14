<script setup lang="ts">
import { ref } from 'vue';
// import CustomButton from '@/components/UI/CustomButton.vue';

const profileNavigation = [
  { index: 0, active: true, title: 'Мои данные', component: 'ProfileMyData' },
  { index: 1, active: false, title: 'Адреса', component: 'ProfileAddresses' },
  { index: 2, active: false, title: 'История заказов', component: 'ProfileOrderHistory' },
];

const activeComponent = ref(profileNavigation[0].component);

interface Button {
  title: string
  index: number
  active: boolean
  component: 'ProfileMyData' | 'ProfileAddresses' | 'ProfileOrderHistory'
}

function navigateTo(buttons: Button[], index: number, component: string) {
  buttons.forEach((button, i) => {
    button.active = i === index // Устанавливаем активное состояние только для выбранной кнопки
    activeComponent.value = component;
  })
}
</script>

<template>
  <section class="profile">
    <nav class="profile__navigation">
      <!-- <CustomButton v-for="(item, index) in profileNavigation" :key="index"
        @click="navigateTo(profileNavigation, index, item.component)" :active="item.active" :text="item.title"
        :customStyles="{ borderRadius: '10px', marginRight: '50px', padding: '5px 10px' }">
      </CustomButton> -->
    </nav>
    <div class="profile__content">
      <component :is="activeComponent" />
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
    margin: 40px auto 20px 0;
  }

  &__content {
    max-width: 1040px;
    border: 1px solid var(--border-order);
    border-radius: 10px;
    padding: 50px 200px;
  }
}

.nav-link {
  // Добавьте стили для ссылок в навигации
}

.nav-link.active {
  // Добавьте стили для активной ссылки
}

@media (max-width: 744px) {}
</style>
