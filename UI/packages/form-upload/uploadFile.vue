<template>
  <div class="form-item-box form-upload-box">
    <Upload v-model="val" v-bind="$attrs" v-on="$listeners" :maxSize="1024000" fileType="*" />
  </div>
</template>

<script>
import Upload from '../upload/index'
export default {
  name: 'YdUploadFile',
  components: { Upload },
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    val: {
      get: function () {
        return this.modelValue
      },
      set: function (v) {
        this.$emit('input', v)
      },
    },
  },
}
</script>
