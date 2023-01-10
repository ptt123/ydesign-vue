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
          :ref="'listFormRefs' + item.key"
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
                  />
                  <YdSelect
                    v-if="citem.type === 'select'"
                    :options="citem.options"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                  />
                  <YdRemotelySelect
                    v-if="citem.type === 'select-remotely'"
                    :options="citem.options"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                  />
                  <YdUploadImg
                    v-if="citem.type === 'upload-img'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                  />
                  <YdUploadAudio
                    v-if="citem.type === 'upload-audio'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                  />
                  <YdUploadFile
                    v-if="citem.type === 'upload-file'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                  />
                  <YdUploadVideo
                    v-if="citem.type === 'upload-video'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                  />
                  <YdDatePicker
                    v-if="citem.type === 'datetime-picker'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                  />
                  <YdRangePicker
                    v-if="citem.type === 'datetime-range-picker'"
                    :disabled="citem.disabled || false"
                    :modelValue="current[index][citem.key]"
                    v-model="current[index][citem.key]"
                    v-bind:startKey.sync="current[index][citem.startKey]"
                    v-bind:endKey.sync="current[index][citem.endKey]"
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
import { defineComponent, ref, computed, reactive, toRefs } from '@vue/composition-api'
import YdCheckbox from '../form-checkbox/checkbox.vue'
import YdSelect from '../form-select/select.vue'
import YdRemotelySelect from '../form-select/remotelySelect.vue'
import YdDatePicker from '../form-date-picker/datePicker.vue'
import YdRangePicker from '../form-date-picker/rangePicker.vue'
import YdUploadImg from '../form-upload/uploadImg.vue'
import YdUploadAudio from '../form-upload/uploadAudio.vue'
import YdUploadFile from '../form-upload/uploadFile.vue'
import YdUploadVideo from '../form-upload/uploadVideo.vue'
import { useFormValidate } from '../hooks/index'

export default defineComponent({
  name: 'YdChildForm',
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
      default: () => ({}),
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const { item, modelValue } = toRefs(props)

    // 最好不要直接更改propszheli
    let current = computed(() => modelValue.value)
    let childFormFileds = ref([])
    const listFormRefs = reactive([])
    const { rules } = useFormValidate(item.value.childrenForm)

    let initModelValue = {}
    // 子表单初始数据该由配置项自动生成，避免modelValue无值的情况
    item.value.childrenForm.forEach((item) => {
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
        initModelValue[item.key] = []
      } else if (['checkbox'].includes(item.type)) {
        initModelValue[item.key] = false
      } else {
        initModelValue[item.key] = ''
      }
    })

    // 是否展示“添加按钮”
    const addBtnVisible = computed(() => {
      if (
        item.value.addEnable &&
        (!item.value.addMaxLength || item.value.addMaxLength > childFormFileds.value.length)
      ) {
        return true
      }
      return false
    })
    // 计算添加按钮文案
    const addBtnLabel = computed(() => {
      if (item.value.addBtnLabel) {
        return item.value.addBtnLabel
      }
      return `+新增${item.value.headerLabel}`
    })

    // 更新props.modelValue
    const updateModelValue = () => {
      current.value.push(JSON.parse(JSON.stringify(initModelValue)))
      emit('update:modelValue', current.value)
    }

    // 给childFormFileds添加值
    const setChildFormFileds = () => {
      childFormFileds.value.push(item.value)
    }

    // 添加一个子表单到childFormFileds最后
    const addChildForm = async () => {
      setChildFormFileds()
      updateModelValue()
    }

    // 初始化childFormFileds
    const initChildFormFileds = () => {
      let i = 0
      while (i < modelValue.value?.length || 0) {
        setChildFormFileds()
        i++
      }
    }

    // 删除一个子表单
    const deleteChildForm = (index) => {
      // 更新childFormFileds
      childFormFileds.value.splice(index, 1)
      // 更新current
      current.value.splice(index, 1)
      this.$emit('input', current.value)
    }

    // 单个表单校验
    const formValidate = async (formRef) => {
      return formRef
        .validate()
        .then((valid) => {
          return valid
        })
        .catch((err) => {
          console.log('formValidate error', err)
          return false
        })
    }

    // 所有子表单校验
    const childFormValidate = async () => {
      const arrValidateResults = Object.values(listFormRefs).map((formRef) => {
        formRef.value ? formRef.value.map((val) => formValidate(val)) : [Promise.resolve(true)]
      })
      return Promise.all(arrValidateResults)
        .then((res) => {
          return !res.includes(false || undefined)
        })
        .catch((err) => {
          console.log('error', err)
          return false
        })
    }

    initChildFormFileds()
    listFormRefs[`listFormRefs${item.value.key}`] = ref()

    return {
      addBtnLabel,
      addBtnVisible,
      childFormFileds,
      addChildForm,
      deleteChildForm,
      current,
      rules,
      childFormValidate,
      ...toRefs(listFormRefs),
    }
  },
})
</script>

<style scoped lang="less">
@import '../../css/childForm.less';
</style>
