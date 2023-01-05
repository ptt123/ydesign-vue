<template>
  <div class="form-item-box form-range-picker-box">
    <RangePicker
      v-model="val"
      v-bind="$attrs"
      @change="onChange"
      v-on="$listeners"
      valueFormat="YYYY-MM-DD HH:mm:ss"
    />
  </div>
</template>

<script>
// import { DatePicker } from 'ant-design-vue'
export default {
  name: 'YdRangePicker',
  components: {
    // RangePicker: DatePicker.RangePicker,
  },
  props: {
    modelValue: {
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
    onChange(dates) {
      this.emit('update:startKey', dates[0])
      this.emit('update:endKey', dates[1])
    },
  },
}
</script>
