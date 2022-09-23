import { PropType } from 'vue'
import { YdFormInputProps } from './type'

export default {
  item: {
    type: Object as PropType<YdFormInputProps['item']>,
    default: undefined,
  },
  modelValue: {
    type: String,
    default: undefined,
  },
}
