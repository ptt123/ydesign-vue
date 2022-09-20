import { App } from 'vue'
import * as components from './components'
import 'ant-design-vue/dist/antd.css'

export * from './components'
export function install(app: App, config?: Record<string, unknown>): void {
  Object.keys(components).forEach((key) => {
    ;/plugin/i.test(key) ? app.use(components[key]) : app.use(components[key], config)
  })
}

export default {
  install,
}
