import { defineComponent, computed, toRefs } from 'vue'
import props from './range-picker-props'

export default defineComponent({
  name: 'YdFormRangePicker',
  props,
  emits: ['update:modelValue', 'update:startKey', 'update:endKey'],
  setup(props, { emit, attrs }) {
    const { modelValue } = toRefs(props)
    const val = computed({
      get: () => modelValue.value,
      set: (v) => emit('update:modelValue', v),
    })
    const onChange = (dates: any[]) => {
      emit('update:startKey', dates[0])
      emit('update:endKey', dates[1])
    }

    return () => (
      <div class="form-item-box form-range-picker-box">
        <lib-rangePicker
          v-model:value={val.value}
          {...attrs}
          onChange={onChange}
          valueFormat="YYYY-MM-DD HH:mm:ss"
        ></lib-rangePicker>
      </div>
    )
  },
})
