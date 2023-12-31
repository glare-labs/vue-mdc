import { defineComponent } from 'vue'
import { sharedElevationStyles } from './Elevation.styles'
import { css } from 'aphrodite/no-important'


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
                class={css(sharedElevationStyles.surface)}
            >
            </span>
        )
    },
})
