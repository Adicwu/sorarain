# useRelation
::: warning
Vant源码里面抠出来的
:::

### 介绍
建立父子组件之间的关联关系，进行数据通信和方法调用，基于 provide 和 inject 实现。

## 代码演示
<CodeExample>
  <template #default>   

  ### 基础用法
  
  在父组件中使用 `useChildren` 关联子组件:
  @[code{5-20} vue:no-line-numbers](../../\.vuepress/components/use-relation-p.vue)

  在子组件中使用 `useParent` 获取父组件提供的数据和方法:
  @[code{5-15} vue:no-line-numbers](../../\.vuepress/components/use-relation-c.vue)

  </template>
</CodeExample>

## API

<CodeExample>
  <template #default>   

  ### useParent 返回值

  | 参数   | 说明           | 类型                                         |
  | ------ | -------------- | -------------------------------------------- |
  | parent | 父组件提供的值	 | `any`  |
  | index | 当前组件在父组件的所有子组件中对应的索引位置		 | `Ref<number>`  |

  </template>
</CodeExample>


<CodeExample>
  <template #default>   

  ### useChildren 返回值

  | 参数   | 说明           | 类型                                         |
  | ------ | -------------- | -------------------------------------------- |
  | children | 子组件列表		 | `ComponentPublicInstance[]`  |
  | linkChildren | 向子组件提供值的方法			 | `(value: any):void`  |

  </template>
</CodeExample>
