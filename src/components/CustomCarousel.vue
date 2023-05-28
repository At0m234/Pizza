<script setup lang="ts"></script>

<template>
  <el-carousel height="500px" indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #e7c984;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #f6a3a9;
}
</style>
