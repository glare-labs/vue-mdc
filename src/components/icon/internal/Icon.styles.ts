import { StyleSheet } from 'aphrodite/no-important'
import { iconTokens, iconTokensExtern } from './Icon.tokens'

export const iconStyles = StyleSheet.create({
    root: {
        fontFamily: `var(${iconTokensExtern.fontFamily}, var(${iconTokens.fontFamily}))`,
        fontSize: `var(${iconTokensExtern.fontSize}, var(${iconTokens.fontSize}))`,
    },
    
    /**
     * size
     */
    small: {
        [iconTokens.fontSize]: '24px',
    },
    medium: {
        [iconTokens.fontSize]: '24px',
    },
    large: {
        [iconTokens.fontSize]: '48px',
    },

    /**
     * variant
     */
    outlined: {
        [iconTokens.fontFamily]: 'Material Symbols Outlined',
    },
    rounded: {
        [iconTokens.fontFamily]: 'Material Symbols Rounded',
    },
    sharp: {
        [iconTokens.fontFamily]: 'Material Symbols Sharp',
    },
})
