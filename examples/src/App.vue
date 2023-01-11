<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
const formData = ref({
  childForm: [
    {
      testInput: '',
      testselect: '',
      testselectRemotely: '',
      testtextarea: '',
      checkbox: false,
      checkboxGroup: [],
      img: [],
      audio: [],
      file: [],
      video: [],
      dateTime: '',
      dateTimeRange: [],
      startTime: '',
      endTime: '',
    },
  ],
  testInput: '',
  testselect: '',
  testselectRemotely: '',
  testtextarea: '',
  checkbox: false,
  checkboxGroup: [],
  img: [],
  audio: [],
  file: [],
  video: [],
  dateTime: '',
  dateTimeRange: [],
  startTime: '',
  endTime: '',
})
const formConfig = [
  {
    label: '测试表单1',
    children: [
      {
        label: '测试输入框',
        key: 'testInput',
        type: 'input',
        rule: [{ required: true, message: '请输入', trigger: 'blur' }],
      },
      {
        label: '测试选择框',
        key: 'testselect',
        type: 'select',
        options: [
          {
            label: '1',
            value: 1,
          },
          {
            label: '2',
            value: 2,
          },
        ],
        rule: [{ required: true, message: '请选择', trigger: 'change' }],
      },
      {
        label: '远程选择框',
        key: 'testselectRemotely',
        type: 'select',
        options: [
          {
            label: '1',
            value: 1,
          },
          {
            label: '2',
            value: 2,
          },
        ],
      },
      {
        label: '多行文本框',
        type: 'textarea',
        key: 'testtextarea',
        rule: [{ required: true, message: '请输入', trigger: 'blur' }],
      },
      {
        label: '复选框',
        type: 'checkbox',
        key: 'checkbox',
      },
      {
        label: '上传图片',
        type: 'upload-img',
        key: 'img',
        rule: [{ required: true, message: '请上传', trigger: 'change' }],
      },
      {
        label: '上传音频',
        type: 'upload-audio',
        key: 'audio',
      },
      {
        label: '上传文件',
        type: 'upload-file',
        key: 'file',
      },
      {
        label: '上传视频',
        type: 'upload-video',
        key: 'video',
      },
      {
        label: '世间选择器',
        type: 'datetime-picker',
        key: 'dateTime',
        rule: [{ required: true, message: '请选择', trigger: 'change' }],
      },
      {
        label: '时间范围选择',
        type: 'datetime-range-picker',
        key: 'dateTimeRange',
        startKey: 'startTime',
        endKey: 'endTime',
        rule: [{ required: true, message: '请选择', trigger: 'change' }],
      },
      {
        headerLabel: '子表单',
        addEnable: true,
        deleteEnable: true,
        addMaxLength: 10,
        key: 'childForm',
        type: 'child-form',
        colSpan: 24,
        wrapperColSpan: 24,
        childrenForm: [
          {
            label: '测试输入框',
            key: 'testInput',
            type: 'input',
            rule: [{ required: true, message: '请输入', trigger: 'blur' }],
          },
          {
            label: '测试选择框',
            key: 'testselect',
            type: 'select',
            options: [
              {
                label: '1',
                value: 1,
              },
              {
                label: '2',
                value: 2,
              },
            ],
            rule: [{ required: true, message: '请选择', trigger: 'change' }],
          },
          {
            label: '远程选择框',
            key: 'testselectRemotely',
            type: 'select',
            options: [
              {
                label: '1',
                value: 1,
              },
              {
                label: '2',
                value: 2,
              },
            ],
          },
          {
            label: '多行文本框',
            type: 'textarea',
            key: 'testtextarea',
            rule: [{ required: true, message: '请输入', trigger: 'blur' }],
          },
          {
            label: '复选框',
            type: 'checkbox',
            key: 'checkbox',
          },
          {
            label: '上传图片',
            type: 'upload-img',
            key: 'img',
            rule: [{ required: true, message: '请上传', trigger: 'change' }],
          },
          {
            label: '上传音频',
            type: 'upload-audio',
            key: 'audio',
          },
          {
            label: '上传文件',
            type: 'upload-file',
            key: 'file',
          },
          {
            label: '上传视频',
            type: 'upload-video',
            key: 'video',
          },
          {
            label: '世间选择器',
            type: 'datetime-picker',
            key: 'dateTime',
            rule: [{ required: true, message: '请选择', trigger: 'change' }],
          },
          {
            label: '时间范围选择',
            type: 'datetime-range-picker',
            key: 'dateTimeRange',
            startKey: 'startTime',
            endKey: 'endTime',
            rule: [{ required: true, message: '请选择', trigger: 'change' }],
          },
        ],
      },
      {
        headerLabel: '子表单1',
        addEnable: true,
        deleteEnable: true,
        addMaxLength: 10,
        key: 'childForm1',
        type: 'child-form',
        colSpan: 24,
        wrapperColSpan: 24,
        childrenForm: [
          {
            label: '测试输入框',
            key: 'testInput1',
            type: 'input',
            rule: [{ required: true, message: '请输入', trigger: 'blur' }],
          },
          {
            label: '测试选择框',
            key: 'testselect1',
            type: 'select',
            options: [
              {
                label: '1',
                value: 1,
              },
              {
                label: '2',
                value: 2,
              },
            ],
          },
          {
            label: '远程选择框',
            key: 'testselectRemotely1',
            type: 'select',
            options: [
              {
                label: '1',
                value: 1,
              },
              {
                label: '2',
                value: 2,
              },
            ],
          },
          {
            label: '多行文本框',
            type: 'textarea',
            key: 'testtextarea1',
          },
          {
            label: '复选框',
            type: 'checkbox',
            key: 'checkbox',
          },
          {
            label: '上传图片',
            type: 'upload-img',
            key: 'img1',
          },
          {
            label: '上传音频',
            type: 'upload-audio',
            key: 'audio1',
          },
          {
            label: '上传文件',
            type: 'upload-file',
            key: 'file1',
          },
          {
            label: '上传视频',
            type: 'upload-video',
            key: 'video1',
          },
          {
            label: '世间选择器',
            type: 'datetime-picker',
            key: 'dateTime1',
          },
          {
            label: '时间范围选择',
            type: 'datetime-range-picker',
            key: 'dateTimeRange1',
            startKey: 'startTime1',
            endKey: 'endTime1',
          },
        ],
      },
    ],
  },
]
const proFormRef = ref()
const onSubmit = () => {
  proFormRef.value.validate().then((valid: boolean) => {
    console.log('valid', valid)
  })
}
</script>

<template>
  <div>
    <yd-pro-form :formData="formData" :formConfig="formConfig" ref="proFormRef" />
    <Button type="primary" @click="onSubmit">Primary Button</Button>
  </div>
</template>
