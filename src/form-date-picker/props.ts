import { PropType } from 'vue'
import { YdFormDatePickerProps } from './type'
export default {
  modelValue: {
    type: String,
    default: undefined,
  },
  item: {
    type: Object as PropType<YdFormDatePickerProps['item']>,
    default: () => ({}),
  },
}
