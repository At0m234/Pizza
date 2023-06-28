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
  <div class="slider" >
    <div class="slider__header">
      <h2 class="slider__title">{{ title }}</h2>
      <div class="slider__controls">
        <previousArrow class="slider__prev-btn" @click="moveSlider('left')" />
        <forwardArrow class="slider__forw-btn" @click="moveSlider('right')" />
      </div>
    </div>

    <div class="slider__content" ref="sliderContent">
      <div class="slider__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    width: 100%;
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
    margin-right: 30px;

    &:hover {
      fill: var(--color-warning);
    }
  }

  &__prev-btn {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    fill: black;
    transition: transform 0.15s ease-in-out;

    &:hover {
      transform: scale(1.2);
      color: var(--color-warning);

      svg {
        fill: var(--color-warning)
      }
    }
  }

  &__forw-btn {
    width: 40px;
    height: 40px;
    cursor: pointer;
    fill: black;
    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: scale(1.2);
      color: var(--color-warning);

      svg {
        fill: var(--color-warning)
      }
    }
  }

  &__content {
    display: flex;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    position: relative;
    margin: 0;
    height: 650px;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-warning);
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  &__body {
    display: flex;
    flex-wrap: nowrap;
    width: auto;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
