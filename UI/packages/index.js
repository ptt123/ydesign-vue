import * as components from './components'

// 这里是按需引入
export * from './components'

// 全局引入
export function install(Vue, options) {
  if (install.installed) return // 避免重复安装
  Object.keys(components).forEach((key) => {
    Vue.use(components[key])
    const { OSS } = options
    Vue.prototype.$OSS = OSS
  })
}

export default {
  install,
}
