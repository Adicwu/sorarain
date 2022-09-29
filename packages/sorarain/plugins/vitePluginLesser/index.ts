import { PluginOption } from 'vite'
import { lessTranspile } from './utils'
import type { OutputChunk } from 'rollup'

/**
 * less文件处理
 * 将组件下style内的less文件编译，并修改组件打本后的引入关键字类型
 */
export default function vitePluginLesser(): PluginOption {
  return {
    name: 'vitePluginLesser',
    async generateBundle(_, bundle) {
      await lessTranspile()

      Object.keys(bundle).forEach((key) => {
        const bundler = bundle[key] as OutputChunk
        this.emitFile({
          type: 'asset',
          fileName: key,
          source: bundler.code.replace(/\.less/g, '.css')
        })
      })
    }
  }
}
