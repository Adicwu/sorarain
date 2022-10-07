# elVisibleObserver

### 介绍 
节点可见监听

## 代码演示
<CodeExample>
  <template #default>   

  ### 基础用法

  @[code{1-3} vue:no-line-numbers](../../\.vuepress/components/el-visible-observer.vue)

  @[code{5-16} vue:no-line-numbers](../../\.vuepress/components/el-visible-observer.vue)

  </template>
</CodeExample>

## API

<CodeExample>
  <template #default>   

  ### 参数

  | 参数   | 说明           | 类型                                         |
  | ------ | -------------- | -------------------------------------------- |
  | target | 需要监听的节点 | `HTMLElement`  |
  | cb | 可见时的回调，只会触发一次 | `():void`  |

  </template>
</CodeExample>