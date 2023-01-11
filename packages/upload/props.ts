import { PropType } from 'vue'

export default {
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 上传文件数量限制 */
  maxLength: {
    type: Number,
    default: 9,
  },
  /** 上传文件的大小限制kb */
  maxSize: {
    type: Number,
    default: 200,
  },
  /** 上传文件类型 */
  fileType: {
    type: [Array, String] as PropType<string | string[]>,
    default: ['png', 'jpg', 'jpeg'],
  },
  /** 上传到Bucket中的文件夹名称 */
  dir: {
    type: String,
    default: 'default',
  },
  /** 上传到dir下的文件名 */
  fileName: {
    type: String,
    default: undefined,
  },
  /** 默认资源列表 */
  fileList: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
}
