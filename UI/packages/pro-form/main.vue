<template>
  <Form
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
            <FormItem
              :label-col="{ span: item.labelColSpan || 6 }"
              :label="item.label"
              :wrapper-col="{ span: item.wrapperColSpan || 12 }"
              :name="item.key"
            >
              <label slot="label" v-if="item.label">
                <label v-if="item.type == 'child-form'" class="child-form-title">{{
                  item.label
                }}</label>
                <label v-else>{{ item.label }}</label>
                <label class="blue-primary-color">{{ item.desc }}</label>
              </label>
              <YdInput
                v-if="item.type === 'input'"
                :readOnly="item.readOnly || false"
                :disabled="item.disabled || false"
                :max-length="item.maxlength"
                v-model="formData[item.key]"
              />
              <YdTextarea
                v-if="item.type === 'textarea'"
                :disabled="item.disabled || false"
                v-model="formData[item.key]"
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
                v-model="formData[item.key]"
              />
              <YdRemotelySelect
                v-if="item.type === 'select-remotely'"
                :options="item.options"
                :disabled="item.disabled || false"
                v-model="formData[item.key]"
              />
              <YdUploadImg
                v-if="item.type === 'upload-img'"
                :disabled="item.disabled || false"
                v-model="formData[item.key]"
              />
              <YdUploadAudio
                v-if="item.type === 'upload-audio'"
                :disabled="item.disabled || false"
                v-model="formData[item.key]"
              />
              <YdUploadFile
                v-if="item.type === 'upload-file'"
                :disabled="item.disabled || false"
                v-model="formData[item.key]"
              />
              <YdUploadVideo
                v-if="item.type === 'upload-video'"
                :disabled="item.disabled || false"
                v-model="formData[item.key]"
              />
              <YdDatePicker
                v-if="item.type === 'datetime-picker'"
                :disabled="item.disabled || false"
                v-model="formData[item.key]"
              />
              <YdRangePicker
                v-if="item.type === 'datetime-range-picker'"
                :disabled="item.disabled || false"
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
            </FormItem>
          </Col>
        </template>
      </Row>
    </div>
  </Form>
</template>

<script>
import { Form, Row, Col } from 'ant-design-vue'
import { defineComponent, ref, toRefs, reactive } from '@vue/composition-api'
import YdInput from '../form-input/input.vue'
import YdTextarea from '../form-input/textarea.vue'
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
    Form,
    FormItem: Form.Item,
    Row,
    Col,
    YdInput,
    YdTextarea,
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
      objFormChildCompRefs[`childFormRef` + item.key] = ref()
    })

    const { rules, formRef, formValidate } = useFormValidate(formItemArr)

    // 表单校验
    const validate = async () => {
      const arrFormChildCompRefs = Object.values(objFormChildCompRefs)
      const promiseAllArr = arrFormChildCompRefs.map((formRef) => formRef.childFormValidate())
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
