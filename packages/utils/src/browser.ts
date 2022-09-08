// -----浏览器相关----- //

/**
 * 将内容复制到粘贴板
 * @param text
 */
export function copyText(text: string | number) {
  const save = (e: ClipboardEvent) => {
    e.clipboardData!.setData('text/plain', text.toString())
    e.preventDefault()
  }
  document.addEventListener('copy', save)
  document.execCommand('copy')
  document.removeEventListener('copy', save)
}

/**
 * 将窗口全屏切换
 * @param el 绑定节点
 * @param type to全屏 exit退出全屏
 */
export function fullscreen(el: HTMLElement, type: 'to' | 'exit') {
  if (type === 'to') {
    const doc = el as any
    if (doc.requestFullscreen) {
      return doc.requestFullscreen()
    } else if (doc.webkitRequestFullScreen) {
      return doc.webkitRequestFullScreen()
    } else if (doc.mozRequestFullScreen) {
      return doc.mozRequestFullScreen()
    } else {
      return doc.msRequestFullscreen()
    }
  } else if (type === 'exit') {
    const doc = document as any
    if (doc.exitFullscreen) {
      doc.exitFullscreen()
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen()
    } else if (doc.webkitCancelFullScreen) {
      doc.webkitCancelFullScreen()
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen()
    }
  }
}

/**
 * 画中画切换
 * @param el 绑定节点
 * @param type to全屏 exit退出全屏
 */
export function pictureInPicture(el: HTMLVideoElement, type: 'to' | 'exit') {
  switch (type) {
    case 'exit': {
      document.exitPictureInPicture()
      break
    }
    case 'to': {
      el.requestPictureInPicture()
      break
    }
  }
}

/**
 * 判断浏览器当前是否为全屏状态
 * @returns
 */
export function checkFullscreen() {
  return (document as any).webkitIsFullScreen
}

/**
 * 获取地址的query参数
 * @param key 参数名称
 * @returns 结果，找不到返回null
 */
export function getUrlQuery(key: string) {
  return new URL(location.href).searchParams.get(key)
}