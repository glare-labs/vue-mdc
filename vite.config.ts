import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {

    if (command === 'serve') {
        return {
            resolve: {
                alias: {
                    '@': fileURLToPath(new URL('./src', import.meta.url))
                }
            },
            plugins: [
                vue(),
                vueJsx(),
                dts({
                    insertTypesEntry: true,
                }),
            ],
            root: './catalog',
            base: '/material-anti-mage-vue',
            build: {
                outDir: '../docs',
                manifest: true,
                minify: true,
                cssMinify: true,
                cssCodeSplit: true,
                emptyOutDir: true,
            }
        }
    } else if (command === 'build') {
        return {
            resolve: {
                alias: {
                    '@': fileURLToPath(new URL('./src', import.meta.url))
                }
            },
            build: {
                outDir: './dist',
                emptyOutDir: true,
                cssCodeSplit: true,
                sourcemap: true,
                manifest: true,
                lib: {
                    entry: resolve(__dirname, './src/lib/index.ts'),
                    name: 'material-anti-mage-vue',
                    fileName: 'index',
                    formats: ['es'],
                },

                rollupOptions: {
                    external: [
                        'vue',
                        'material-symbols',
                        './src/docs/**/*',
                        './src/components/**/test/*.test.{ts,tsx}'
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
                }),
            ],
        }
    }
})
