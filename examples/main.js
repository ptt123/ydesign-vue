import Vue from 'vue'
import App from './App.vue'

import '../UI/css/index.less'
import Ydesign from '../UI/packages/index'
Vue.use(Ydesign)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
