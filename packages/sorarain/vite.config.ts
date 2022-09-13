import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import lessSuffixReplace from './plugins/lessSuffixReplace'

export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    // minify: true,
    rollupOptions: {
      //忽略打包文件
      external: ['vue', /\.less/, '@sorarain/use', '@sorarain/utils'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          dir: resolve(__dirname, './dist/es'),
          preserveModules: true
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          dir: resolve(__dirname, './dist/lib'),
          preserveModules: true
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'sorarain'
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      outputDir: [
        resolve(__dirname, './dist/es/src'),
        resolve(__dirname, './dist/lib/src')
      ],
      tsConfigFilePath: '../../tsconfig.json'
    }),
    lessSuffixReplace()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
