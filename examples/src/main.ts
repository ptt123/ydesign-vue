import { createApp } from 'vue'
import OSS from 'ali-oss'
import {
  Checkbox,
  CheckboxGroup,
  Input,
  Textarea,
  Select,
  DatePicker,
  RangePicker,
  Form,
  FormItem,
  Row,
  Col,
} from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

// import YDesign from '../../packages/index'
// @ts-ignore
import YDesign from '../../dist/ydesign.umd'
import '../../dist/style.css'

import App from './App.vue'

const app = createApp(App)
app.component('LibCheckbox', Checkbox)
app.component('LibCheckboxGroup', CheckboxGroup)
app.component('LibInput', Input)
app.component('LibTextarea', Textarea)
app.component('LibSelect', Select)
app.component('LibDatePicker', DatePicker)
app.component('LibRangePicker', RangePicker)
app.component('LibForm', Form)
app.component('LibFormItem', FormItem)
app.component('LibRow', Row)
app.component('LibCol', Col)

app.provide('OSS', OSS)

app.use(YDesign).mount('#app')
