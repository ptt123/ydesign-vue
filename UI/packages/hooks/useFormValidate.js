import { computed, ref } from '@vue/composition-api'
export const useFormValidate = (formArr) => {
  const formRef = ref()

  const rules = computed(() => {
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
      .then(async (valid) => {
        return valid
      })
      .catch((error) => {
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
