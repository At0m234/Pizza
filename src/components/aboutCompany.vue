<script setup lang="ts">
import { ORGANIZATION_INFO } from '../constants'

const values = [
  { id: 1, value: 'вкусная и качественная еда может быть доступной' },
  { id: 2, value: 'вкусная и качественная еда может быть доступной' },
  { id: 3, value: 'вкусная и качественная еда' },
  { id: 4, value: 'вкусная и качественная еда может' },
  { id: 5, value: 'вкусная и качественная еда может быть доступной' },
]

const methods = [
  { id: 1, value: 'Мы используем только высокие стандарты качества' },
  { id: 2, value: 'Мы используем только высокие стандарты качества' },
  { id: 3, value: 'Мы используем только высокие стандарты качества' },
  { id: 4, value: 'Мы используем только высокие стандарты качества' },
  { id: 5, value: 'Мы используем только высокие стандарты качества' },
]
</script>

<template>
  <section class="about">
    <div class="about__content">
      <h2 class="about__title">О компании</h2>
      <p class="about__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis sem
        sed magna fringilla, eu congue massa consequat. Maecenas ut ornare
        velit. Donec vel quam mi. Sed tellus leo, pharetra in pulvinar eget,
        accumsan sed erat. Vestibulum dictum rhoncus nibh id blandit. Nulla
        posuere, dolor eu hendrerit laoreet, felis nisl ultrices lectus, ut
        tincidunt turpis odio ut dui. Ut tempor efficitur ligula mollis
        facilisis. Duis tempus semper enim in ornare. Phasellus blandit
        fringilla diam sed sollicitudin. Maecenas a eros eu augue tempor luctus
        ac sed magna. Donec rhoncus justo in pretium finibus. Etiam quis rhoncus
        nisi. Curabitur vehicula et orci nec accumsan. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Ut sagittis sem sed magna fringilla,
        eu congue massa consequat. Maecenas ut ornare velit. Donec vel quam mi.
        Sed tellus leo, pharetra in pulvinar eget, accumsan sed erat. Vestibulum
        dictum rhoncus nibh id blandit.
      </p>

      <div class="about__approach">
        <div class="about__values">
          <h3 class="about__subtitle">Наши ценности</h3>
          <ul class="about__list">
            <li v-for="item of values" class="about__list-item" :key="item.id">
              {{ item.value }}
            </li>
          </ul>
        </div>

        <div class="about__methods">
          <h3 class="about__subtitle">Наши методы работы</h3>
          <ul class="about__list">
            <li v-for="item of methods" class="about__list-item" :key="item.id">
              {{ item.value }}
            </li>
          </ul>
        </div>
      </div>

      <div class="contacts">
        <h2 class="about__title">Реквизиты и контакты</h2>
        <span class="contacts__contact contacts__contact_name"
          >Название организации: {{ ORGANIZATION_INFO.NAME }}</span
        >
        <span class="contacts__contact contacts__contact_adress">{{
          ORGANIZATION_INFO.ADRESS
        }}</span>
        <span class="contacts__contact contacts__contact_ogrn"
          >ОГРН: {{ ORGANIZATION_INFO.OGRN }}</span
        >
        <span class="contacts__contact contacts__contact_inn"
          >ИНН: {{ ORGANIZATION_INFO.INN }}</span
        >
        <span class="contacts__contact contacts__contact_kpp"
          >КПП: {{ ORGANIZATION_INFO.KPP }}
        </span>
        <span class="contacts__contact contacts__contact_phone"
          >Телефон/факс: {{ ORGANIZATION_INFO.PHONE }}</span
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 100px 0;
  &__content {
    display: flex;
    flex-direction: column;
    max-width: 920px;
  }
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: var(--color-text-black);
    margin-bottom: 34px;
  }
  &__text {
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-gray);
  }
  &__approach {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
  }
  &__values {
    display: flex;
    flex-direction: column;
    max-width: 385px;
  }
  &__methods {
    display: flex;
    flex-direction: column;
    max-width: 485px;
  }
  &__subtitle {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: var(--color-warning);
    margin-bottom: 15px;
  }
  &__list {
    padding-left: 20px;
  }
  &__list-item {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-gray);
  }
}
.contacts {
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  max-width: 670px;
  &__contact {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-gray);
  }
}
@media (max-width: 820px) {
  .about {
    &__approach {
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-top: 45px;
    }
    &__methods {
      margin-top: 40px;
    }
  }
}
</style>
