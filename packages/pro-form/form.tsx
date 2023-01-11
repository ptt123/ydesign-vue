import { defineComponent, toRefs, ref } from 'vue'
import { FormTextarea, FormInput } from '../form-input'
import { FormCheckbox, FormCheckboxGroup } from '../form-checkbox'
import { FormDatePicker, FormRangePicker } from '../form-date-picker'
import { FormSelect, FormSelectRemotely } from '../form-select'
import { FormUploadImg, FormUploadAudio, FormUploadFile, FormUploadVideo } from '../form-upload'
import { FormChildForm } from '../form-child-form'
import { useFormValidate } from '../hooks/index'
import props from './props'

import './index.less'

export default defineComponent({
  name: 'YdProForm',
  components: {
    FormCheckbox,
    FormCheckboxGroup,
    FormInput,
    FormTextarea,
    FormSelect,
    FormSelectRemotely,
    FormUploadImg,
    FormUploadAudio,
    FormUploadFile,
    FormUploadVideo,
    FormDatePicker,
    FormRangePicker,
    FormChildForm,
  },
  props,
  setup(props, { expose }) {
    const { formData, formConfig } = toRefs(props)

    const objFormChildCompRefs = ref<Record<string, any>>({})
    const { rules, formRef, resetForm, formValidate } = useFormValidate(
      props.formConfig.map((val) => val.children).flat(),
    )

    // 表单校验
    const validate = async () => {
      const arrFormChildCompRefs = Object.values(objFormChildCompRefs.value)
      const promiseAllArr = arrFormChildCompRefs.map((formRef) => formRef.childFormValidate())
      return Promise.all([...promiseAllArr, formValidate()]).then((res) => {
        return !res.includes(false || undefined)
      })
    }

    const renderFormItem = (item: FormItem) => {
      return (
        <lib-form-item
          label={item.label}
          label-col={{ span: item.labelColSpan || 6 }}
          wrapper-col={{ span: item.wrapperColSpan || 12 }}
          name={item.key}
        >
          {item.type === 'input' && (
            <form-input
              item={item}
              readOnly={item.readOnly || false}
              disabled={item.disabled || false}
              maxlength={item.maxlength}
              v-model:modelValue={formData.value[item.key]}
            ></form-input>
          )}
          {item.type === 'textarea' && (
            <form-textarea
              disabled={item.disabled || false}
              item={item}
              v-model:modelValue={formData.value[item.key]}
            ></form-textarea>
          )}
          {item.type === 'checkbox' && (
            <form-checkbox
              disabled={item.disabled || false}
              item={item}
              v-model:modelValue={formData.value[item.key]}
            ></form-checkbox>
          )}
          {item.type === 'checkbox-group' && (
            <form-checkbox-group
              disabled={item.disabled || false}
              item={item}
              v-model:modelValue={formData.value[item.key]}
            ></form-checkbox-group>
          )}
          {item.type === 'select' && (
            <form-select
              item={item}
              disabled={item.disabled || false}
              v-model:modelValue={formData.value[item.key]}
            ></form-select>
          )}
          {item.type === 'select-remotely' && (
            <form-select-remotely
              item={item}
              disabled={item.disabled || false}
              v-model:modelValue={formData.value[item.key]}
            ></form-select-remotely>
          )}
          {item.type === 'upload-img' && (
            <form-upload-img
              item={item}
              disabled={item.disabled || false}
              v-model:modelValue={formData.value[item.key]}
            ></form-upload-img>
          )}
          {item.type === 'upload-audio' && (
            <form-upload-audio
              item={item}
              disabled={item.disabled || false}
              v-model:modelValue={formData.value[item.key]}
            ></form-upload-audio>
          )}
          {item.type === 'upload-file' && (
            <form-upload-file
              item={item}
              disabled={item.disabled || false}
              v-model:modelValue={formData.value[item.key]}
            ></form-upload-file>
          )}
          {item.type === 'upload-video' && (
            <form-upload-video
              item={item}
              disabled={item.disabled || false}
              v-model:modelValue={formData.value[item.key]}
            ></form-upload-video>
          )}
          {item.type === 'datetime-picker' && (
            <form-date-picker
              item={item}
              disabled={item.disabled || false}
              v-model:modelValue={formData.value[item.key]}
            ></form-date-picker>
          )}
          {item.type === 'datetime-range-picker' && (
            <form-range-picker
              item={item}
              disabled={item.disabled || false}
              v-model:modelValue={formData.value[item.key]}
              v-model:startKey={formData.value[item.startKey!]}
              v-model:endKey={formData.value[item.endKey!]}
            ></form-range-picker>
          )}
          {item.type === 'child-form' && (
            <form-child-form
              item={item}
              ref={(el: any) => {
                if (el) objFormChildCompRefs.value[item.key] = el
              }}
              v-model:modelValue={formData.value[item.key]}
            ></form-child-form>
          )}
        </lib-form-item>
      )
    }

    // 曝露给父组件的方法
    expose({ resetForm, validate })

    return () => (
      <lib-form
        label-col={{ span: 4 }}
        wrapper-col={{ span: 16 }}
        ref={formRef}
        rules={rules.value}
        model={formData.value}
      >
        {formConfig.value.map((pitem: FormConfig) => {
          return (
            <>
              <label class="block-title">{pitem.label}</label>
              <lib-row>
                {pitem.children.map((item) => {
                  return (
                    <lib-col span={item.colSpan || 12}>
                      {(!item.linkKey || item.linkValue === formData.value[item.linkKey]) &&
                        renderFormItem(item)}
                    </lib-col>
                  )
                })}
              </lib-row>
            </>
          )
        })}
      </lib-form>
    )
  },
})
