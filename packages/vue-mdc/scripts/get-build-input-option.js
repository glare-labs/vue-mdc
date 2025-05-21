import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename).replace('scripts', '')

/**
 *
 * @param {string} rootDir
 * @param {Array<string>} ignore
 * @returns {Array<string>}
 */
function resolvePaths(rootDir, ignore = []) {
    /**
     * @type {Array<string>}
     */
    const results = []

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

export const getInputEntries = () => {
    const rootDir = path.join(__dirname, 'src')
    const ignorePaths = [
        'node_modules',
        'dist',
        'build',
        '.rollup.cache',
        'docs',
        'scripts',
        'theme',
        'tokens',
        `components${path.sep}labs`
    ]
    const allPaths = resolvePaths(rootDir, ignorePaths)

    /**
     * @type {Record<string, string>}
     */
    const entries = {}
    for (const filePath of allPaths) {
        const filePathArray = filePath.split(path.sep)
        if (filePathArray.length === 0) {
            continue
        } else if (filePathArray.length === 1) {
            continue
        }

        const indexFileIndex = filePathArray.findIndex(item => item === 'index.ts')

        if (indexFileIndex === -1) {
            continue
        }

        entries[filePathArray[indexFileIndex - 1]] = `src${path.sep}${filePath}`
    }
    return entries
}
console.log(getInputEntries());
