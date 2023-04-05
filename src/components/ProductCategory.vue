<script setup lang="ts">
import {defineProps, reactive, ref, watch} from 'vue'
import ProductCard from "@/components/ProductCard.vue";

const props = defineProps({
  data: Object,
})

</script>

<template>
  <div class="category">
    <product-card v-for="i of 5"/>
  </div>

</template>
<style scoped lang="scss">
 .category {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 20px;
 }
</style>