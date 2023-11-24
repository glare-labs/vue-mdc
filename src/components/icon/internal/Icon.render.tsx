import { defineComponent } from 'vue'
import { props, slots } from './Icon.type'
import { css } from 'aphrodite'
import { iconStyles } from './Icon.styles'

export const renderIcon = () => defineComponent({
    name: 'MAMVIcon',
    props,
    slots,
    computed: {
        classes() {
            return  css(
                iconStyles[this.size],
                iconStyles[this.variant],
            )
        }
    },
    mounted() {
        /**
         * Aria
         */
        const target = this.$el as HTMLElement
        if(target.getAttribute('aria-hidden') === 'false') {
            target.removeAttribute('aria-hidden')
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