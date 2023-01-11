import { PropType } from 'vue'
import { YdFormUploadProps } from './type'

export const uploadImgProps = {
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  item: {
    type: Object as PropType<YdFormUploadProps['uploadImgItem']>,
    default: () => ({}),
  },
}
export const uploadAudioProps = {
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  item: {
    type: Object as PropType<YdFormUploadProps['uploadAudioItem']>,
    default: () => ({}),
  },
}

export const uploadFileProps = {
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  item: {
    type: Object as PropType<YdFormUploadProps['uploadFileItem']>,
    default: () => ({}),
  },
}
export const uploadVideoProps = {
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  item: {
    type: Object as PropType<YdFormUploadProps['uploadVideoItem']>,
    default: () => ({}),
  },
}
