import { defineSSRCustomElement } from 'vue'
import { props } from './Typography.type'
import { sharedTypographyStyles } from './Typography.styles'

declare module 'vue' {
    export interface GlobalComponents {
        'am-typography': typeof renderTypography,
    }
}

/**
 * @alias am-typography
 */
export const renderTypography = defineSSRCustomElement({
    name: 'am-typography',
    props,
    render() {
        return (
            <span class="surface headline-large">
                <slot></slot>
            </span>
        )
    },
    styles: [
        sharedTypographyStyles
    ]
})
