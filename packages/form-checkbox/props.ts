import { PropType } from 'vue'
import { YdFormCheckboxProps } from './type'

export default {
  /** 表单项 */
  item: {
    type: Object as PropType<YdFormCheckboxProps['item']>,
    default: () => ({}),
  },
  /** 绑定的值 */
  modelValue: {
    type: Boolean,
    required: true,
    default: undefined,
  },
}
