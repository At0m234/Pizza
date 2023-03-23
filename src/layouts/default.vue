<template>
  <div class="layout">
    <custom-header/>
    <main class="content">
      <slot/>
    </main>
    <custom-footer/>
  </div>
</template>

<script lang="ts" setup>
import CustomHeader from '@/components/CustomHeader.vue';
import CustomFooter from '@/components/CustomFooter.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 80px);

}

.content {
  max-width: 1440px;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
}

main {
  display: grid;
  width: 100%;
  height: 100%;
}


</style>
