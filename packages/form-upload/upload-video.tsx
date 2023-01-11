import { defineComponent, toRefs, computed } from 'vue'
import Upload from '../upload/index'
import { uploadVideoProps } from './props'

export default defineComponent({
  name: 'YdFormUploadVideo',
  components: {
    Upload,
  },
  props: uploadVideoProps,
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const { modelValue } = toRefs(props)
    const val = computed({
      get: () => modelValue.value,
      set: (v) => emit('update:modelValue', v),
    })
    return () => (
      <div class="form-item-box form-upload-box">
        <Upload
          v-model:fileList={val.value}
          {...attrs}
          fileType={['mp4']}
          maxSize={1024000}
        ></Upload>
      </div>
    )
  },
})
