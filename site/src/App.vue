<script setup lang="ts">
import { ref } from 'vue'
import { FormItem } from '../../src/form-checkbox/type'
const formItem = { label: '这是复选框', key: 'isStart' } as FormItem
const modelValue = ref(true)
</script>

<template>
  <div>
    fdsfdsu
    <yd-form-checkbox :item="formItem" :modelValue="modelValue" />
  </div>
</template>
