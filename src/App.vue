<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import 'element-plus/dist/index.css'
import LayoutDefault from '@/layouts/default.vue'
// import LayoutEmpty from '@/layouts/empty.vue'

const route = useRoute()

const map = {
  default: LayoutDefault,
  // empty: LayoutEmpty,
}

const layout = computed(() => {
  const layoutName = (route.meta?.layout as string) || 'default'
  return map[layoutName as keyof typeof map]
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>