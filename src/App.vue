<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import 'element-plus/dist/index.css'
import '@/assets/element.overwite..scss'
import LayoutDefault from '@/layouts/default.vue'
// import LayoutEmpty from '@/layouts/empty.vue'
import useApi from '@/api'
import { useGlobalStore } from '@/stores/global'

const route = useRoute()

const map = {
  default: LayoutDefault,
  // empty: LayoutEmpty,
}

const layout = computed(() => {
  const layoutName = (route.meta?.layout as string) || 'default'
  return map[layoutName as keyof typeof map]
})

const api = useApi()
const store = useGlobalStore()

api.getCategories().then((data) => {
  store.setValue({ field: 'categories', value: data.data.data })
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>
