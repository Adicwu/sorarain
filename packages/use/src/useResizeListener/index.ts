import { onDeactivated, onUnmounted, Ref, unref } from 'vue'
import { usePageIn } from '../usePage'

/**
 * 节点重绘监听
 * @param el
 * @param callback
 */
export function useResizeListener(
  el: HTMLElement | Ref<HTMLElement | undefined> | (() => HTMLElement | null),
  callback: () => void
) {
  let ob: ResizeObserver | null

  const add = () => {
    const element = typeof el === 'function' ? el() : unref(el)

    if (element && !ob) {
      ob = new ResizeObserver(callback)
      ob.observe(element)
    }
  }

  const remove = () => {
    const element = typeof el === 'function' ? el() : unref(el)

    if (element && ob) {
      ob.disconnect()
      ob = null
    }
  }

  onUnmounted(remove)
  onDeactivated(remove)
  usePageIn(add)
}
