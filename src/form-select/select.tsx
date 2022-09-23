import { defineComponent, toRefs, computed } from 'vue'
import props from './props'
import { Select } from 'ant-design-vue'

export default defineComponent({
  name: 'YdFormSelect',
  props,
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const { modelValue, item } = toRefs(props)
    const val = computed({
      get: () => modelValue.value,
      set: (v) => emit('update:modelValue', v),
    })

    return () => (
      <div class="form-item-box form-select-box">
        <Select v-model:value={val.value} options={item.value.options} {...attrs}></Select>
      </div>
    )
  },
})
