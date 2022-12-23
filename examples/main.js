import Vue from 'vue'
import App from './App.vue'

import '../UI/css/test.less'
import Test from '../UI/packages/test/index'
Vue.use(Test)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
