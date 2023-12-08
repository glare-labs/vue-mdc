import { StyleSheet } from 'aphrodite/no-important'
import { iconTokens, iconTokensExtern } from './Icon.tokens'
import { tokens } from '@/utils/tokens'

export const iconStyles = StyleSheet.create({
    root: {
        fontFamily: `var(${iconTokensExtern['font-family']}, var(${iconTokens['font-family']}))`,
        fontSize: `var(${iconTokensExtern['font-size']}, var(${iconTokens['font-size']}))`,

        [iconTokens.color]: tokens.color.surface.onSurface,

        color: `var(${iconTokensExtern.color}, var(${iconTokens.color}))`,

        pointerEvent: 'none',
        'user-select': 'none',
    },
    
    /**
     * size
     */
    small: {
        [iconTokens['font-size']]: '24px',
    },
    medium: {
        [iconTokens['font-size']]: '24px',
    },
    large: {
        [iconTokens['font-size']]: '48px',
    },

    /**
     * variant
     */
    outlined: {
        [iconTokens['font-family']]: 'Material Symbols Outlined',
    },
    rounded: {
        [iconTokens['font-family']]: 'Material Symbols Rounded',
    },
    sharp: {
        [iconTokens['font-family']]: 'Material Symbols Sharp',
    },
})
