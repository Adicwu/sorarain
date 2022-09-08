import {
  Ref,
  unref,
  onUnmounted,
  onDeactivated,
  nextTick,
  onMounted,
  onActivated
} from 'vue'
export function onMountedOrActivated(hook: () => void) {
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
// eslint-disable-next-line
export let supportsPassive = false;

export type UseEventListenerOptions = {
  target?: EventTarget | Ref<EventTarget | undefined>
  capture?: boolean
  passive?: boolean
}

export function useEventListener(
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {}
) {
  const { target = window, passive = false, capture = false } = options

  let attached: boolean

  const add = () => {
    const element = unref(target)

    if (element && !attached) {
      element.addEventListener(
        type,
        listener,
        supportsPassive ? { capture, passive } : capture
      )
      attached = true
    }
  }

  const remove = () => {
    const element = unref(target)

    if (element && attached) {
      element.removeEventListener(type, listener, capture)
      attached = false
    }
  }

  onUnmounted(remove)
  onDeactivated(remove)
  onMountedOrActivated(add)
}
