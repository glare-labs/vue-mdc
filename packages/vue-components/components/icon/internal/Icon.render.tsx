import { defineComponent } from 'vue'
import { props, slots } from './Icon.type'
import { sharedIconStyles } from './Icon.styles'
import { css } from 'aphrodite/no-important'


declare module 'vue' {
    export interface GlobalComponents {
        'Am-Icon': typeof renderIcon,
    }
}

/**
 * @alias am-icon
 */
export const renderIcon = defineComponent({
    name: 'AmIcon',
    props,
    slots,
    computed: {
        classes() {
            return css(
                sharedIconStyles.surface,
                sharedIconStyles[this.size],
                sharedIconStyles[this.variant]
            )
        }
    },
    render() {
        return (
            <span aria-hidden class={this.classes}>
                {this.$slots.default && this.$slots.default()}
            </span>
        )
    },
})
