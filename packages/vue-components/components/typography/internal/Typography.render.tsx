import { defineComponent } from 'vue'
import { props, slots } from './Typography.type'
import { sharedTypographyStyles } from './Typography.styles'
import { css } from 'aphrodite/no-important'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Typography': typeof renderTypography,
    }
}

/**
 * @alias am-typography
 */
export const renderTypography = defineComponent({
    name: 'AmTypography',
    props,
    slots,
    computed: {
        classes() {
            return css(
                sharedTypographyStyles.surface,
                sharedTypographyStyles[this.variant]
            )
        }
    },
    render() {
        return (
            <span class={this.classes}>
                {this.$slots.default && this.$slots.default()}
            </span>
        )
    },
})
