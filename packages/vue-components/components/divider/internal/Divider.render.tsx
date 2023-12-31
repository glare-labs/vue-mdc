import { defineComponent } from 'vue'
import { props } from './Divider.type'
import { sharedDividerStyles } from './Divider.styles'
import { css } from 'aphrodite/no-important'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Divider': typeof renderDivider,
    }
}

/**
 * @alias am-divided
 */
export const renderDivider = defineComponent({
    name: 'AmDivider',
    props,
    computed: {
        classes() {
            return css(
                sharedDividerStyles.surface,
                sharedDividerStyles[this.direction],
                sharedDividerStyles[this.variant],
            )
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
})
