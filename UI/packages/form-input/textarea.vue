<template>
  <div class="form-item-box form-input-box">
    <Input type="textarea" v-model="val" v-bind="$attrs" v-on="$listeners" auto-size />
  </div>
</template>

<script>
// import { Input } from 'ant-design-vue'
export default {
  name: 'YdTextarea',
  // components: { Input },
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
