# usePage

### 介绍 
原生生命周期`onActivated,onBeforeUnmount,onDeactivated,onMounted`的整合体，用于判断组件的离开和进入

## 代码演示
<CodeExample>
  <template #default>   

  ### 基础用法

  @[code{5-16} vue:no-line-numbers](../../\.vuepress/components/use-page.vue)

  </template>
</CodeExample>

## API

<CodeExample>
  <template #default>   

  ### usePageIn参数

  | 参数   | 说明           | 类型                                         | 默认值 |
  | ------ | -------------- | -------------------------------------------- | ------ |
  | cb | 进入时执行的函数 | `():void`  | - |

  </template>
</CodeExample>

<CodeExample>
  <template #default>   

  ### usePageOut参数

  | 参数   | 说明           | 类型                                         | 默认值 |
  | ------ | -------------- | -------------------------------------------- | ------ |
  | cb | 进入时执行的函数 | `():void`  | - |

  </template>
</CodeExample>