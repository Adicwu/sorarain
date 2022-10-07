# useElementRect

### 介绍
获取节点的响应式rect

## 代码演示
<CodeExample>
  <template #default>   

  ### 基础用法

  @[code{1-5} vue:no-line-numbers](../../\.vuepress/components/use-element-rect.vue)

  @[code{7-13} vue:no-line-numbers](../../\.vuepress/components/use-element-rect.vue)

  </template>
</CodeExample>

## API

<CodeExample>
  <template #default>   

  ### 参数

  | 参数   | 说明           | 类型                                         | 默认值 |
  | ------ | -------------- | -------------------------------------------- | ------ |
  | target | 绑定事件的元素 | `HTMLElement \| Ref<HTMLElement \| undefined>`  | - |

  </template>
</CodeExample>


<CodeExample>
  <template #default>   

  ### 返回值

  | 参数   | 说明           | 类型                                         |
  | ------ | -------------- | -------------------------------------------- |
  | rect | 节点的rect | `Rect`  |
  | update | 可以触发rect更新的函数 | `():void`  |

  </template>
</CodeExample>

<CodeExample>
  <template #default>   

  ### Rect格式

  | 参数   | 说明           | 类型                                         |
  | ------ | -------------- | -------------------------------------------- |
  | width | DOMRect.width | `number`  |
  | height | DOMRect.height | `number`  |
  | x | DOMRect.x | `number`  |
  | y | DOMRect.y | `number`  |
  | offsetTop | 节点原生属性 | `number`  |
  | offsetLeft | 节点原生属性  | `number`  |
  | update | 可以触发rect更新的函数 | `():void`  |

  </template>
</CodeExample>
