<template>
  <div class="form-item-box form-select-box">
    <Select v-model="val" :options="options" v-bind="$attrs" v-on="$listeners" allowClear />
  </div>
</template>

<script>
// import { Select } from 'ant-design-vue'
export default {
  name: 'YdSelect',
  // components: { Select },
  props: {
    modelValue: {
      type: [String, Number, Array],
      default: undefined,
    },
    options: {
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
