import { loadImg, elVisibleObserver } from './utils'
import { ObjectDirective } from 'vue'

/**
 * 节点img-src属性懒加载
 */
export default {
  mounted(el, binding) {
    if (!binding.value) return
    elVisibleObserver(el, async () => {
      await loadImg(binding.value)
      el.src = binding.value
    })
  }
} as ObjectDirective<HTMLImageElement | HTMLVideoElement, string>
