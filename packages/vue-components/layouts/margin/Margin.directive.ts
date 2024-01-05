import type { ObjectDirective } from 'vue'

export const marginDirective: ObjectDirective = {
    mounted(el, { value }) {
        el.style.margin = value
    }
}
