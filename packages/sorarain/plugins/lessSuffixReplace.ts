import { PluginOption } from 'vite'

/**
 * less文件引入后缀转换
 * ps: 因为我们已经将less打包为css，所以在生成的组件文件中也需要更改对应文件名称
 * @returns
 */
export default function lessSuffixReplace(): PluginOption {
  return {
    name: 'lessSuffixReplace',
    generateBundle(_, bundle) {
      const keys = Object.keys(bundle)
      for (const key of keys) {
        const bundler: any = bundle[key]

        this.emitFile({
          type: 'asset',
          fileName: key,
          source: bundler.code.replace(/\.less/g, '.css')
        })
      }
    }
  }
}
