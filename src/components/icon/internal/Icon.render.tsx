import { defineComponent } from 'vue'
import { props, slots } from './Icon.type'
import { css } from 'aphrodite'
import { iconStyles } from './Icon.styles'

export const renderIcon = defineComponent({
    name: 'MAMVIcon',
    props,
    slots,
    computed: {
        classes() {
            return  css(
                iconStyles.root,
                iconStyles[this.size],
                iconStyles[this.variant],
            )
        }
    },
    render() {
        return (
            <span aria-hidden class={this.classes}>
                { this.$slots.default && this.$slots.default() }
            </span>
        )
    }
})