import { onMountedOrActivated, useEventListener } from '../index'
import { isRef, reactive, Ref } from 'vue'
type ElTarget = HTMLElement | Ref<HTMLElement | undefined>

function unrefEl(el: ElTarget) {
  return isRef(el) ? el.value : el
}

export function useElementRect(target: ElTarget) {
  const rect = reactive({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    offsetTop: 0,
    offsetLeft: 0,
    update
  })
  function update() {
    const el = unrefEl(target)
    if (!el) return
    const { width, height, x, y } = el.getBoundingClientRect()
    Object.assign(rect, {
      width,
      height,
      x,
      y,
      offsetTop: el.offsetTop,
      offsetLeft: el.offsetLeft
    })
  }
  useEventListener('resize', update, {
    target: window
  })
  onMountedOrActivated(update)

  return {
    rect,
    update
  }
}
