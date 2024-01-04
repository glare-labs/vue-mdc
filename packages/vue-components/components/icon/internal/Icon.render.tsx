import { defineComponent } from 'vue'
import { props, slots } from './Icon.type'
import css from './Icon.module.css'

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
            return [
                css.surface,
                css[this.size],
                css[this.variant]
            ]
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
