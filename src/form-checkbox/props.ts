import { PropType } from 'vue'
import { FormItem } from './type'

export default {
  /** 表单项 */
  item: {
    type: Object as PropType<FormItem>,
    default: () => ({}),
  },
  /** 绑定的值 */
  modelValue: {
    type: Boolean,
    required: true,
    default: undefined,
  },
}
