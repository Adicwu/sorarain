<template>
  <div class=""></div>
</template>

<script lang="ts" setup>
import { useParent } from '@sorarain/use'

const { parent } = useParent(RELATION_KEY)

// 调用父组件提供的数据和方法
if (parent) {
  parent.add()
  console.log(parent.count.value) // -> 1
}
</script>
