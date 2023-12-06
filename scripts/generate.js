/* eslint-disable no-undef */
import { generateTemplateFilesBatch } from 'generate-template-files'
import readline from 'readline'
import fs from 'fs'

const toKebabCase = (s) => {
    const arr = []
    for(let i = 0; i < s.length; i ++) {
        if(s[i] >= 'A' && s[i] <= 'Z') {
            arr.push('-')
            arr.push(s[i].toLowerCase())
        } else {
            arr.push(s[i])
        }
    }
    return arr.join('')
}

/**
 * Copy ./scripts/templates/..   ->   ./src/components/../..
 */
const createTemplates = async (componentName) => {
    await generateTemplateFilesBatch([
        {
            option: 'Create Component Template Files',
            defaultCase: '(kebabCase)',
            entry: {
                folderPath: './scripts/templates/',
            },
            dynamicReplacers: [
                { slot: '__componentFolderName__', slotValue: componentName },
            ],
            output: {
                path: './src/components/__componentFolderName__/',
                files: [
                    './src/components/__componentFolderName__/spec.md',
                    './src/components/__componentFolderName__/index.ts',
                    './src/components/__componentFolderName__/internal/index.ts',
                    './src/components/__componentFolderName__/internal/Component.tokens.ts',
                    './src/components/__componentFolderName__/internal/Component.render.tsx',
                    './src/components/__componentFolderName__/internal/Component.type.ts',
                    './src/components/__componentFolderName__/internal/Component.styles.ts',
                ],
            },
            onComplete: (results) => {
                console.log('Templates has been created from ./scripts/templates/ to ', results.output.path)
            },
        },
    ])
}

/**
 * Rename Component.**.**
 */
const renameTemplates = (componentFolderName, componentFileName) => {
    const makeInternalPath = (file) => `./src/components/${componentFolderName}/internal/${file}`

    const errorHandle = (error) => {
        if(error) throw error
    }

    fs.rename(makeInternalPath('Component.type.ts'), makeInternalPath(`${componentFileName}.type.ts`), errorHandle)
    fs.rename(makeInternalPath('Component.styles.ts'), makeInternalPath(`${componentFileName}.styles.ts`), errorHandle)
    fs.rename(makeInternalPath('Component.render.tsx'), makeInternalPath(`${componentFileName}.render.tsx`), errorHandle)
    fs.rename(makeInternalPath('Component.tokens.ts'), makeInternalPath(`${componentFileName}.tokens.ts`), errorHandle)
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('The Component Name: ', async (answer) => {

    // ../component/..
    const componentFolderName = toKebabCase(answer)

    // ../Component.type.ts
    const componentFileName = (answer.charAt(0).toUpperCase() + answer.slice(1)).replaceAll('-', '')
    
    await createTemplates(componentFolderName)
    renameTemplates(componentFolderName, componentFileName)

    rl.close()
})
