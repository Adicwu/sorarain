import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    minify: true,
    rollupOptions: {
      external: ['vue'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: resolve(__dirname, './dist/es')
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: resolve(__dirname, './dist/lib')
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'sorarain-use'
    }
  },

  plugins: [
    dts({
      outputDir: [
        resolve(__dirname, './dist/es'),
        resolve(__dirname, './dist/lib')
      ],
      tsConfigFilePath: '../../tsconfig.json'
    })
  ]
})
