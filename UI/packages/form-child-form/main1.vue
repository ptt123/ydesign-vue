<template>
  <div class="child-form-container">
    <div class="child-form" v-for="(childFiled, index) in childFormFileds" :key="index">
      <div class="child-form-head">
        <div class="child-form-title">
          {{ item.headerLabel }}
          {{ index + 1 }}
        </div>
        <div v-if="item.deleteEnable" class="child-form-del" @click="deleteChildForm(index)">
          <span class="child-form-del-text">删除</span>
        </div>
      </div>
      <div class="child-form-body">
        <FormModel
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 24 }"
          ref="listFormRefs"
          :rules="rules"
          :model="current[index]"
        >
          <Row>
            <template v-for="(citem, cindex) in item.childrenForm">
              <Col
                :key="cindex"
                :span="citem.colSpan || 12"
                v-if="!citem.linkKey || citem.linkValue === current[index][citem.linkKey]"
              >
                <FormModelItem
                  :label-col="{ span: citem.labelColSpan || 6 }"
                  :label="citem.label"
                  :wrapper-col="{ span: citem.wrapperColSpan || 12 }"
                  :prop="citem.key"
                  :ref="citem.key"
                >
                  <label slot="label">
                    {{ citem.label }}
                    <label class="blue-primary-color">{{ citem.desc }}</label>
                  </label>
                  <Input
                    v-if="citem.type === 'input'"
                    :readOnly="citem.readOnly || false"
                    :disabled="citem.disabled || false"
                    :max-length="citem.maxlength"
                    v-model="current[index][citem.key]"
                  />
                  <Input
                    type="textarea"
                    v-if="citem.type === 'textarea'"
                    :disabled="citem.disabled || false"
                    v-model="current[index][citem.key]"
                    auto-size
                  />
                  <YdCheckbox
                    v-if="citem.type === 'checkbox'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    @blur="
                      () => {
                        $refs[citem.key][0].onFieldBlur()
                      }
                    "
                    @change="
                      () => {
                        $refs[citem.key][0].onFieldChange()
                      }
                    "
                  />
                  <YdSelect
                    v-if="citem.type === 'select'"
                    :options="citem.options"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    @blur="
                      () => {
                        $refs[citem.key][0].onFieldBlur()
                      }
                    "
                    @change="
                      () => {
                        $refs[citem.key][0].onFieldChange()
                      }
                    "
                  />
                  <YdRemotelySelect
                    v-if="citem.type === 'select-remotely'"
                    :options="citem.options"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    @blur="
                      () => {
                        $refs[citem.key][0].onFieldBlur()
                      }
                    "
                    @change="
                      () => {
                        $refs[citem.key][0].onFieldChange()
                      }
                    "
                  />
                  <YdUploadImg
                    v-if="citem.type === 'upload-img'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    @blur="
                      () => {
                        $refs[citem.key][0].onFieldBlur()
                      }
                    "
                    @change="
                      () => {
                        $refs[citem.key][0].onFieldChange()
                      }
                    "
                  />
                  <YdUploadAudio
                    v-if="citem.type === 'upload-audio'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    @blur="
                      () => {
                        $refs[citem.key][0].onFieldBlur()
                      }
                    "
                    @change="
                      () => {
                        $refs[citem.key][0].onFieldChange()
                      }
                    "
                  />
                  <YdUploadFile
                    v-if="citem.type === 'upload-file'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    @blur="
                      () => {
                        $refs[citem.key][0].onFieldBlur()
                      }
                    "
                    @change="
                      () => {
                        $refs[citem.key][0].onFieldChange()
                      }
                    "
                  />
                  <YdUploadVideo
                    v-if="citem.type === 'upload-video'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    @blur="
                      () => {
                        $refs[citem.key][0].onFieldBlur()
                      }
                    "
                    @change="
                      () => {
                        $refs[citem.key][0].onFieldChange()
                      }
                    "
                  />
                  <YdDatePicker
                    v-if="citem.type === 'datetime-picker'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    @blur="
                      () => {
                        $refs[citem.key][0].onFieldBlur()
                      }
                    "
                    @change="
                      () => {
                        $refs[citem.key][0].onFieldChange()
                      }
                    "
                  />
                  <YdRangePicker
                    v-if="citem.type === 'datetime-range-picker'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    v-bind:startKey.sync="current[index][citem.startKey]"
                    v-bind:endKey.sync="current[index][citem.endKey]"
                    @blur="
                      () => {
                        $refs[citem.key][0].onFieldBlur()
                      }
                    "
                    @change="
                      () => {
                        $refs[citem.key][0].onFieldChange()
                      }
                    "
                  />
                  <YdChildForm
                    :item="citem"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    v-else-if="citem.type === 'child-form'"
                  />
                </FormModelItem>
              </Col>
            </template>
          </Row>
        </FormModel>
      </div>
    </div>
    <div v-if="addBtnVisible" class="child-form-add-btn" @click="addChildForm">
      {{ addBtnLabel }}
    </div>
  </div>
</template>

<script>
import YdCheckbox from '../form-checkbox/checkbox.vue'
import YdSelect from '../form-select/select.vue'
import YdRemotelySelect from '../form-select/remotelySelect.vue'
import YdDatePicker from '../form-date-picker/datePicker.vue'
import YdRangePicker from '../form-date-picker/rangePicker.vue'
import YdUploadImg from '../form-upload/uploadImg.vue'
import YdUploadAudio from '../form-upload/uploadAudio.vue'
import YdUploadFile from '../form-upload/uploadFile.vue'
import YdUploadVideo from '../form-upload/uploadVideo.vue'
import FormValidateMixin from '../mixins/useFormValidate1.js'

export default {
  name: 'YdChildForm',
  mixins: [FormValidateMixin],
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
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    modelValue: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      current: this.modelValue,
      childFormFileds: [],
      rules: {},
      initModelValue: {},
    }
  },
  created() {
    this.rules = this.initFormRules(this.item.childrenForm)
    this.initFormValue()
    this.initChildFormFileds()
  },
  computed: {
    // 是否展示“添加按钮”
    addBtnVisible() {
      if (
        this.item.addEnable &&
        (!this.item.addMaxLength || this.item.addMaxLength > this.childFormFileds.length)
      ) {
        return true
      }
      return false
    },
    // 计算添加按钮文案
    addBtnLabel() {
      if (this.item.addBtnLabel) {
        return this.item.addBtnLabel
      }
      return `+新增${this.item.headerLabel}`
    },
  },
  methods: {
    // 初始化childFormFileds
    initChildFormFileds() {
      let i = 0
      while (i < this.modelValue.length || 0) {
        this.setChildFormFileds()
        i++
      }
    },
    // 初始化表单绑定的值
    initFormValue() {
      // 子表单初始数据该由配置项自动生成，避免modelValue无值的情况
      this.item.childrenForm.forEach((item) => {
        if (
          [
            'child-form',
            'upload-img',
            'upload-audio',
            'upload-video',
            'upload-file',
            'datetime-range-picker',
          ].includes(item.type)
        ) {
          this.initModelValue[item.key] = []
        } else if (['checkbox'].includes(item.type)) {
          this.initModelValue[item.key] = false
        } else {
          this.initModelValue[item.key] = ''
        }
      })
    },
    // 给childFormFileds添加值
    setChildFormFileds() {
      this.childFormFileds.push(this.item)
    },
    // 更新props.modelValue
    updateModelValue() {
      this.current.push(JSON.parse(JSON.stringify(this.initModelValue)))
      this.$emit('update:modelValue', this.current)
    },
    // 添加一个子表单到childFormFileds最后
    addChildForm() {
      this.setChildFormFileds()
      this.updateModelValue()
    },

    // 删除一个子表单
    deleteChildForm(index) {
      // 更新childFormFileds
      this.childFormFileds.splice(index, 1)
      // 更新current
      this.current.splice(index, 1)
      this.$emit('input', this.current)
    },

    // 所有子表单校验
    async childFormValidate() {
      const arrValidateResults = this?.$refs?.listFormRefs?.map((formRef) => {
        return this.formValidate(formRef)
      }) || [Promise.resolve(true)]
      return Promise.all(arrValidateResults)
        .then((res) => {
          return !res.includes(false || undefined)
        })
        .catch((err) => {
          console.log('error', err)
          return false
        })
    },
  },
}
</script>

<style scoped lang="less">
@import '../../css/childForm.less';
</style>
