<template>
  <transition-group name="list-complete" :tag="tag" @before-leave="beforeLeave">
    <slot />
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style/index.less'

export default defineComponent({
  name: 'AwListVueTransition',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup() {
    const beforeLeave = (el: Element) => {
      const realEl = el as HTMLElement
      const { width, height } = realEl.getBoundingClientRect()
      realEl.style.width = `${width}px`
      realEl.style.height = `${height}px`
    }
    return {
      beforeLeave
    }
  }
})
</script>
