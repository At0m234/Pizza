<script setup lang="ts">
import { defineProps, ref } from 'vue'
import previousArrow from '@/assets/icon/slider/previousArrow.svg'
import forwardArrow from '@/assets/icon/slider/forwardArrow.svg'

const props = defineProps({
  title: {
    type: String,
  },
})

const sliderContent = ref<HTMLElement | null>(null)

function moveSlider(direction: 'left' | 'right'): void {
  if (sliderContent.value) {
    const content = sliderContent.value
    const stepSize = 500 // Размер шага движения содержимого слайдера

    if (direction === 'left') {
      content.scrollTo({
        left: content.scrollLeft - stepSize,
        behavior: 'smooth',
      })
    } else if (direction === 'right') {
      content.scrollTo({
        left: content.scrollLeft + stepSize,
        behavior: 'smooth',
      })
    }
  }
}
</script>

<template>
  <div class="slaider">
    <div class="slaider__header">
      <h2 class="slaider__title">{{ title }}</h2>
      <div class="slaider__controls">
        <previousArrow class="slaider__prev-btn" @click="moveSlider('left')" />
        <forwardArrow class="slaider__forw-btn" @click="moveSlider('right')" />
      </div>
    </div>

    <!-- <div class="slaider__body"> -->
    <div class="slaider__content" ref="sliderContent">
      <slot />
    </div>
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
.slaider {
  display: flex;
  flex-direction: column;
  max-width: 1360px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: var(--color-text-black);
    text-transform: uppercase;
  }

  &__controls {
    display: flex;
    justify-content: space-between;

    &:hover {
      fill: var(--color-warning);
    }
  }

  &__prev-btn {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: black;
    transition: fill 0.3s ease-in-out;
    transition: transform 0.15s ease-in-out;

    &:hover {
      fill: var(--color-warning);
      transform: scale(1.2);
    }
  }

  &__forw-btn {
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: black;
    transition: fill 0.3s ease-in-out;
    transition: transform 0.1s ease-in-out;

    &:hover {
      fill: var(--color-warning);
      transform: scale(1.2);
    }
  }

  &__content {
    display: flex;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-warning); /* Цвет ползунка скролла */
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
}
</style>
