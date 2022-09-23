import { PropType } from 'vue'
import { YdFormDatePickerProps } from './type'

export default {
  item: {
    type: Object as PropType<YdFormDatePickerProps['item']>,
    default: undefined,
  },
  modelValue: {
    type: Array as PropType<any[]>,
    default: undefined,
  },
}
