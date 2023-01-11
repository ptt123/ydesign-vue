import { computed, defineComponent, toRefs } from 'vue'
import Upload from '../upload/index'
import { uploadImgProps } from './props'

export default defineComponent({
  name: 'YdFormUploadImg',
  components: { Upload },
  props: uploadImgProps,
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const { modelValue } = toRefs(props)
    const val = computed({
      get: () => modelValue.value,
      set: (v) => emit('update:modelValue', v),
    })
    return () => (
      <div class="form-item-box form-upload-box">
        <Upload v-model:fileList={val.value} {...attrs}></Upload>
      </div>
    )
  },
})
