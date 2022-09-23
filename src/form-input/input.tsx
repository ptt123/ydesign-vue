import { defineComponent, toRefs, computed } from 'vue'
import props from './props'
import { Input } from 'ant-design-vue'

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
        <Input v-model:value={val.value} {...attrs}></Input>
      </div>
    )
  },
})
