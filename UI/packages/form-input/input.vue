<template>
  <div class="form-item-box form-input-box">
    <Input v-model="val" v-bind="$attrs" />
  </div>
</template>

<script>
import { Input } from 'ant-design-vue'
export default {
  name: 'YdInput',
  components: { Input },
  props: {
    modelValue: {
      type: String,
      default: '',
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
