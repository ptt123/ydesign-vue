import { FormItem, SelectOption } from '../global'

export interface YdFormCheckboxProps {
  /** 表单项 */
  item: FormItem
  /** 绑定的值 */
  modelValue: boolean
}

export interface YdFormCheckboxGroupProps {
  /** 表单项 */
  item: FormItem & {
    options: Array<SelectOption>
  }
  /** 绑定的值 */
  modelValue: boolean
}
