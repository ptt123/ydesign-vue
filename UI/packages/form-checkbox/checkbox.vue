<template>
  <div class="form-item-box form-checkbox-box">
    <Checkbox v-model="val" v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import { Checkbox } from 'ant-design-vue'
export default {
  name: 'YdCheckbox',
  components: { Checkbox },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    val: {
      set: function (newV) {
        this.$emit('input', newV)
      },
      get: function () {
        return !!this.modelValue
      },
    },
  },
}
</script>
