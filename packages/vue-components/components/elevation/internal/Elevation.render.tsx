import { defineComponent } from 'vue'
import css from './Elevation.module.css'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Elevation': typeof renderElevation,
    }
}

/**
 * @alias am-elevation
 */
export const renderElevation = defineComponent({
    name: 'AmElevation',
    render() {
        return (
            <span
                aria-hidden="true"
                class={css.surface}
            >
            </span>
        )
    },
})
