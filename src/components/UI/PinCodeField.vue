<script setup lang="ts">
import { ref, onMounted } from 'vue';

const inputRefs = ref<HTMLInputElement[]>([]);

onMounted(() => {
  inputRefs.value = Array.from(document.querySelectorAll('.pin-code__input'));
});

const handleInput = (index: number) => {
  const input = inputRefs.value[index];
  let value = input.value;

  if (value) {
    // Усечение значения до одной цифры
    value = value.slice(0, 1);
    input.value = value;

    if (index < inputRefs.value.length - 1) {
      inputRefs.value[index + 1].focus();
    } else {
      // Последний инпут
      const userCode = inputRefs.value.map((input) => input.value).join('');
      console.log(userCode);
    }
  }
};
</script>


<template>
  <form class="pin-code__form">
    <input ref="input1" class="pin-code__input" type="number" maxlength="1" @input="handleInput(0)" />
    <input ref="input2" class="pin-code__input" type="number" maxlength="1" @input="handleInput(1)" />
    <input ref="input3" class="pin-code__input" type="number" maxlength="1" @input="handleInput(2)" />
    <input ref="input4" class="pin-code__input" type="number" maxlength="1" @input="handleInput(3)" />
  </form>
</template>

<style lang="scss" scoped>
.pin-code__form {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
.pin-code__input {
  margin: 0 12px;
  padding: 15px 20px;
  border: 1px solid var(--color-warning);
  width: 57px;
  height: 57px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  border-radius: 10px;
}
</style>
