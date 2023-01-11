import { defineComponent, toRefs, computed } from 'vue'
import props from './props'

export default defineComponent({
  name: 'YdFormCheckbox',
  props: {
    ...props,
  },
  /** modelValue双向绑定 */
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const { modelValue } = toRefs(props)
    const val = computed({
      get: () => modelValue.value,
      set: (v) => emit('update:modelValue', +v!),
    })
    return () => (
      <div class="form-item-box form-checkbox-box">
        <lib-checkbox v-model:checked={val.value} {...attrs}></lib-checkbox>
      </div>
    )
  },
})
