import { defineSSRCustomElement } from 'vue'
import { sharedElevationStyles } from './Elevation.styles'


declare module 'vue' {
    export interface GlobalComponents {
        'am-elevation': typeof renderElevation,
    }
}

/**
 * @alias am-elevation
 */
export const renderElevation = defineSSRCustomElement({
    name: 'am-elevation',
    render() {
        return (
            <span
                aria-hidden="true"
                class="surface"
            >
            </span>
        )
    },
    styles: [
        sharedElevationStyles
    ]
})
