import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dts({
    compilerOptions: {
      baseUrl: './src',
    },
    tsconfigPath: 'tsconfig.json'
  })],
  mode: 'lib',
  build: {
    target: 'modules',
    minify: false,
    ssr: true,
    outDir: './build',
    emptyOutDir: true,
    reportCompressedSize: false,
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      input: './src/index.ts',
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
})

