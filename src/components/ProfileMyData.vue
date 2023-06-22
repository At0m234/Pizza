<script setup lang="ts">
import CustomInput from '../components/UI/CustomInput.vue';
import CustomCheckbox from '../components/UI/CustomCheckbox.vue';
import SubmitButton from './UI/SubmitButton.vue';

</script>

<template>
  <div class="profile-data">

    <form class="profile-data__grid">
      <CustomInput label="Имя" type="text" name="name" placeholder="Введите имя" :required="true" />
      <CustomInput label="Телефон" type="tel" name="phone" placeholder="Введите телефон" :required="true" />
      <CustomInput label="Почта" type="email" name="email" placeholder="Введите почту" :required="true" />
      <CustomInput label="Пароль" type="password" name="password" placeholder="Задайте пароль" :required="true" />
      <div class="profile-data__checkboxes">
        <CustomCheckbox label="Согласен с пользовательским соглашением и политикой конфиденциальности" :required="true" :checked="true"/>
        <CustomCheckbox label="Согласен получать рекламные уведомления" :checked="true"/>
        <SubmitButton text="Сохранить" :custom-styles="{ marginTop: '40px' }" />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.profile-data {
  display: flex;
  flex-direction: column;
  padding: 50px 20px;

  &__grid {
    display: grid;
    grid-template-columns: 256px 256px;
    grid-template-rows: 1fr 1fr;
    gap: 20px 115px;
  }

  &__checkboxes {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .profile-data__grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}
</style>
