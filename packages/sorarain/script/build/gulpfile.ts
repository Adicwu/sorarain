import { series, parallel } from 'gulp'
import { lessTranspile, componentTranspile, componentPath } from './index'

const rimraf = require('rimraf')

export default series(
  // 同步执行删除
  async (e) =>
    new Promise((onFull) => rimraf(`${componentPath}/dist`, e, onFull)),
  /**
   * 并发执行打包
   * lessTranspile与componentTranspile构建出来的结果目录是一致的，此时两个结果会合并
   */
  parallel(
    async () => lessTranspile(),
    async () => componentTranspile()
  )
)
