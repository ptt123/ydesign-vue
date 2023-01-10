<template>
  <div class="form-item-box form-select-remotely-box">
    <Select v-model="val" :options="options" v-bind="$attrs" v-on="$listeners" @change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'YdRemotelySelect',
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
