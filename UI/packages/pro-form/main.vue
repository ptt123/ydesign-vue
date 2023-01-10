<template>
  <FormModel
    :label-col="{ span: 4 }"
    :wraper-col="{ span: 16 }"
    ref="formRef"
    :rules="rules"
    :model="formData"
  >
    <div v-for="(pitem, pindex) in formConfig" :key="pindex">
      <label class="block-title">{{ pitem.label }}</label>
      <Row>
        <template v-for="(item, index) in pitem.children">
          <Col
            :key="index"
            :span="item.colSpan || 12"
            v-if="!item.linkKey || item.linkValue === formData.value[item.linkKey]"
          >
            <FormModelItem
              :label-col="{ span: item.labelColSpan || 6 }"
              :label="item.label"
              :wrapper-col="{ span: item.wrapperColSpan || 12 }"
              :prop="item.key"
            >
              <label slot="label" v-if="item.label">
                <label v-if="item.type == 'child-form'" class="child-form-title">{{
                  item.label
                }}</label>
                <label v-else>{{ item.label }}</label>
                <label class="blue-primary-color">{{ item.desc }}</label>
              </label>
              <Input
                v-if="item.type === 'input'"
                :readOnly="item.readOnly || false"
                :disabled="item.disabled || false"
                :max-length="item.maxlength"
                :placeholder="item.placeholder"
                v-model="formData[item.key]"
              />
              <Input
                type="textarea"
                v-if="item.type === 'textarea'"
                :disabled="item.disabled || false"
                v-model="formData[item.key]"
                auto-size
              />
              <YdCheckbox
                v-if="item.type === 'checkbox'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
              />
              <YdSelect
                v-if="item.type === 'select'"
                :options="item.options"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
              />
              <YdRemotelySelect
                v-if="item.type === 'select-remotely'"
                :options="item.options"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
              />
              <YdUploadImg
                v-if="item.type === 'upload-img'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
              />
              <YdUploadAudio
                v-if="item.type === 'upload-audio'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
              />
              <YdUploadFile
                v-if="item.type === 'upload-file'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
              />
              <YdUploadVideo
                v-if="item.type === 'upload-video'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
              />
              <YdDatePicker
                v-if="item.type === 'datetime-picker'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
              />
              <YdRangePicker
                v-if="item.type === 'datetime-range-picker'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                v-bind:startKey.sync="formData[item.startKey]"
                v-bind:endKey.sync="formData[item.endKey]"
              />
              <YdChildForm
                :item="item"
                :ref="'childFormRef' + item.key"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                v-else-if="item.type === 'child-form'"
              />
            </FormModelItem>
          </Col>
        </template>
      </Row>
    </div>
  </FormModel>
</template>

<script>
import { defineComponent, ref, toRefs, reactive } from '@vue/composition-api'
import YdCheckbox from '../form-checkbox/checkbox.vue'
import YdSelect from '../form-select/select.vue'
import YdRemotelySelect from '../form-select/remotelySelect.vue'
import YdDatePicker from '../form-date-picker/datePicker.vue'
import YdRangePicker from '../form-date-picker/rangePicker.vue'
import YdUploadImg from '../form-upload/uploadImg.vue'
import YdUploadAudio from '../form-upload/uploadAudio.vue'
import YdUploadFile from '../form-upload/uploadFile.vue'
import YdUploadVideo from '../form-upload/uploadVideo.vue'
import YdChildForm from '../form-child-form/main.vue'
import { useFormValidate } from '../hooks'
export default defineComponent({
  name: 'YdForm',
  components: {
    YdCheckbox,
    YdSelect,
    YdRemotelySelect,
    YdDatePicker,
    YdRangePicker,
    YdUploadImg,
    YdUploadAudio,
    YdUploadFile,
    YdUploadVideo,
    YdChildForm,
  },
  props: {
    formData: {
      type: Object,
      default: () => ({}),
    },
    formConfig: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const objFormChildCompRefs = reactive({})

    const formItemArr = props.formConfig.map((val) => val.children).flat()

    formItemArr.forEach((item) => {
      if (item.type == 'child-form') {
        objFormChildCompRefs[`childFormRef` + item.key] = ref()
      }
    })

    const { rules, formRef, formValidate } = useFormValidate(formItemArr)

    // 表单校验
    const validate = async () => {
      const arrFormChildCompRefs = Object.values(objFormChildCompRefs).map((val) => val.value)
      const promiseAllArr = arrFormChildCompRefs.map((formRef) => {
        formRef[0].childFormValidate()
      })
      return Promise.all([...promiseAllArr, formValidate()]).then((res) => {
        return !res.includes(false || undefined)
      })
    }
    return {
      rules,
      formRef,
      validate,
      ...toRefs(objFormChildCompRefs),
    }
  },
})
</script>

<style scoped lang="less">
@import '../../css/proForm.less';
</style>
