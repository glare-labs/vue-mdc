import type { ObjectDirective } from 'vue'

export const windowDirective: ObjectDirective = {
    mounted(el, { value }) {
        el.style.position = 'relative'
        el.style.display = 'block'
        el.style.height = '100svh'
        el.style.width = 'auto'
        el.style.backgroundColor = 'var(--md-sys-color-background)'
    }
}
