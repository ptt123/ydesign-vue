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
              :ref="item.key"
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
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
              />
              <YdTextarea
                v-if="item.type === 'textarea'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
              />
              <YdCheckbox
                v-if="item.type === 'checkbox'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
              />
              <YdSelect
                v-if="item.type === 'select'"
                :options="item.options"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
              />
              <YdRemotelySelect
                v-if="item.type === 'select-remotely'"
                :options="item.options"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
              />
              <YdUploadImg
                v-if="item.type === 'upload-img'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
              />
              <YdUploadAudio
                v-if="item.type === 'upload-audio'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
              />
              <YdUploadFile
                v-if="item.type === 'upload-file'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
              />
              <YdUploadVideo
                v-if="item.type === 'upload-video'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
              />
              <YdDatePicker
                v-if="item.type === 'datetime-picker'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
              />
              <YdRangePicker
                v-if="item.type === 'datetime-range-picker'"
                :disabled="item.disabled || false"
                :modelValue="formData[item.key]"
                v-model="formData[item.key]"
                v-bind:startKey.sync="formData[item.startKey]"
                v-bind:endKey.sync="formData[item.endKey]"
                @blur="
                  () => {
                    $refs[item.key][0].onFieldBlur()
                  }
                "
                @change="
                  () => {
                    $refs[item.key][0].onFieldChange()
                  }
                "
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
import YdChildForm from '../form-child-form/main1.vue'
import FormValidateMixin from '../mixins/useFormValidate1.js'
export default {
  name: 'YdForm',
  mixins: [FormValidateMixin],
  components: {
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
      default() {
        return {}
      },
    },
    formConfig: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      objFormChildCompRefs: {},
      rules: {},
    }
  },
  created() {
    const formItemArr = this.formConfig.map((val) => val.children).flat()
    this.rules = this.initFormRules(formItemArr)
    formItemArr.forEach((item) => {
      if (item.type == 'child-form') {
        this.objFormChildCompRefs[`childFormRef` + item.key] = ''
      }
    })
  },
  methods: {
    // 表单校验
    async validate() {
      const arrFormChildCompRefs = Object.keys(this.objFormChildCompRefs)
      const promiseAllArr = arrFormChildCompRefs.map((formRefName) => {
        return this.$refs[formRefName][0].childFormValidate()
      })
      return Promise.all([...promiseAllArr, this.formValidate(this.$refs.formRef)]).then((res) => {
        return !res.includes(false || undefined)
      })
    },
  },
}
</script>

<style scoped lang="less">
@import '../../css/proForm.less';
</style>
