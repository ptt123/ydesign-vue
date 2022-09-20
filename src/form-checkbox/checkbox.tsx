import { defineComponent, toRefs, computed } from 'vue'
import { Checkbox } from 'ant-design-vue'
import props from './props'

export default defineComponent({
  name: 'YdFormCheckbox',
  props: {
    ...props,
  },
  /** modelValue双向绑定 */
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue, item } = toRefs(props)
    const val = computed({
      get: () => modelValue,
      set: (v) => emit('update:modelValue', +v),
    })
    return () => (
      <div class="form-item-box form-checkbox-box">
        <Checkbox v-model:checked={val.value}>{item.value.label}</Checkbox>
      </div>
    )
  },
})
