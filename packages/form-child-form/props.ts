import { PropType } from 'vue'
import { YdFormChildFormProps } from './type'
export default {
  item: {
    type: Object as PropType<YdFormChildFormProps['item']>,
    default: () => ({}),
  },
  modelValue: {
    type: Array as PropType<Array<any>>,
    default: () => [],
  },
}
