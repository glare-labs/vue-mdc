import { defineComponent } from 'vue'
import { props, slots } from './Typography.type'
import { TypographyStyles } from './Typography.css'

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
            return [
                TypographyStyles.surface,
                TypographyStyles.fonts[this.variant]
            ]
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
