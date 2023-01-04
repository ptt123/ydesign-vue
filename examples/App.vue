<template>
  <div id="app">
    <YdForm :formData="formData" :formConfig="formConfig" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      formData: {
        childForm: [],
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
      formConfig: [
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
            },
            {
              label: '时间范围选择',
              type: 'datetime-range-picker',
              key: 'dateTimeRange',
              startKey: 'startTime',
              endKey: 'endTime',
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
      ],
    }
  },
}
</script>

<style>
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
