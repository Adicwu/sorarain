import { mountComponent } from '@sorarain/use'
import { ComponentPublicInstance } from 'vue'
import Component from './Index.vue' // 这里需要引入你需要转换为函数式的源组件

// eslint-disable-next-line @typescript-eslint/ban-types
let instance: ComponentPublicInstance<{}, any>

function initInstance() {
  ;({ instance } = mountComponent(Component))
}
const MyComponent = (options: {}) => {
  !instance && initInstance()
  instance.init(options) // 此方法为Component实例所暴露的函数，用于初始化组件
  return instance
}
export { MyComponent }

// 之后在任意文件中，引入并调用MyComponent函数便能使用组件
