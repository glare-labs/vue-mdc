import { nodeResolve } from '@rollup/plugin-node-resolve'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import postCssNesting from 'postcss-nesting'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { getInputEntries } from './scripts/get-build-input-option'

/** @type {import('vite').UserConfig} */
export default defineConfig({
    build: {
        lib: {
            entry: getInputEntries(),
            formats: ['es']
        },
        rollupOptions: {
            external: [
                'vue',
            ],
            output: {
                globals: {
                    vue: 'Vue'
                },
                preserveModules: true,
                preserveModulesRoot: 'src',
                dir: './build',
                format: 'esm',
            },
        },
        target: 'es2022',
        minify: "terser",
        cssCodeSplit: true,
        emptyOutDir: true,
        outDir: './build',
        reportCompressedSize: false,
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
        postcss: {
            plugins: [
                postCssNesting,
                autoprefixer
            ],
        }
    },
    plugins: [
        nodeResolve({
        }),
        vueJsx(),
        dts({ tsconfigPath: './tsconfig.json' }),
    ]
})
