import {
  onMountedOrActivated,
  useEventListener
} from '../index'
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
    update
  })
  const root = document.body

  function update() {
    const el = unrefEl(target)
    if (!el) return
    const { width, height, x, y } = el.getBoundingClientRect()
    Object.assign(rect, {
      width,
      height,
      x,
      y: y + root!.scrollTop
    })
  }
  // useResizeListener(target, debounce(update, 300))
  useEventListener('resize', update, {
    target: window
  })
  onMountedOrActivated(update)
  return rect
}
