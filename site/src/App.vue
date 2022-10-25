<script setup lang="ts">
import { ref, watchEffect } from 'vue'
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
const fileList = ref([
  'https://applet-down.jxbscbd.com/vip/scan-code/img1.png',
  'https://applet-down.jxbscbd.com/vip/scan-code/img2.png',
  'https://applet-down.jxbscbd.com/vip/scan-code/img3.png',
  'https://applet-down.jxbscbd.com/vip/scan-code/img4.png',
])
const videoList = ref([])
watchEffect(() => {
  console.log('fileList', fileList.value)
})
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
    <!-- <upload dir="xiaoye-test" v-model:fileList="fileList" /> -->
    <yd-form-upload-img dir="xiaoye-test" v-model:fileList="fileList" />
    <yd-form-upload-video dir="xiaoye-test" v-model:fileList="videoList" />
  </div>
</template>
