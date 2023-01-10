<template>
  <div class="form-item-box form-date-picker-box">
    <DatePicker v-model="val" v-bind="$attrs" v-on="$listeners" valueFormat="YYYY-MM-DD HH:mm:ss" />
  </div>
</template>

<script>
export default {
  name: 'YdDatePicker',
  props: {
    modelValue: {
      type: String,
      default: undefined,
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
