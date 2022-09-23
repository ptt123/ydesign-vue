<script setup lang="ts">
import { ref } from 'vue'
const inputValue = ref('')
const inputItem = {
  disabled: true,
  placeholder: '这是一个input框',
}
const textareaValue = ref('')

const datePickerValue = ref('')

const rangePickerValue = ref([])
const startTime = ''
const endTime = ''
</script>

<template>
  <div>
    <yd-form-input
      v-model:modelValue="inputValue"
      :disabled="inputItem.disabled"
      :placeholder="inputItem.placeholder"
    />
    <yd-form-textarea v-model:modelValue="textareaValue" />
    <yd-form-date-picker v-model:modelValue="datePickerValue" />
    <yd-form-range-picker
      v-model:modelValue="rangePickerValue"
      v-model:startKey="startTime"
      v-model:endKey="endTime"
    />
  </div>
</template>
