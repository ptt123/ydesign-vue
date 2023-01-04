<template>
  <div class="form-item-box form-upload-box">
    <Upload v-model="val" v-bind="$attrs" :maxSize="1024000" :fileType="['mp4']" />
  </div>
</template>

<script>
import Upload from '../upload/index'
export default {
  name: 'YdUploadVideo',
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
