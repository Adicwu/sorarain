# ListVueTransition 列表CURD过渡

### 介绍

基于`transition-group`封装的列表动画组件，当内部列表发生CURD时，会触发对应的移动动画

### 引入

此组件引入即可使用

```js
import { AwListVueTransition } from 'sorarain';
```



## 代码演示

### 基础用法

```vue
<template>
  <AwListVueTransition class="box">
    <div v-for="item in list" :key="item" class="box-item">{{ item }}</div>
  </AwListVueTransition>
  <button @click="list.push((Math.random() * 100) | 0)">add</button>
  <button @click="list.shift()">shift</button>
  <button @click="list.pop()">pop</button>
</template>

<script lang="ts" setup>
import { AwListVueTransition } from 'sorarain'
import { ref } from 'vue'
const list = ref([0, 1, 2, 3])
</script>
<style lang="less" scoped>
.box {
  display: flex;
  gap: 20px;
  width: 600px;
  flex-wrap: wrap;
  &-item {
    width: 200px;
    font-size: 22px;
    background: crimson;
  }
}
</style>
```



## API

### Slots

| 名称    | 说明 |
| ------- | ---- |
| default |      |

