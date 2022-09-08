# 快速开始

本节将介绍如何在项目中使用 Sorarain



## 用法

### 手动导入

Sorarain 提供了基于 ES Module 开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。也通过 Gulp 手动实现了组件内置样式。

终上所述，直接用就行了

> App.vue

```vue
<template>
  <AwDrag>I can drag</AwDrag>
</template>
<script>
  import { AwDrag } from 'sorarain'
  export default {
    components: { AwDrag },
  }
</script>
```

