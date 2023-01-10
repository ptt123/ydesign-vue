import { defineComponent, toRefs, computed } from 'vue'
import props from './checkbox-group-props'

export default defineComponent({
  name: 'YdFormCheckboxGroup',
  props,
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const { modelValue, item } = toRefs(props)
    const val = computed({
      get: () => modelValue.value,
      set: (v) => emit('update:modelValue', v),
    })

    return () => (
      <div class="form-item-box form-checkbox-group-box">
        <lib-checkboxGroup
          v-model:value={val.value}
          options={item.value.options}
          {...attrs}
        ></lib-checkboxGroup>
      </div>
    )
  },
})
