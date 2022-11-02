import { computed, ref } from 'vue'
export const useFormValidate = (formArr: Array<FormItem>) => {
  const formRef = ref()

  /** 计算出form组件的rule */
  const rules: any = computed(() => {
    let formRules = {}
    formArr.forEach((val) => {
      formRules = Object.assign(formRules, {
        [val.key]: val.rule || [],
      })
    })
    return formRules
  })

  const resetForm = () => {
    formRef.value.resetFields()
  }

  // 表单校验功能
  const formValidate = async () => {
    return formRef.value
      .validate()
      .then(async () => {
        return true
      })
      .catch((error: Error) => {
        console.log('error', error)
      })
  }

  return {
    rules,
    formRef,
    resetForm,
    formValidate,
  }
}
