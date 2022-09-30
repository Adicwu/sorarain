import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vitePluginLesser from './plugins/vitePluginLesser'

export default defineConfig({
  build: {
    target: 'modules',
    rollupOptions: {
      //忽略打包文件
      external: ['vue', /\.less/, '@sorarain/use', '@sorarain/utils'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          dir: resolve(__dirname, './dist/es'),
          preserveModules: true,
          exports: 'named'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          dir: resolve(__dirname, './dist/lib'),
          preserveModules: true,
          exports: 'named'
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
    vitePluginLesser()
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
