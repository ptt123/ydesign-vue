<template>
  <div class="form-item-box form-input-box">
    <Input v-model="val" v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
export default {
  name: 'YdInput',
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
