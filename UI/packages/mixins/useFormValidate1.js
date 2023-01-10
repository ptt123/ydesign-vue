export default {
  methods: {
    initFormRules(formArr) {
      let formRules = {}
      formArr.forEach((val) => {
        formRules = Object.assign(formRules, {
          [val.key]: val.rule || [],
        })
      })
      return formRules
    },
    resetForm() {
      this.$refs['formRef'].resetFields()
    },
    async formValidate(formRef) {
      return formRef
        .validate()
        .then(async (valid) => {
          return valid
        })
        .catch((error) => {
          console.log('error', error)
          return false
        })
    },
  },
}
