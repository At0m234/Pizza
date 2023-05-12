<script setup lang="ts">
import { defineProps, reactive, ref, watch } from 'vue'
import ProductCard from '@/components/UI/ProductCard.vue'
import axios from 'axios'

defineProps({
  data: Object,
})
const productList = ref([])
axios.get('http://194.58.100.36/api/product/pizza')
.then(({data})=>{
    console.log('###### ', data)
    productList.value = data.data
})
</script>

<template>
  <div class="category">
    <product-card v-for="i of 9" :key="i" />
<!--      <pre>{{productList}}</pre>-->
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
