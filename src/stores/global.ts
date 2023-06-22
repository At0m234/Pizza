import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const state = reactive<{
    selectedMenuItem: string
    breadCrumbs: { label: string; link: string }[]
  }>({
    selectedMenuItem: '',
    breadCrumbs: [],
  })

  function setValue(payload: { field: keyof typeof state; value: any }) {
    state[payload.field] = payload.value
  }

  return { state, setValue }
})
