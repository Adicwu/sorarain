import {
  nextTick,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted
} from 'vue'

/**
 * 页面/组件 进入
 * @param hook
 */
export function usePageIn(hook: () => void) {
  let mounted: boolean

  onMounted(() => {
    hook()
    nextTick(() => {
      mounted = true
    })
  })

  onActivated(() => {
    if (mounted) {
      hook()
    }
  })
}

/**
 * 页面/组件 离开
 * @param hook
 */
export function usePageOut(hook: () => void) {
  onBeforeUnmount(hook)
  onDeactivated(hook)
}
