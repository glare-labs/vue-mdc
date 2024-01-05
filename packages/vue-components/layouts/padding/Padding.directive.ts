import type { ObjectDirective } from 'vue'

export const paddingDirective: ObjectDirective = {
    mounted(el, { value }) {
        el.style.padding = value
    }
}
