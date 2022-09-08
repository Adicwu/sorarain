import { ref, watch } from 'vue'
import { useEventListener } from '../useEventListener'

export function useWindowSize() {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  const onResize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  useEventListener('resize', onResize)
  useEventListener('orientationchange', onResize)

  return { width, height }
}

export function onWindowSizeChange(
  resize: ([width, height]: number[]) => void
) {
  const windowResize = useWindowSize()
  watch([windowResize.width, windowResize.height], resize)
}
