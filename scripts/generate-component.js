import fs from 'fs'
import { Buffer } from 'node:buffer'

function toKebabCase(str) {
    return str.split('').map((letter, idx) => {
        return letter.toUpperCase() === letter
            ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
            : letter
    }).join('')
}

const template = {
    component: {
        render: `
import { defineComponent } from 'vue'
import { props } from './_COMPONENT_.type'
import { _COMPONENT_Styles } from './_COMPONENT_.css'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-_COMPONENT_UPPERKEBAB_': typeof render_COMPONENT_,
    }
}

/**
 * @alias Am-_COMPONENT_UPPERKEBAB_
 */
const render_COMPONENT_ = defineComponent({
    name: 'Am_COMPONENT_',
    props,
    emits,
    setup(props, { emit }) {

        return () => (
            <div>
            </div>
        )
    },
})

export {
    render_COMPONENT_ as _COMPONENT_
}

`,

        css: `
import { style } from '@vanilla-extract/css'
import { _COMPONENT_LOWER_Tokens } from './_COMPONENT_.tokens'
import { makeComponentInnerTokens } from '../../utils/tokens'
        
export namespace _COMPONENT_Styles {
    const innerTokens = makeComponentInnerTokens(_COMPONENT_LOWER_Tokens)
}
`,

        type: `
import type { PropType } from 'vue'

export const props = {
}
                
`,

        tokens: `
import { makeComponentTokens } from '../../utils/tokens'

export const _COMPONENT_LOWER_Tokens = makeComponentTokens(
    '_COMPONENT_KEBAB_',
    [
    ]
)
                
`,
    }
}

/**
 * A mapping that from simple identy to full identy.
 * 
 * @example
 * getType('c') -> component
 * 
 * @param {string} type 
 * @returns {'component' | 'component-lab' | 'layout'}
 */
function getType(type) {
    if (type === 'c') return 'component'
    if (type === 'l') return 'layout'
    if (type === 'c-lab') return 'component-lab'
    // if (type === 'd') return 'directive'
    throw new Error('The unknown type: ', type)
}

/**
 * @param {'c' | 'l' | 'c-lab' } type 
 * @param {string} name 
 */
function getPath(type, name) {
    if (type === 'c') {
        return `./packages/vue-components/components/${toKebabCase(name)}/`
    }
    if (type === 'c-lab') {
        return `./packages/vue-components/components/labs/${toKebabCase(name)}/`
    }
    if (type === 'l') {
        return `./packages/vue-components/layouts/${toKebabCase(name)}/`
    }
    throw new Error('The unknown type: ', type)
}
/**
 * @param {'c' | 'l' | 'c-lab' } type 
 */
function getFiles(type, name) {
    if (type === 'c' || type === 'c-lab') {
        return [
            `${name}.render.tsx`,
            `${name}.type.ts`,
            `${name}.css.ts`,
        ]
    }
    if (type === 'l') {
        return [
            `${name}.render.tsx`,
            `${name}.module.css`,
        ]
    }
    throw new Error('The unknown type: ', type)
}

/**
 * @param {string} path 
 */
async function createTemplateFile(type, name, path) {

    let content = null

    if (type === 'c' || type === 'c-lab') {
        if (path.endsWith('.render.tsx')) {
            const upperkebab = name.split('').map((letter, idx) => {
                return letter.toUpperCase() === letter
                    ? `${idx !== 0 ? '-' : ''}${letter.toUpperCase()}`
                    : letter
            }).join('')
            content = template.component.render.replaceAll('_COMPONENT_UPPERKEBAB_', upperkebab).replaceAll('_COMPONENT_', name)
        } else if (path.endsWith('.css.ts')) {
            const lowerCase = name[0].toLowerCase() + name.slice(1)
            content = template.component.css.replaceAll('_COMPONENT_LOWER_', lowerCase).replaceAll('_COMPONENT_', name)
        } else if (path.endsWith('.type.ts')) {
            content = template.component.type
        }
    } else if (type === 'l') {
        if (path.endsWith('.render.tsx')) {
            const upperkebab = name.split('').map((letter, idx) => {
                return letter.toUpperCase() === letter
                    ? `${idx !== 0 ? '-' : ''}${letter.toUpperCase()}`
                    : letter
            }).join('')
            content = template.component.render.replaceAll('import { _COMPONENT_Styles } from \'./_COMPONENT_.css\'', 'import css from \'./_COMPONENT_.module.css\'').replaceAll('_COMPONENT_UPPERKEBAB_', upperkebab).replaceAll('_COMPONENT_', name)
        } else if (path.endsWith('.module.css')) {
            content = ''
        }
    }

    const data = new Uint8Array(Buffer.from(content))
    await fs.mkdir(path.substring(0, path.lastIndexOf('/')), (err) => {
        // if (err) throw err
        console.log(err)
    })
    await fs.writeFile(path, data, {
        encoding: 'utf-8'
    }, (err) => {
        if (err) throw err
        console.log('Create file: ', path)
    })
}
function createTemplateFiles(type, name) {
    // get path of the files
    const path = getPath(type, name)
    const files = getFiles(type, name)
    const filesPath = files.map(e => path + e)

    console.log('\tPath: ', path)
    console.log('\tFiles: ', filesPath)

    filesPath.map(async (e) => {
        await createTemplateFile(type, name, e)
        return e
    })
}

/**
 * Generate template files.
 * 
 * The arguments are from terminal, the first one is 
 * type(c is component, l is layout, c-lab is components/labs),
 * the another one is file name.
 * 
 * @param {'c' | 'l' | 'c-lab' } type 
 * @param {string} name 
 */
function generate(type, name) {

    // output information
    console.log('='.repeat(32))
    console.log('\tType: ', getType(type))
    console.log('\tName: ', name)

    // create template files to that
    createTemplateFiles(type, name)

}

// eslint-disable-next-line no-undef
const argv = process.argv.slice(2)
const target = {
    type: argv[0],
    name: argv[1],
}


generate(target.type, target.name)
