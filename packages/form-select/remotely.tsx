import { defineComponent, computed, toRefs } from 'vue'
import props from './props'

export default defineComponent({
  name: 'YdFormSelectRemotely',
  props,
  emits: ['update:modelValue', 'update:optionDetail'],
  setup(props, { emit, attrs }) {
    const { modelValue, item } = toRefs(props)
    let val = computed({
      get: () => modelValue.value,
      set: (v) => emit('update:modelValue', v),
    })

    const onChange = (e: any) => {
      const value = [e].flat()
      // 单选
      const options = item.value.options.filter((option) => {
        return value.includes(option.value)
      })
      emit('update:optionDetail', options)
    }

    return () => (
      <div class="form-item-box form-select-remotely-box">
        <lib-select
          v-model:value={val.value}
          options={item.value.options}
          {...attrs}
          onChange={onChange}
        ></lib-select>
      </div>
    )
  },
})
