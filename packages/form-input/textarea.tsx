import { defineComponent, toRefs, computed } from 'vue'
import props from './props'

export default defineComponent({
  name: 'YdFormTextarea',
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
        <lib-textarea v-model:value={val.value} {...attrs} auto-size></lib-textarea>
      </div>
    )
  },
})
