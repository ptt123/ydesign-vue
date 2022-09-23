import { defineComponent, toRefs, computed } from 'vue'
import props from './props'
import { Textarea } from 'ant-design-vue'

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
        <Textarea v-model:value={val.value} {...attrs} auto-size></Textarea>
      </div>
    )
  },
})
