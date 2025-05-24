import resolve from '@rollup/plugin-node-resolve'
import ts from '@rollup/plugin-typescript'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import MagicString from 'magic-string'
import { defineConfig } from 'vite'
import { getComponentModuleInputEntries, getRootModuleInputEntries } from '../../scripts/get-build-input-option'

const restoreTopCommentsPlugin = () => {
    const topCommentsCache = new Map()

    const getLicenseCommentFromFileContent = (code: string) => {
        const regex = /\/\*\*[\s\S]*?@license[\s\S]*?\*\//s
        const match = code.match(regex)
        if (match) {
            const fullCommentBlock = match[0]
            const startIndex = match.index!
            const endIndex = startIndex + fullCommentBlock.length

            return {
                comment: fullCommentBlock,
                startIndex: startIndex,
                endIndex: endIndex
            }
        }
        return { comment: null, startIndex: -1, endIndex: -1 }
    }

    return {
        name: 'restore-top-comments',
        enforce: 'post',
        async transform(code, id) {
            if (id.endsWith(`.scss`)) {

            }
            if (id.includes(`vue-mdc/packages/vue-mdc/src/`) && (id.endsWith('.tsx') || id.endsWith('.ts'))) {
                const { comment, startIndex, endIndex } = getLicenseCommentFromFileContent(code)

                if (comment) {
                    topCommentsCache.set(id, comment)

                    console.log(`SS: ${id} - ${startIndex}`)

                    const s = new MagicString(code)
                    s.remove(startIndex, endIndex)

                    return {
                        code: s.toString(),
                        map: s.generateMap({ hires: true, source: id, includeContent: true, }).toString(),
                    }
                }
            }
            return null
        },

        renderChunk(code, chunk, options) {
            const originalFilePath = chunk.facadeModuleId

            if (!originalFilePath) {
                return null
            }

            const topComments = topCommentsCache.get(originalFilePath)


            if (topComments) {
                console.log(originalFilePath)
                console.log('add c', topComments)

                const s = new MagicString(code)
                const separator = topComments.includes('\n') ? '\n\n' : '\n'

                s.prepend(topComments + separator)

                console.log(s.toString())


                return {
                    code: s.toString(),
                    map: s.generateMap({ hires: true }).toString(),
                }
            }

            return {
                code,
                map: null
            }
        },
    }
}

/** @type {import('vite').UserConfig} */
export default defineConfig({
    build: {
        lib: {
            entry: {
                'index': 'src/index.ts',
                ...getRootModuleInputEntries(),
                ...getComponentModuleInputEntries(),
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: [
                'vue',
                '@glare-labs/vue-reflect-attribute',
            ],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'src',
                dir: './build',
                format: 'esm',
                assetFileNames: (a) => {
                    // @ts-ignore
                    const path = a.name!
                    const cssArray = path.split(`/`)
                    const fileName = cssArray[cssArray.findIndex(e => e === 'styles') + 1]
                    return `css/${fileName.replace(`.module.`, `.`)}`
                },
            },
            plugins: [
                ts({
                    tsconfig: './tsconfig.json',
                }),
            ],
            treeshake: 'recommended',
        },
        target: 'ES2017',
        sourcemap: true,
        minify: 'terser',
        cssCodeSplit: true,
        emptyOutDir: true,
        outDir: './build',
        reportCompressedSize: false,
        terserOptions: {
            compress: true,
            mangle: false,
            format: {
                comments(node, comment) {
                    return true
                },
            },
        }
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
        postcss: {
            plugins: [
                autoprefixer(),
            ],
        }
    },
    plugins: [
        resolve(),
        vueJsx({}),
        restoreTopCommentsPlugin(),
    ]
})
