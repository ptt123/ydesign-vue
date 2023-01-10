import { defineComponent, toRefs, computed } from 'vue'
import props from './props'

export default defineComponent({
  name: 'YdFormInput',
  props,
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const { modelValue } = toRefs(props)
    const val = computed({
      get: () => modelValue.value,
      set: (v) => emit('update:modelValue', v),
    })

    return () => (
      <div class="form-item-box form-input-box">
        <lib-input v-model:value={val.value} {...attrs}></lib-input>
      </div>
    )
  },
})
