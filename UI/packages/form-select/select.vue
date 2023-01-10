<template>
  <div class="form-item-box form-select-box">
    <Select v-model="val" :options="options" v-bind="$attrs" allowClear />
  </div>
</template>

<script>
export default {
  name: 'YdSelect',
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
