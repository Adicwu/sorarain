<template>
  <div
    style="width: 100px; height: 100px; background: #000"
    v-click-outside="test"
  ></div>
</template>

<script lang="ts" setup>
import { clickOutside as vClickOutside } from '@sorarain/use'

const test = () => {
  console.log('out click')
}
</script>
