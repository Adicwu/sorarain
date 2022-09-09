# VirtualWaterfall 瀑布流虚拟列表

### 介绍
基于transform实现的瀑布流虚拟列表

### 引入

此组件引入即可使用

```typescript
import { AwVirtualWaterfall } from 'sorarain';
```



## 代码演示

### 基础用法

<!-- virtual-waterfall-1 -->
<CodeShow>
  <template #source>
    <ClientOnly>
      <virtual-waterfall-1 />
    </ClientOnly>
  </template>
  <template #meta>
  
  @[code vue{3-6,14,16-17,25-27,41,48,50-59}:no-line-numbers](../../\.vuepress/components/virtual-waterfall-1.vue)
  
  </template>
</CodeShow>

## API



### Props

| 参数            | 说明               | 类型                                          | 默认值           |
| --------------- | ------------------ | --------------------------------------------- | ---------------- |
| target          | 滚动节点           | _string \| HTMLElement_                       | 此组件的根节点   |
| request         | 新数据请求         | _AwVirtualWaterfallRequest（详情于类型定义）_ | 基于类型的空函数 |
| offsetY         | 滚底阈值差         | _number_                                      | 300              |
| column          | 列的总数           | _number_                                      | 3                |
| columnItemCount | 每列最小数量       | _number_                                      | 6                |
| requestSize     | 新数据请求每页大小 | _number_                                      | 0                |

### Event

| 事件名         | 说明                      | 回调参数 |
| -------------- | ------------------------- | -------- |
| onNoMoreResult | request结果数量超出时触发 |          |

### Slots

| 名称 | 说明                                 |
| ---- | ------------------------------------ |
| item | 返回item参数，用于表示当前组件内部值 |

### 类型定义

组件导出以下类型定义：

```typescript
import { AwVirtualWaterfallRequest } from 'sorarain'
// AwVirtualWaterfallRequest 指 props-request的类型
```



## 常见问题

### 容器高宽发生变化，内部会做什么处理

此组件会监听window高宽变化来进行内部重绘，暂为实现自身容器（非window变化导致）变化导致的高宽变化处理

### 滚动过快导致内部子元素渲染白屏

此组件没有考虑上下安全区问题，更推荐给子元素添加css动画，可完美处理出问题，且赋予其动效观感

### 内部元素为组件时会导致频繁重新渲染，如其生命周期，如何处理

目前并未找到从此组件内部实现的合适优化手段，目前建议只渲染单一节点；如果执意于组件，建议自行建立队列系统来判断其是否需要触发生命周期