import { computed, defineCustomElement } from 'vue'
import { props } from './Divider.type'
import { styles } from './Divider.styles'

declare module 'vue' {
    export interface GlobalComponents {
        'am-divider': typeof Divider,
    }
}

/**
 * @alias am-divided
 */
export const Divider = defineCustomElement({
    name: 'AmDivider',
    props,
    styles,
    setup(props, _) {
        const classes = computed(() => {
            return [
                'surface',
                props.direction,
                props.variant,
            ]
        })

        return () => (
            <span
                class={classes.value}
                aria-hidden='true'
            ></span>
        )
    },
})
