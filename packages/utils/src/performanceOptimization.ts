// -----性能优化----- //

/**
 * 防抖
 * @param callback 执行方法
 * @param delay 间隔时间
 * @param immediate 是否先执行
 */
export function debounce<T extends unknown[]>(
  callback: (...args: T) => void,
  delay = 300,
  immediate = false
) {
  let timer: NodeJS.Timeout | null = null
  const cb = function (this: unknown, ...args: T) {
    timer && clearTimeout(timer)
    if (immediate) {
      const isEnter = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay)
      isEnter && callback.apply(this, args)
    } else {
      timer = setTimeout(() => {
        callback.apply(this, args)
      }, delay)
    }
  }
  return cb
}

/**
 * 节点事件节流，基于requestAnimationFrame，常用于scroll
 * @param cb
 * @returns
 */
export function eventThrottle<T extends unknown[]>(cb: (...args: T) => void) {
  let bool = false
  return function (this: unknown, ...args: T) {
    if (bool) return
    bool = true
    window.requestAnimationFrame(() => {
      cb.apply(this, args)
      bool = false
    })
  }
}

/**
 * 节流
 * @param callback 执行方法
 * @param delay 间隔时间
 */
export function throttle<T extends unknown[]>(
  callback: (...args: T) => void,
  delay = 300
) {
  let flag = false
  return function (this: unknown, ...args: T) {
    if (flag) return
    flag = true
    setTimeout(() => {
      callback.apply(this, args)
      flag = false
    }, delay)
  }
}

/**
 * 顺滑push（此方法用于优化列表内容过多时的加载）
 * @param org 结果源
 * @param list 数据源
 */
export function smoothPush<T>(org: T[], list: T[]) {
  org.splice(0)

  if (list.length !== 0) {
    const push = (count: number) => {
      org.push(list[count])
      count++
      if (count < list.length) {
        requestAnimationFrame(() => push(count))
      }
    }

    push(0)
  }
}
