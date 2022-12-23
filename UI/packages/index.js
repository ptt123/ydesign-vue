import * as components from './components'
import 'ant-design-vue/dist/antd.css'

// 这里是按需引入
export * from './components'

// 全局引入
export function install(Vue) {
  if (install.installed) return // 避免重复安装
  Object.keys(components).forEach((key) => {
    Vue.use(components[key])
  })
}

export default {
  install,
}
