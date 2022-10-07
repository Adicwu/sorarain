<template>
  <div ref="el" class="test" style="width: 100%">
    {{ rect }}
  </div>
</template>

<script lang="ts" setup>
import { useElementRect } from '@sorarain/use'
import { ref } from 'vue'

const el = ref<HTMLElement>()
const { rect, update } = useElementRect(el)
</script>
