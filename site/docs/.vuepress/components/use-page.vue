<template>
  <div class=""></div>
</template>

<script lang="ts" setup>
import { usePageIn, usePageOut } from '@sorarain/use'

// 进入监听
usePageIn(() => {
  console.log('am in')
})
// 离开监听
usePageOut(() => {
  console.log('am out')
})
</script>
