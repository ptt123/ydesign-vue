import Vue from 'vue'
import App from './App.vue'
import { Select, Input, Checkbox, DatePicker, FormModel, Row, Col } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import OSS from 'ali-oss'

import '../UI/css/index.less'
import Ydesign from '../UI/packages/index'

// import Ydesign from '../dist/ydesign.umd.js'
// import '../dist/ydesign.css'

// eslint-ignore
Vue.component('Select', Select)
Vue.component('Input', Input)
Vue.component('Checkbox', Checkbox)
Vue.component('DatePicker', DatePicker)
Vue.component('RangePicker', DatePicker.RangePicker)
Vue.component('FormModel', FormModel)
Vue.component('FormModelItem', FormModel.Item)
Vue.component('Col', Col)
Vue.component('Row', Row)

Vue.use(Ydesign, { OSS })

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
