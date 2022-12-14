import { loadImg, elVisibleObserver, BASE_IMG } from './utils'
import { ObjectDirective } from 'vue'

/**
 * 节点background-image属性懒加载
 */
export default {
  mounted(el, binding) {
    if (!binding.value) return
    elVisibleObserver(el, async () => {
      try {
        await loadImg(binding.value)
        el.style.backgroundImage = `url(${binding.value})`
      } catch {
        el.style.backgroundImage = `url(${BASE_IMG})`
      }
    })
  }
} as ObjectDirective<HTMLElement, string>
