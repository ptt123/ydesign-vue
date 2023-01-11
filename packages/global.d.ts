declare type FormItemType =
  | 'input'
  | 'textarea'
  | 'datetime-picker'
  | 'datetime-range-picker'
  | 'select'
  | 'select-remotely'
  | 'checkbox'
  | 'checkbox-group'
  | 'upload-img'
  | 'child-form'
  | 'upload-audio'
  | 'upload-file'
  | 'upload-video'

declare interface FormItem {
  /** 表单项文本 */
  label?: string
  /** 表单项占位符 */
  placeholder?: string
  /** 表单项类型 */
  type: FormItemType
  /** 表单项绑定的key */
  key: string
  /** date-time-range-picker表单项绑定的startKey */
  startKey?: string
  /** date-time-range-picker表单项绑定的endKey */
  endKey?: string
  /** normal-select表单项的可选项 */
  options?: Array<SelectOption>
  /** 校验规则 */
  rule?: Array<FormRule>
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
  /** select框属性 可搜索 */
  filterable?: boolean
  /** select框属性 可多选 */
  multiple?: boolean
  /** 默认值 */
  defaultValue?: any
  /** 关联的表单项key */
  linkKey?: string
  /** 管理的表单项value */
  linkValue?: string | number | any[]
  colSpan?: number
  /** labelCol {span: 3, offset: 12}*/
  labelColSpan?: number
  labelColOffset?: number
  /** wrapperCol {span: 3, offset: 12}*/
  wrapperColSpan?: number
  wrapperColOffset?: number
  /** 其他任意字段 */
  [key: string]: any
}

declare type SelectOption = {
  label: string
  value: string | number
  disabled?: boolean
  bindData?: Record<string, any>
}

declare interface FormRule {
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

declare type CustomValidator = (
  rule: any,
  value: any,
  callback: any,
) => CustomValidateResolveType | Promise<CustomValidateResolveType>

declare type CustomValidateResolveType = boolean | CustomValidateObj

declare interface CustomValidateObj {
  result: boolean
  message: string
  type?: 'error' | 'warning' | 'success'
}

declare type Transform = (value: any) => any

declare interface FormConfig {
  label: string // 表单分块名称
  children: Array<FormItem> // 表单中的form-item
}
