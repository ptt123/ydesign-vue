import { defineComponent, toRefs, computed } from 'vue'
import Upload from '../upload/index'
import { uploadAudioProps } from './props'

export default defineComponent({
  name: 'YdFormUploadAudio',
  components: {
    Upload,
  },
  props: uploadAudioProps,
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
          fileType={['wav', 'mp3']}
          maxSize={1024000}
        ></Upload>
      </div>
    )
  },
})
