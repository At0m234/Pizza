<script setup lang="ts">
import { defineProps, ref } from 'vue'

interface Props {
  text: string
}

const props = defineProps<Props>()
const popupText = ref(props.text)
const isPopupVisible = ref(true)
</script>
<template>
  <div class="popup__success" v-if="isPopupVisible">
    <p class="popup__text">{{ popupText }}</p>
  </div>
</template>

<style scoped>
.popup__success {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0px 8px 24px;
  background: var(--bg-popup-promo);
  box-sizing: border-box;
}
.popup__text {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: var(--color-text-white);
}
</style>
