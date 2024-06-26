import type { Directive } from 'vue'

abstract class ColorableElement {

    /**
     * 
     * @param property 'text' | 'background'
     * @param value hex-like
     */
    protected setElementColorProperty(element: HTMLElement, property: 'text' | 'background', value: string) {
        element.style.setProperty(property === 'text' ? 'color' : 'background', value)
    }
}

class TextColorDirective extends ColorableElement {

    private readonly defaultColor = 'var(--gu-sys-color-on-surface)'

    public readonly directive: Directive<HTMLElement, string> = {
        mounted: (el, binding) => {
            const colorRaw = binding.value
            let color = binding.value
            if (typeof colorRaw === 'undefined' || colorRaw === null) {
                console.warn(`v-text-color accepts a string of hexadecimal color values. v-text-color received an unexpected value [${color}].`)
                color = this.defaultColor
            }
            this.setElementColorProperty(el, 'text', color)
        },
        updated: (el, binding) => {
            if (binding.oldValue === binding.value) return
            const colorRaw = binding.value
            let color = binding.value
            if (typeof colorRaw === 'undefined' || colorRaw === null) {
                console.warn(`v-text-color accepts a string of hexadecimal color values. v-text-color received an unexpected value [${color}].`)
                color = this.defaultColor
            }
            this.setElementColorProperty(el, 'text', color)
        }
    }

}

class BackgroundColorDirective extends ColorableElement {

    private readonly defaultColor = 'var(--gu-sys-color-surface)'

    public readonly directive: Directive<HTMLElement, string> = {
        mounted: (el, binding) => {
            const colorRaw = binding.value
            let color = binding.value
            if (typeof colorRaw === 'undefined' || colorRaw === null) {
                console.warn(`v-text-color accepts a string of hexadecimal color values. v-text-color received an unexpected value [${color}].`)
                color = this.defaultColor
            }
            this.setElementColorProperty(el, 'background', color)
        },
        updated: (el, binding) => {
            if (binding.oldValue === binding.value) return
            const colorRaw = binding.value
            let color = binding.value
            if (typeof colorRaw === 'undefined' || colorRaw === null) {
                console.warn(`v-text-color accepts a string of hexadecimal color values. v-text-color received an unexpected value [${color}].`)
                color = this.defaultColor
            }
            this.setElementColorProperty(el, 'background', color)
        }
    }

}



export const vTextColor = new TextColorDirective().directive
export const vBackgroundColor = new BackgroundColorDirective().directive
