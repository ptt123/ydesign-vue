<template>
  <div class="form-item-box form-select-remotely-box">
    <Select v-model="val" :options="options" v-bind="$attrs" @change="onChange" />
  </div>
</template>

<script>
import { Select } from 'ant-design-vue'
export default {
  name: 'YdRemotelySelect',
  components: { Select },
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
  methods: {
    onChange(e) {
      const value = [e].flat()
      const options = this.item.options.filter((option) => {
        return value.includes(option.value)
      })
      this.$emit('update:optionDetail', options)
    },
  },
}
</script>
