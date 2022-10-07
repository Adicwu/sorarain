<template>
  <div @click="outer">
    <a href="#" @click="inner">click</a>
  </div>
</template>

<script lang="ts" setup>
import { preventDefault } from '@sorarain/use'
const outer = () => {
  console.log('outer click')
}

// 点击a标签时，不会改变地址栏，也不会触发outer方法
const inner = (e: Event) => {
  preventDefault(e)
  console.log('inner click')
}
</script>
