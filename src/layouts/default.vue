<template>
  <div class="layout">
    <custom-header/>
    <main class="content">
      <slot/>
    </main>
    <custom-footer class="layout__footer"/>
  </div>
</template>

<script lang="ts" setup>
import CustomHeader from '@/components/CustomHeader.vue';
import CustomFooter from '@/components/CustomFooter.vue';
</script>

<style scoped>
.layout {
  /*display: flex;*/
  /*flex-direction: column;*/
  min-height: calc(100vh - 80px);
}

.content {
  max-width: 1440px;
  height: 100%;
  min-height: 60vh;
  padding: 20px 40px;
  margin: 0 auto;
}

main {
  display: grid;
  width: 100%;
  height: 100%;
}

</style>
