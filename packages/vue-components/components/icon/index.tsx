import { computed, defineCustomElement } from 'vue'
import { props, slots } from './Icon.type'
import { styles } from './Icon.styles'

declare module 'vue' {
    export interface GlobalComponents {
        'am-icon': typeof Icon,
    }
}

/**
 * @alias am-icon
 */
export const Icon = defineCustomElement({
    name: 'AmIcon',
    props,
    slots,
    styles,
    setup(props, _) {
        const classes = computed(() => {
            return [
                'surface',
                props.size,
                props.variant,
            ]
        })


        return () => (
            <span aria-hidden class={classes.value}>
                <slot></slot>
            </span>
        )
    },
})
