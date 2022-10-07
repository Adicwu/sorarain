# preventDefault

### 介绍 
禁止事件的默认触发，同时可以选择禁用冒泡

## 代码演示
<CodeExample>
  <template #default>   

  ### 基础用法

  @[code{1-5} vue:no-line-numbers](../../\.vuepress/components/prevent-default.vue)

  @[code{7-18} vue:no-line-numbers](../../\.vuepress/components/prevent-default.vue)

  </template>
</CodeExample>

## API

<CodeExample>
  <template #default>   

  ### 参数

  | 参数   | 说明           | 类型                                         | 默认值  |
  | ------ | -------------- | -------------------------------------------- | - |
  | e | 事件的`Event对象` | `Event`  | - |
  | isStopPropagation | 是否阻止冒泡 | `boolean`  | `true` |

  </template>
</CodeExample>