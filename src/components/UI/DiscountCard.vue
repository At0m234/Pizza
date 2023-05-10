<script lang="ts" setup>
import { defineProps } from 'vue';
import copyIcon from '@/assets/img/UI/copy.svg?url'
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  id: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  btnText: {
    type: String,
  },
  text: {
    type: String,
  },
  promo: {
    type: String,
  },
})

function onCopyClick() {
  if (!props.promo) return console.error('Cannot copy undefined value')
  navigator.clipboard
  .writeText(props.promo)
  .then(() => {
  })
  .catch((error) => {
    console.error('Failed to copy value to clipboard:', error)
  })
}

const redirectToDiscountCard = () => {
  router.push({ name: 'DiscountCard', params: props });
};
</script>

<template>
  <div v-if="!$route.params.id" class="card" @click="redirectToDiscountCard">
    <img class="card__image" :src="imageUrl" alt="Discount Card Image" />
    <div class="card__content">
      <h3 class="card__title">{{ title }}</h3>
      <h4 class="card__subtitle">{{ subtitle }}</h4>
      <button class="card__btn">{{ btnText }}</button>
    </div>
  </div>
  <div v-else class="card__details">
    <div class="details__info">
      <h3 class="details__title">{{ title }}</h3>
      <p class="details__text">{{ text }}</p>
      <h4 class="details__promo">
        ПРОМОКОД: <span>{{ promo }}</span>
        <img
          class="details__copy"
          alt="copy"
          :src="copyIcon"
          @click="onCopyClick"
        />
      </h4>
    </div>
    <img class="details__image" :src="imageUrl" alt="Discount Card Image" />
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 295px;
  height: 430px;
  border: 2px solid var(--border-discount-card);
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 15px 12px 13px 4px rgba(34, 60, 80, 0.22);
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &__image {
    display: flex;
    width: 295px;
    height: 330px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--color-text-black);
    margin: 0 0 5px 0;
    text-decoration: none;
  }
  &__subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-black);
    margin: 0 0 5px 0;
  }
  &__btn {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: var(--color-warning);
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0 auto 10px 0;
    padding-left: 0;
  }
  &__details {
    display: flex;
    justify-content: space-between;
  }
}
.details {
  &__info {
    display: flex;
    flex-direction: column;
    width: 65%;
  }
  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: var(--color-text-black);
    text-decoration: none;
    margin: 0 0 40px 0;
  }
  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-gray);
    text-decoration: none;
    margin-bottom: 40px;
  }
  &__promo {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--color-text-gray);
    text-decoration: none;
  }
  &__promo span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--color-warning);
    text-decoration: none;
    margin-left: 10px;
  }
  &__copy {
    width: 15px;
    height: 15px;
    margin-left: 15px;
    cursor: pointer;
  }
  &__image {
    display: flex;
    width: 440px;
    height: 380px;
    background: #d9d9d9;
    margin-left: 30px;
  }
}
@media (max-width: 900px) {
  .card {
    &__details {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
  .details {
    &__info {
      width: 95%;
    }
    &__title {
      margin: 40px 0;
    }
    &__image {
      margin-left: 0;
      width: 70%;
      height: calc(440/380)*50vh;
    }
  }
}
</style>
