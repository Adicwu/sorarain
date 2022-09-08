// -----杂项----- //

/**
 * 等待
 * @param delay 等待时间
 * @returns
 */
export function wait(delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
