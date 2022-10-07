<template>
  <div ref="el" class="test" style="width: 100%">
    {{ rect }}
  </div>
</template>

<script lang="ts" setup>
import { useResizeListener } from '@sorarain/use'
import { ref } from 'vue'

const el = ref<HTMLElement>()
useResizeListener(el, () => {
  console.log('el resize')
})
</script>
