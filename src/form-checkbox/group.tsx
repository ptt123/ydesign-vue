import { defineComponent, toRefs, computed } from 'vue'
import props from './checkbox-group-props'
import { CheckboxGroup } from 'ant-design-vue'

export default defineComponent({
  name: 'YdFormCheckboxGroup',
  props,
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const { modelValue, item } = toRefs(props)
    const val = computed({
      get: () => modelValue,
      set: (v) => emit('update:modelValue', v),
    })

    return () => (
      <div class="form-item-box form-checkbox-group-box">
        <CheckboxGroup v-model={val.value} options={item.value.options} {...attrs}></CheckboxGroup>
      </div>
    )
  },
})
