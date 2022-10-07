<template>
  <div ref="el"></div>
</template>

<script lang="ts" setup>
import { elVisibleObserver } from '@sorarain/use'
import { ref, onMounted } from 'vue'

const el = ref<HTMLElement>()

onMounted(() => {
  elVisibleObserver(el.value, () => {
    console.log('el show')
  })
})
</script>
