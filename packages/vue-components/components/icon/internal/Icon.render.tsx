import { defineSSRCustomElement } from 'vue'
import { props } from './Icon.type'
import { sharedIconStyles } from './Icon.styles'

declare module 'vue' {
    export interface GlobalComponents {
        'am-icon': typeof renderIcon,
    }
}

/**
 * @alias am-icon
 */
export const renderIcon = defineSSRCustomElement({
    name: 'AmIcon',
    props,
    computed: {
        classes() {
            return `surface ${this.variant} ${this.size}`
        }
    },
    render() {
        return (
            <span aria-hidden class={this.classes}>
                <slot></slot>
            </span>
        )
    },
    styles: [
        sharedIconStyles
    ]
})
