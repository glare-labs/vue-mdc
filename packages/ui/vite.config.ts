import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import fs from 'fs'
import path from 'path'
import postCssNesting from 'postcss-nesting'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function resolvePaths(rootDir, ignore = [] as Array<string>): Array<string> {
    const results: Array<string> = []

    function walk(dir) {
        const files = fs.readdirSync(dir)

        files.forEach(file => {
            const filePath = path.join(dir, file)
            const stat = fs.statSync(filePath)

            if (stat.isDirectory()) {
                const relativeDir = path.relative(rootDir, filePath)
                if (!ignore.some(pattern => relativeDir.startsWith(pattern))) {
                    walk(filePath)
                }
            } else {
                results.push(path.relative(rootDir, filePath))
            }
        })
    }

    walk(rootDir)
    return results
}

const getEntries = () => {
    const rootDir = path.join(__dirname, 'src')
    const ignorePaths = [
        'node_modules',
        'dist',
        'tokens',
        'components/labs'
    ]
    const allPaths = resolvePaths(rootDir, ignorePaths)

    const entries = {} as Record<string, string>
    for (const filePath of allPaths) {
        const filePathArray = filePath.split('/')
        if (filePathArray.length === 0) {
            continue
        } else if (filePathArray.length === 1) {
            continue
        }

        const indexFileIndex = filePathArray.findIndex(item => item === 'index.ts')

        if (indexFileIndex === -1) {
            continue
        }

        entries[filePathArray[indexFileIndex - 1]] = `src/${filePath}`
    }
    return entries
}

const entries = getEntries()

/** @type {import('vite').UserConfig} */
export default defineConfig({
    build: {
        lib: {
            entry: entries,
            formats: ['es']
        },
        rollupOptions: {
            external: [
                'vue',
                '@material/material-color-utilities',
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
        vueJsx(),
        dts({ tsconfigPath: './tsconfig.json' }),
    ]
})
