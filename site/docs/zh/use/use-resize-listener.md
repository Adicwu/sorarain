# useResizeListener

### 介绍 
节点重绘监听

## 代码演示
<CodeExample>
  <template #default>   

  ### 基础用法

  @[code{7-15} vue:no-line-numbers](../../\.vuepress/components/use-resize-listener.vue)

  </template>
</CodeExample>

## API

<CodeExample>
  <template #default>   

  ### 参数

  | 参数   | 说明           | 类型                                         |
  | ------ | -------------- | -------------------------------------------- |
  | target | 监听重绘的元素 | `HTMLElement \| Ref<HTMLElement \| undefined> \| (() => HTMLElement \| null)`  |
  | cb | 重绘时触发的回调 | `():void`  |

  </template>
</CodeExample>