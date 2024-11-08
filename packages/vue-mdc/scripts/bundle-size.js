import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename).replace('scripts', '')

function getFilesAndFolders(dirPath, basePath = '') {
    const result = {}
    let totalSize = 0

    try {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true })

        for (const entry of entries) {
            const entryPath = path.join(dirPath, entry.name)
            const relativePath = path.join(basePath, entry.name)

            if (entry.isDirectory()) {
                const { size, ...folderContent } = getFilesAndFolders(entryPath, relativePath)
                result[entry.name] = { ...folderContent, size }
                totalSize += size
            } else {
                const stats = fs.statSync(entryPath)
                result[entry.name] = { path: relativePath, size: stats.size }
                totalSize += stats.size
            }
        }

    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error)
    }

    return { size: totalSize, ...result }
}

function getSizeString(size) {
    return `${(size / 1024).toFixed(1)}kb`
}
function getPercentString(size, allSize) {
    return `${(size / (allSize / 100)).toFixed(1)}%`
}

function getModules() {
    const directoryPath = `${__dirname}${path.sep}build`
    const modules = getFilesAndFolders(directoryPath)
    const filtererd = {}
    for (const field of Object.keys(modules)) {
        if (!field.includes('.js')) {
            filtererd[field] = modules[field]
        }
    }
    return filtererd
}

function createBundleSizeFile() {
    const modules = getModules()
    const fileName = 'bundle-size.md'

    fs.writeFileSync(fileName, '# Bundle Size\n')

    fs.appendFileSync(fileName, `
All files size: ${(modules.size / 1024).toFixed(1)}kb

## Modules

|Module|Size|Percent|
|:--|--:|--:|
`)

    for (const module of Object.entries(modules)) {
        if (module[0] === 'size') {
            continue
        }
        fs.appendFileSync(fileName, `|${module[0]}|${getSizeString(module[1].size)}|${getPercentString(module[1].size, modules.size)}|\n`)
    }

    fs.appendFileSync(fileName, `

## Components

All components size: ${getSizeString(modules.components.size)}

|Component|File|Size|Percent|
|:--|:--|--:|--:|
`)

    for (const module of Object.entries(modules.components)) {
        if (module[0] === 'size') {
            continue
        }
        fs.appendFileSync(fileName, `|${module[0]}||${getSizeString(module[1].size)}|${getPercentString(module[1].size, modules.size)}|\n`)
        for (const file of Object.entries(module[1])) {
            if (file[0] === 'size') {
                continue
            }
            if (file[0] === 'styles') {
                for (const style of Object.entries(file[1])) {
                    if (style[0] === 'size') {
                        continue
                    }
                    fs.appendFileSync(fileName, `||${style[0]}|${getSizeString(style[1].size)}|${getPercentString(style[1].size, module[1].size)}|\n`)
                }
            } else {
                fs.appendFileSync(fileName, `||${file[0]}|${getSizeString(file[1].size)}|${getPercentString(file[1].size, module[1].size)}|\n`)
            }
        }
    }



    let allStyleSize = 0
    const styles = []
    for (const module of Object.entries(modules.components)) {
        if (module[0] === 'size') {
            continue
        }
        for (const file of Object.entries(module[1])) {
            if (file[0] === 'size') {
                continue
            }
            if (file[0] === 'styles') {
                for (const style of Object.entries(file[1])) {
                    if (style[0] === 'size' || style[0].endsWith('.scss.js')) {
                        continue
                    }
                    allStyleSize += file[1].size
                    styles.push({ component: style[0], ...style[1] })
                }
            }
        }
    }

    fs.appendFileSync(fileName, `

## Styles

All styles size: ${getSizeString(allStyleSize)}

|Styles|Size|Percent|
:--|--:|--:|
`)

    for (const style of styles) {
        fs.appendFileSync(fileName, `|${style.component}|${getSizeString(style.size)}|${getPercentString(style.size, allStyleSize)}|\n`)
    }

}

createBundleSizeFile()
