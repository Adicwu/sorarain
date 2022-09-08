# Drag 实体拖拽组件

### 介绍

*注意，此组件目前只支持Chromium内核的浏览器（如chrome/edge等）*

用于拖拽的**数据驱动型**组件

### 引入

此组件引入即可使用

```js
import { AwDrag } from 'sorarain';
```



## 代码演示

### 基础用法

```vue
<template>
  <!-- 注意 此组件会生成一个div标签 -->
  <AwDrag
    group-key="xsx"
    :self-key="1"      
  >
    <img src="https://tvax3.sinaimg.cn/large/008kBpBlgy1h37057ew9lj307409wq3m.jpg" />
  </AwDrag>
  <AwDrag
    group-key="xsx"
    :self-key="2"      
  >
    <img src="https://tvax3.sinaimg.cn/large/008kBpBlgy1h2sjo97niaj307409w74t.jpg" />
  </AwDrag>
</template>
```

### 配合ListVueTransition组件实现拖拽过渡并换位

```typescript
<template>
  <AwListVueTransition class="content">
    <AwDrag
      v-for="item in list"
      :key="item.id"
      draggable
      :self-key="item.id"
      :group-key="123"
      class="content-item"
      @exChange="onExChange"
    >
      <img :src="item.pic" alt="" />
    </AwDrag>
  </AwListVueTransition>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { AwDrag, AwListVueTransition, AwDragExchangeParam } from 'sorarain'
import { arrChildSwap } from '@sorarain/utils'
const list = ref([
  {
    id: 0,
    pic: 'https://tvax3.sinaimg.cn/large/008kBpBlgy1h37057ew9lj307409wq3m.jpg'
  },
  {
    id: 1,
    pic: 'https://tvax3.sinaimg.cn/large/008kBpBlgy1h2sjo97niaj307409w74t.jpg'
  },
  {
    id: 2,
    pic: 'https://tvax3.sinaimg.cn/large/008kBpBlgy1gxh7fsvomqj307409waat.jpg'
  }
])
const onExChange = (e: AwDragExchangeParam) => { // 触发交换
  const fromI = list.value.findIndex((item) => item.id === e.from)
  const toI = list.value.findIndex((item) => item.id === e.to)
  arrChildSwap(list.value, fromI, toI)
}
</script>
<style lang="less" scoped>
.content {
  display: flex;
  gap: 20px;
}
.content-item {
  position: relative;
  display: flex;
  img {
    width: 150px;
    height: 250px;
    object-fit: cover;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
```



## API



### Props

| 参数      | 说明                                  | 类型               | 默认值 |
| --------- | ------------------------------------- | ------------------ | ------ |
| draggable | 是否可拖动，否 则相当于此组件无效     | _boolean_          | true   |
| groupKey  | 可互相拖动组的公共key                 | _string \| number_ | 随机数 |
| selfKey   | 组件自身的key，用于拖拽完成后区分变化 | _string \| number_ | 随机数 |

### Event

| 事件名   | 说明                                      | 回调参数类型            | 回调参数说明      |
| -------- | ----------------------------------------- | ----------------------- | ----------------- |
| exChange | 当同groupKey不同selfKey组件，A拖入B时触发 | __AwDragExchangeParam__ | A、B的selfKey集合 |

### Slots

| 名称    | 说明                                 |
| ------- | ------------------------------------ |
| default | 返回item参数，用于表示当前组件内部值 |

### 类型定义

组件导出以下类型定义：

```typescript
import { AwDragExchangeParam } from 'sorarain'
// AwDrag 触发exChange时的回调参数
```



## 常见问题

### 为什么要点击两下才能正常拖拽

部分节点本身存在拖拽事件，如img标签；需要在其上层添加样式遮罩，如 `配合ListVueTransition组件实现拖拽过渡并换位` 所示，也可以禁用img的默认事件

