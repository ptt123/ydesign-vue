export interface YdFormCheckboxProps {
  /** 表单项 */
  item: FormItem
  /** 绑定的值 */
  modelValue: boolean
}

export interface FormItem {
  /** 表单项文本 */
  label?: string
  /** 表单项占位符 */
  placeholder?: string
  /** 表单项类型 */
  type: 'checkbox'
  /** 表单项绑定的key */
  key: string
  /** date-time-range-picker表单项绑定的startKey */
  startKey?: string
  /** date-time-range-picker表单项绑定的endKey */
  endKey?: string
  /** normal-select表单项的可选项 */
  options?: Array<SelectOption>
  /** 校验规则 */
  rule?: FormRule
  /** 子表title及新增按钮文案 */
  headerLabel?: string
  /** 子表是否可删除 */
  deleteEnable?: boolean
  /** 子表是否可新增 */
  addEnable?: boolean
  /** 子表最大个数 */
  addMaxLength?: number
  /** 子表新增按钮文案 */
  addBtnLabel?: string
  /** 子表 */
  childrenForm?: Array<FormItem>
}

export type SelectOption = {
  label: string
  value: string | number
}

export interface FormRule {
  /** 是否必填 */
  required?: boolean
  /** 错误消息 */
  message?: string
  /** 校验触发方式 */
  trigger?: 'change' | 'blur'
  /** 错误消息类型， 有 告警信息提示 和 错误信息提示 等两种*/
  type?: 'error' | 'warning'
  /** 自定义校验规则 */
  validator?: CustomValidator
  /** 校验值是否符合正则表达式匹配结果 */
  pattern?: RegExp
  /** 转换结果 示例：`{ transform: (value) => {return value + ''} }将value转换为字符串`*/
  transform?: Transform
}

export type CustomValidator = (
  rule: any,
  value: any,
  callback: any,
) => CustomValidateResolveType | Promise<CustomValidateResolveType>

export type CustomValidateResolveType = boolean | CustomValidateObj

export interface CustomValidateObj {
  result: boolean
  message: string
  type?: 'error' | 'warning' | 'success'
}

export type Transform = (value: any) => any
