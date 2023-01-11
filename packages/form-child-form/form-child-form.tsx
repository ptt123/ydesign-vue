import { defineComponent, toRefs, computed, ref } from 'vue'
import { FormTextarea, FormInput } from '../form-input'
import { FormCheckbox, FormCheckboxGroup } from '../form-checkbox'
import { FormDatePicker, FormRangePicker } from '../form-date-picker'
import { FormSelect, FormSelectRemotely } from '../form-select'
import { FormUploadImg, FormUploadAudio, FormUploadFile, FormUploadVideo } from '../form-upload'
import { useFormValidate } from '../hooks/index'
import props from './props'

import './index.less'

export default defineComponent({
  name: 'YdFormChildForm',
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
  },
  props,
  emits: ['update:modelValue'],
  setup(props, { emit, expose }) {
    const { item, modelValue } = toRefs(props)

    // 最好不要直接更改propszheli
    let current = computed(() => props.modelValue)
    let childFormFileds = ref<Array<FormItem>>([])
    const listFormRefs = ref<any[]>([])
    const { rules } = useFormValidate(item.value.childrenForm)

    const deleteIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACh0lEQVRYCe1Xz2sTQRSeN7uKHoQoBMRKL4I3Ragg2FNvXjTNpUhBemmEpP+Agt4U8VQ8JAUTkCIUodAQRPBk/gEFEfFSvAhVULBFxF/p7vObbCfd2c3uZvaoWQjz5vu+982b2Ql5EeJ/f2iUA1hZfTrh/enNE4tTTJSaQ4yHxHvn4IG16sLlrSz/VDOVXH/YPgfDrmAuZJkZPNEOCp5Zul5+beCRiRuZx6ZYfFktjkp7gugtBH5MFALU/qE9g7GAaBnUTIiOhZkFYPELKouEvF2rzN6POQwB6s2NG4LFPZ07RDKA5CBKDg73KeLtZInJkKCve0iQa9LGzLgD9VbnErN3CwaHtApHORXE9AFn+0XjaSOzKArBk0qDO/tKa1nwLyLnztJi6bnGjFfAvlcFMQ2h5kMjT8K4bxoCM8P9DQRSbFCtMbwA15U3dz3+jnc335eTaGMPI+06uRIuYj/lwI/WXIfuhrXGK1BEo9me8plfqlgSna9VyoMjVJjtk+U3yiW0XdNKb11A/dGz40krpHFJOVYF4Pv9gHu/PzVaGwtRQ4UpTmmiXNrcqgBcyGll5jNdjJruY4EmyifNLQtIssmPjwsYn8D4BOxOgLnfDeHnOtYVDbA9zahfTKsCiOQqfr22pJDr0QUUpjiliXJpc6MfSBMqDi1ZHYP6xJ5q5coLgCdjRAZgdQIZXrnoWAHSoZ/aCcd6TMe5R4eO6lx0Wj90rMdYQ9Ltdt13mzufIUYifUMfuKnFOcfTaMuO4JJuFwuzxbk58sI+sQIUudLqXPV8/zEaS6s7EjY2Y9p1pLxWXSw9MXFsMQroeaPZOcvCL6M9PaGxPCMW+Ij/FO1apfQmT/6/n/MX8KHG8NxlUVYAAAAASUVORK5CYII=`

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
          'checkbox-group',
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
    const deleteChildForm = (index: number) => {
      // 更新childFormFileds
      childFormFileds.value.splice(index, 1)
      // 更新current
      current.value.splice(index, 1)
      emit('update:modelValue', current.value)
    }

    // 单个表单校验
    const formValidate = async (formRef: any) => {
      return formRef
        .validate()
        .then((valid: boolean) => {
          return valid
        })
        .catch(() => {
          return false
        })
    }

    // 所有子表单校验
    const childFormValidate = async () => {
      const arrValidateResults = listFormRefs.value.map((formRef) => formValidate(formRef))
      return Promise.all(arrValidateResults)
        .then((res) => {
          return !res.includes(false || undefined)
        })
        .catch(() => {
          return false
        })
    }

    expose({ childFormValidate })

    initChildFormFileds()

    /**
     * 渲染表单项
     * @param citem 表单项配置项
     * @param index 表单项所属子表单index
     * @returns
     */
    const renderFormItem = (citem: FormItem, index: number) => {
      return (
        <lib-form-item
          label-col={{ span: citem.labelColSpan || 6 }}
          label={citem.label}
          wrapper-col={{ span: citem.wrapperColSpan || 12 }}
          name={citem.key}
        >
          {citem.type === 'input' && (
            <form-input
              item={citem}
              readOnly={citem.readOnly || false}
              disabled={citem.disabled || false}
              maxlength={citem.maxlength}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-input>
          )}
          {citem.type === 'textarea' && (
            <form-textarea
              disabled={citem.disabled || false}
              item={citem}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-textarea>
          )}
          {citem.type === 'checkbox' && (
            <form-checkbox
              disabled={citem.disabled || false}
              item={citem}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-checkbox>
          )}
          {citem.type === 'checkbox-group' && (
            <form-checkbox-group
              disabled={citem.disabled || false}
              item={citem}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-checkbox-group>
          )}
          {citem.type === 'select' && (
            <form-select
              item={citem}
              disabled={citem.disabled || false}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-select>
          )}
          {citem.type === 'select-remotely' && (
            <form-select-remotely
              item={citem}
              disabled={citem.disabled || false}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-select-remotely>
          )}
          {citem.type === 'upload-img' && (
            <form-upload-img
              item={citem}
              disabled={citem.disabled || false}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-upload-img>
          )}
          {citem.type === 'upload-audio' && (
            <form-upload-audio
              item={citem}
              disabled={citem.disabled || false}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-upload-audio>
          )}
          {citem.type === 'upload-file' && (
            <form-upload-file
              item={citem}
              disabled={citem.disabled || false}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-upload-file>
          )}
          {citem.type === 'upload-video' && (
            <form-upload-video
              item={citem}
              disabled={citem.disabled || false}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-upload-video>
          )}
          {citem.type === 'datetime-picker' && (
            <form-date-picker
              item={citem}
              disabled={citem.disabled || false}
              v-model:modelValue={current.value[index][citem.key]}
            ></form-date-picker>
          )}
          {citem.type === 'datetime-range-picker' && (
            <form-range-picker
              item={citem}
              disabled={citem.disabled || false}
              v-model:modelValue={current.value[index][citem.key]}
              v-model:startKey={current.value[index][citem.startKey!]}
              v-model:endKey={current.value[index][citem.endKey!]}
            ></form-range-picker>
          )}
        </lib-form-item>
      )
    }

    /**
     * 渲染删除表单按钮
     * @param index 表单索引
     * @returns
     */
    const renderDelBtn = (index: number) => {
      if (item.value.deleteEnable) {
        return (
          <div class="child-form-del" onClick={() => deleteChildForm(index)}>
            <img src={deleteIcon} class="child-form-del-btn" />
            <span class="child-form-del-text">删除</span>
          </div>
        )
      }
    }

    /**
     * 渲染新增表单按钮
     * @returns
     */
    const renderAddBtn = () => {
      if (addBtnVisible.value) {
        return (
          <div class="child-form-add-btn" onClick={addChildForm}>
            {addBtnLabel.value}
          </div>
        )
      }
    }

    return () => (
      <div class="child-form-container">
        {childFormFileds.value.map((childFiled, index) => {
          return (
            <div class="child-form">
              <div class="child-form-head">
                <div class="child-form-title">
                  {item.value.headerLabel}
                  {index + 1}
                </div>
                {renderDelBtn(index)}
              </div>
              <div class="child-form-body">
                <lib-form
                  label-col={{ span: 4 }}
                  wrapper-col={{ span: 24 }}
                  ref={(el: any) => {
                    if (el) listFormRefs.value[index] = el
                  }}
                  rules={rules.value}
                  model={current.value[index]}
                >
                  <lib-row>
                    {item.value.childrenForm.map((citem: FormItem) => {
                      if (
                        !citem.linkKey ||
                        citem.linkValue === current.value[index][citem.linkKey]
                      ) {
                        return (
                          <lib-col span={citem.colSpan || 12}>
                            {renderFormItem(citem, index)}
                          </lib-col>
                        )
                      }
                    })}
                  </lib-row>
                </lib-form>
              </div>
            </div>
          )
        })}
        {renderAddBtn()}
      </div>
    )
  },
})
