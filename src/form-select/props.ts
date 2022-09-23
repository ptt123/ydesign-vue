import { PropType } from 'vue'
import { YdFormSelectProps } from './type'
export default {
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | any[]>,
    default: undefined,
  },
  item: {
    type: Object as PropType<YdFormSelectProps['item']>,
    default: () => ({}),
  },
}
