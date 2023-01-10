<template>
  <div class="form-item-box form-checkbox-box">
    <Checkbox v-model="val" v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
export default {
  name: 'YdCheckbox',
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
