import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).replace('scripts', '');

function getFilesAndFolders(dirPath, basePath = '') {
    const result = {};
    let totalSize = 0;

    try {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });

        for (const entry of entries) {
            const entryPath = path.join(dirPath, entry.name);
            const relativePath = path.join(basePath, entry.name);

            if (entry.isDirectory()) {
                const { size, ...folderContent } = getFilesAndFolders(entryPath, relativePath);
                result[entry.name] = { ...folderContent, size };
                totalSize += size;
            } else {
                const stats = fs.statSync(entryPath);
                result[entry.name] = { path: relativePath, size: stats.size };
                totalSize += stats.size;
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
    }

    return { size: totalSize, ...result };
}

function getSizeString(size) {
    return `${(size / 1024).toFixed(1)}kb`;
}
function getPercentString(size, allSize) {
    return `${(size / (allSize / 100)).toFixed(1)}%`;
}

function getModules() {
    const directoryPath = `${__dirname}${path.sep}/packages/vue-mdc/build`;
    const modules = getFilesAndFolders(directoryPath);
    const filtererd = {};
    for (const field of Object.keys(modules)) {
        if (!field.includes('.js')) {
            filtererd[field] = modules[field];
        }
    }
    return filtererd;
}

function createBundleSizeFile() {
    const modules = getModules();
    const fileName = 'bundle-size.md';

    /**
     * Create file
     */
    fs.writeFileSync(fileName, '# Bundle Size\n');

    /**
     * All files size
     */
    fs.appendFileSync(
        fileName,
        `

## Modules

All files size: ${getSizeString(modules.size)}

|Module|Size|Percent|
|:--|--:|--:|
`
    );

    for (const module of Object.entries(modules)) {
        if (module[0] === 'size') {
            continue;
        }
        fs.appendFileSync(fileName, `|${module[0]}|${getSizeString(module[1].size)}|${getPercentString(module[1].size, modules.size)}|\n`);
    }

    /**
     * Directives
     */
    fs.appendFileSync(
        fileName,
        `

## Directives

All files size: ${getSizeString(modules.directives.size)}

|Component|File|Size|Percent|
|:--|:--|--:|--:|
`
    );

    for (const module of Object.entries(modules.directives)) {
        if (module[0] === 'size') {
            continue;
        }
        fs.appendFileSync(fileName, `|${module[0]}||${getSizeString(module[1].size)}|${getPercentString(module[1].size, modules.directives.size)}|\n`);
    }

    /**
     * Component-register
     */
    fs.appendFileSync(
        fileName,
        `

## Component-register

All files size: ${getSizeString(modules['component-register'].size)}

|Component|File|Size|Percent|
|:--|:--|--:|--:|
`
    );

    for (const module of Object.entries(modules['component-register'])) {
        if (module[0] === 'size') {
            continue;
        }
        fs.appendFileSync(fileName, `|${module[0]}||${getSizeString(module[1].size)}|${getPercentString(module[1].size, modules['component-register'].size)}|\n`);
    }

    /**
     * Components
     */
    fs.appendFileSync(
        fileName,
        `

## Components

All files size: ${getSizeString(modules.components.size)}

|Component|File|Size|Percent|
|:--|:--|--:|--:|
`
    );

    for (const module of Object.entries(modules.components)) {
        if (module[0] === 'size') {
            continue;
        }
        fs.appendFileSync(fileName, `|${module[0]}||**${getSizeString(module[1].size)}**|**${getPercentString(module[1].size, modules.components.size)}**|\n`);
        for (const file of Object.entries(module[1])) {
            if (file[0] === 'size') {
                continue;
            }
            if (file[0] === 'styles') {
                for (const style of Object.entries(file[1])) {
                    if (style[0] === 'size') {
                        continue;
                    }
                    fs.appendFileSync(fileName, `||${style[0]}|${getSizeString(style[1].size)}|${getPercentString(style[1].size, module[1].size)}|\n`);
                }
            } else {
                fs.appendFileSync(fileName, `||${file[0]}|${getSizeString(file[1].size)}|${getPercentString(file[1].size, module[1].size)}|\n`);
            }
        }
    }

    /**
     * Css
     */
    fs.appendFileSync(
        fileName,
        `

## Css

All files size: ${getSizeString(modules.css.size)}

|Css|Size|Percent|
:--|--:|--:|
`
    );

    for (const file of Object.entries(modules.css)) {
        if (file[0] === 'size') {
            continue;
        }
        fs.appendFileSync(fileName, `|${file[0]}|${getSizeString(file[1].size)}|${getPercentString(file[1].size, modules.css.size)}|\n`);
    }

    /**
     * Internals
     */
    fs.appendFileSync(
        fileName,
        `

## Internals

All files size: ${getSizeString(modules.internals.size)}

|Part|File|Size|Percent|
|:--|:--|--:|--:|
`
    );

    for (const module of Object.entries(modules.internals)) {
        if (module[0] === 'size') {
            continue;
        }
        fs.appendFileSync(fileName, `|${module[0]}||**${getSizeString(module[1].size)}**|**${getPercentString(module[1].size, modules.internals.size)}**|\n`);
        if (['index.ts', 'index.d.ts', 'index.js', 'index.js.map', 'index.d.ts.map'].includes(module[0])) {
            continue;
        }
        for (const file of Object.entries(module[1])) {
            if (file[0] === 'size') {
                continue;
            }
            fs.appendFileSync(fileName, `||${file[0]}|${getSizeString(file[1].size)}|${getPercentString(file[1].size, module[1].size)}|\n`);
        }
    }

    /**
     * Utils
     */
    fs.appendFileSync(
        fileName,
        `

## Utils

All files size: ${getSizeString(modules.utils.size)}

|File|Size|Percent|
|:--|--:|--:|
`
    );

    for (const module of Object.entries(modules.utils)) {
        if (module[0] === 'size') {
            continue;
        }
        fs.appendFileSync(fileName, `|${module[0]}|${getSizeString(module[1].size)}|${getPercentString(module[1].size, modules.utils.size)}|\n`);
    }
}

createBundleSizeFile();
