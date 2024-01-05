import type { ObjectDirective } from 'vue'

export const flexDirective: ObjectDirective = {
    mounted(el, { value }) {
        el.style.display = 'flex'
    }
}
