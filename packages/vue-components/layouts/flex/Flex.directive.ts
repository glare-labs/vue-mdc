import type { ObjectDirective } from 'vue'

export const flexDirective: ObjectDirective = {
    mounted(el) {
        el.style.display = 'flex'
    }
}
