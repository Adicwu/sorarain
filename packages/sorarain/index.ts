import { App } from 'vue'
import * as Ctx from './src'

export * from './src'

export default {
  install(app: App) {
    const keys = Object.keys(Ctx) as (keyof typeof Ctx)[]
    keys.forEach((k) => {
      app.component(Ctx[k].name, Ctx[k])
    })
  }
}
