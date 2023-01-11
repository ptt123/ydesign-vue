import { PropType } from 'vue'
import { YdProFormProps } from './type'
export default {
  formData: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
  formConfig: {
    type: Array as PropType<YdProFormProps['formConfig']>,
    default: () => [],
  },
}
