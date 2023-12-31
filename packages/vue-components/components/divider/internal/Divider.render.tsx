import { defineSSRCustomElement } from 'vue'
import { props } from './Divider.type'
import { sharedDividerStyles } from './Divider.styles'

declare module 'vue' {
    export interface GlobalComponents {
        'am-divider': typeof renderDivider,
    }
}

/**
 * @alias am-divided
 */
export const renderDivider = defineSSRCustomElement({
    name: 'AmDivider',
    props,
    computed: {
        classes() {
            return `surface ${this.variant} ${this.direction}`
        },
    },
    render() {
        return (
            <span
                class={this.classes}
                aria-hidden='true'
            ></span>
        )
    },
    styles: [
        sharedDividerStyles
    ]
})
