import { defineComponent, computed, toRefs } from 'vue'
import { DatePicker } from 'ant-design-vue'
import props from './props'

export default defineComponent({
  name: 'YdFormDatePicker',
  props,
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const { modelValue } = toRefs(props)
    const val = computed({
      get: () => modelValue.value,
      set: (v) => emit('update:modelValue', v),
    })

    return () => (
      <div class="form-item-box form-date-picker-box">
        <DatePicker
          v-model:value={val.value}
          {...attrs}
          valueFormat="YYYY-MM-DD HH:mm:ss"
        ></DatePicker>
      </div>
    )
  },
})
