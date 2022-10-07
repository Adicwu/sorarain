# useEventListener
::: warning
Vant源码里面抠出来的
:::

### 介绍
方便地进行事件绑定，在组件 mounted 和 activated 时绑定事件，unmounted 和 deactivated 时解绑事件。

## 代码演示
<CodeExample>
  <template #default>   

  ### 基础用法

  @[code{1-5} vue:no-line-numbers](../../\.vuepress/components/use-event-listener.vue)

  @[code{7-27} vue:no-line-numbers](../../\.vuepress/components/use-event-listener.vue)

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

  | 参数   | 说明           | 类型                                         | 默认值 |
  | ------ | -------------- | -------------------------------------------- | -- |
  | type | 监听的事件类型	 | `string`  | - |
  | listener | 事件回调函数 | `EventListener`  | - |
  | options | 可选的配置项 | `Options`  | - |

  </template>
</CodeExample>

<CodeExample>
  <template #default>   

  ### Options格式

  | 参数   | 说明           | 类型                                         | 默认值 |
  | ------ | -------------- | -------------------------------------------- | --- |
  | target | 绑定事件的元素 | `	EventTarget \| Ref<EventTarget>`  | `window` |
  | capture | 是否在事件捕获阶段触发 | `boolean`  | `false` |
  | passive | 设置为 true 时，表示 listener 永远不会调用 preventDefault | `boolean`  | `false` |

  </template>
</CodeExample>
