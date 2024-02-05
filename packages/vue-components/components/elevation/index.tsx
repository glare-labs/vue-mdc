import { computed, defineCustomElement } from 'vue'
import { styles } from './Elevation.styles'
import { props } from './Elevation.type'

declare module 'vue' {
    export interface GlobalComponents {
        'am-elevation': typeof Elevation,
    }
}

/**
 * @alias am-elevation
 */
export const Elevation = defineCustomElement({
    name: 'AmElevation',
    props,
    styles,
    setup(props, _) {
        const elevationStyle = computed(() => ({
            '--mamv-elevation-level': props.level,
        }))
        return () => (
            <span
                aria-hidden="true"
                class="surface"
                style={elevationStyle.value}
            >
            </span>
        )
    },
})
