<script setup lang="ts">
import { ref } from 'vue'
import DeliveryAndPayment from '../components/DeliveryAndPayment.vue'
import useApi from '@/api'

const api = useApi()

const test = ref()

api.getCategories().then(({ data }) => {
  test.value = data.data
})
</script>

<template>
  <DeliveryAndPayment />
</template>
