export const BASE_IMG =
  'https://api.adicw.cn/images/StudyImg/20200204113055.jpg'

/**
 * 图片加载
 * todo 403判断 https://ae04.alicdn.com/kf/H5277280fe1cb4b069055c3df27ef8255t.jpg
 * @param path 图片地址
 * @returns
 */
export function loadImg(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = path
    image.onload = () => resolve(path)
    image.onerror = reject
  })
}

/**
 * 监听节点是否存在于当前屏幕视野
 * @param el 监听的节点
 * @returns promise
 */
export function elVisibleObserver(el: HTMLElement, callback: () => void) {
  const observer = new IntersectionObserver((entries, observer) => {
    const isIn = entries.some((entrie) => entrie.intersectionRatio > 0)
    if (isIn) {
      // 解绑
      observer.unobserve(el)
      callback()
    }
  })
  observer.observe(el)
}
