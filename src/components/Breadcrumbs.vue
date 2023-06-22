<script setup lang="ts">
import { computed } from 'vue'

import arrow from '@/assets/icon/arrow-simple.svg'

type BreadcrumbItem = {
  label: string
  to?: string
}

const props = defineProps<{
  items: BreadcrumbItem[]
}>()

const lastIndex = computed(() => {
  return props.items.length - 1
})
</script>

<template>
  <nav class="breadcrumbs">
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <img v-if="index !== 0" :src="arrow" alt=">" />
        <Link v-if="index !== lastIndex" :to="item.to || ''">{{
          item.label
        }}</Link>
        <span v-else>{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped lang="css">
.breadcrumbs {
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.8rem;
}

.breadcrumbs ol {
  display: inline-flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumbs img {
  margin: 0 0.5rem;
}

.breadcrumbs li {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  color: var(--color-text-gray);
}
.breadcrumbs:deep(a) {
  color: var(--color-text-gray) !important;
}
.breadcrumbs:deep(a.link) {
  text-decoration: none;
  color: var(--color-text-gray);
}
.breadcrumbs:deep(a:hover) {
  text-decoration: underline;
}
</style>
