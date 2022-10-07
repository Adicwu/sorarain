<template>
  <div ref="el" class="test">
    {{ rect }}
  </div>
</template>

<script lang="ts" setup>
import { useEventListener } from '@sorarain/use'
import { ref } from 'vue'

const el = ref<HTMLElement>()

// 在 window 上绑定 resize 事件
// 未指定监听对象时，默认会监听 window 的事件
useEventListener('resize', () => {
  console.log('window resize')
})

// 在 el 元素上绑定 click 事件
useEventListener(
  'click',
  () => {
    console.log('click el')
  },
  el
)
</script>
