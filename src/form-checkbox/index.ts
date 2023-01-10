import _Checkbox from './checkbox'
import _CheckboxGroup from './group'
import withInstall from '../utils/withInstall'

// 按需导出
export const FormCheckbox: any = withInstall(_Checkbox)
export const FormCheckboxGroup = withInstall(_CheckboxGroup)
export default FormCheckbox
