import { computed, defineCustomElement } from 'vue'
import { props, slots } from './Typography.type'
import { GenerateTypographyStyle } from './Typography.styles'

declare module 'vue' {
    export interface GlobalComponents {
        'am-typography': typeof Typography,
    }
}

/**
 * @alias am-typography
 */
export const Typography = defineCustomElement({
    name: 'AmTypography',
    props,
    slots,
    setup(props, ctx) {

        /**
         * Generate Styles that are in use only.
         */
        const typoStyle = computed(() => {
            return GenerateTypographyStyle(props.variant)
        })

        return () => (
            <span style={typoStyle.value}>
                <slot></slot>
            </span>
        )
    },
    inheritAttrs: true,
})
