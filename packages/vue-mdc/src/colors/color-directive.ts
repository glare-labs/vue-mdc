/**
 * @license
 * Copyright 2024 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import type { Directive } from 'vue'
import { isServer } from '../utils/is-server'
import { EColor } from './color-tokens'

const setElementColorProperty = (element: HTMLElement, property: 'text' | 'background', value: EColor) => {
    element.style.setProperty(property === 'text' ? 'color' : 'background-color', value)
}

const directive: (property: 'text' | 'background') => Directive<HTMLElement, EColor> = (property) => ({
    mounted: (el, binding) => {
        if (isServer()) {
            return
        }
        let colorRaw = binding.value
        if (typeof colorRaw === 'undefined' || colorRaw === null) {
            console.warn(`v-text-color accepts a string of hexadecimal color values. v-text-color received an unexpected value [${colorRaw}].`)
            colorRaw = EColor.OnSurface
        }
        setElementColorProperty(el, property, colorRaw)
    },
    updated: (el, binding) => {
        if (binding.oldValue === binding.value) {
            return
        }
        let colorRaw = binding.value
        if (typeof colorRaw === 'undefined' || colorRaw === null) {
            console.warn(`v-text-color accepts a string of hexadecimal color values. v-text-color received an unexpected value [${colorRaw}].`)
            colorRaw = EColor.OnSurface
        }
        setElementColorProperty(el, property, colorRaw)
    }
})

export const vTextColor = directive('text')
export const vBackgroundColor = directive('background')
