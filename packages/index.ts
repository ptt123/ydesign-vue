import { App } from 'vue'
import * as components from './components'

export * from './components'
export function install(app: App): void {
  Object.keys(components).forEach((key) => {
    app.use(components[key])
  })
}

export default {
  install,
}
