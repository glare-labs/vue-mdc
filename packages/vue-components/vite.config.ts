import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: './dist',
        emptyOutDir: true,
        cssCodeSplit: true,
        sourcemap: true,
        manifest: true,
        lib: {
            entry: resolve(__dirname, './lib/index.ts'),
            name: 'material-anti-mage-vue',
            fileName: 'index',
            formats: ['es'],
        },
        rollupOptions: {
            external: [
                'vue',
                'material-symbols',
                '/components/**/test/*.test.{ts,tsx}',
                '/components/labs/**/*',
            ],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
            treeshake: true,
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        dts({
            insertTypesEntry: true,
            exclude: [
                './components/labs/**/*'
            ]
        }),
    ],
})
