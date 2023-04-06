<script setup lang="ts">
import {defineProps, reactive, ref, watch} from 'vue'
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps({
  data: Object,
})

</script>

<template>
  <div class="category">
    <product-card v-for="i of 5" :key="i"/>
  </div>

</template>
<style scoped lang="scss">
 .category {
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: center;
 }
</style>