/* eslint-disable */
import { PropType } from 'vue'
import { YdFormCheckboxGroupProps } from './type'

export default {
  /** 表单项 */
  item: {
    type: Object as PropType<YdFormCheckboxGroupProps['item']>,
    default: () => ({}),
  },
  modelValue: {
    type: Array as PropType<string[]>,
    require: true,
    default: undefined,
  },
}
