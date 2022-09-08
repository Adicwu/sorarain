# VirtualWaterfall 瀑布流虚拟列表

### 介绍
基于transform实现的瀑布流虚拟列表

### 引入

此组件引入即可使用

```js
import { AwVirtualWaterfall } from 'sorarain';
```



## 代码演示

### 基础用法



```vue
<template>
  <AwVirtualWaterfall
    :column="5"
    :request-size="50"
    :requset="fetch"
    :gap="26"
  >
    <!-- 内部已经做了循环处理，item相当于v-for的左侧内容 如 v-for="item in list" -->
    <template #item="{ item }"> 
        <div>{{ item.id }}</div>
    </template>
  </AwVirtualWaterfall>
</template>
```

```typescript
import { AwVirtualWaterfall, AwVirtualWaterfallRequset } from 'sorarain'

const fetch: AwVirtualWaterfallRequset = async (tpage, size) => {
  const { list, total } = await vilipixSearch({ // 接口参数看自己接口来定，关联 tpage当前页 size每页数量
    limit: size,
    offset: --tpage * size, 
  })
  return { // 根据类型约束，返回列表和接口返回的数据总数（非当前总数，指接口的实际数据总数）
    list,
    total
  }
}
```



## API



### Props

| 参数            | 说明               | 类型                                          | 默认值           |
| --------------- | ------------------ | --------------------------------------------- | ---------------- |
| target          | 滚动节点           | _string \| HTMLElement_                       | 此组件的根节点   |
| requset         | 新数据请求         | _AwVirtualWaterfallRequset（详情于类型定义）_ | 基于类型的空函数 |
| offsetY         | 滚底阈值差         | _number_                                      | 300              |
| column          | 列的总数           | _number_                                      | 3                |
| columnItemCount | 每列最小数量       | _number_                                      | 6                |
| requestSize     | 新数据请求每页大小 | _number_                                      | 0                |

### Event

| 事件名         | 说明                      | 回调参数 |
| -------------- | ------------------------- | -------- |
| onNoMoreResult | requset结果数量超出时触发 |          |

### Slots

| 名称 | 说明                                 |
| ---- | ------------------------------------ |
| item | 返回item参数，用于表示当前组件内部值 |

### 类型定义

组件导出以下类型定义：

```typescript
import { AwVirtualWaterfallRequset } from 'sorarain'
// AwVirtualWaterfallRequset 指 props-requset的类型
```



## 常见问题

### 容器高宽发生变化，内部会做什么处理

此组件会监听window高宽变化来进行内部重绘，暂为实现自身容器（非window变化导致）变化导致的高宽变化处理

### 滚动过快导致内部子元素渲染白屏

此组件没有考虑上下安全区问题，更推荐给子元素添加css动画，可完美处理出问题，且赋予其动效观感

### 内部元素为组件时会导致频繁重新渲染，如其生命周期，如何处理

目前并未找到从此组件内部实现的合适优化手段，目前建议只渲染单一节点；如果执意于组件，建议自行建立队列系统来判断其是否需要触发生命周期