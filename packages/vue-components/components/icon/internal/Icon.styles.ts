import { iconTokens, iconTokensExtern } from './Icon.tokens'
import { makeVar, tokens } from '../../../utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'

export const sharedIconStyles = StyleSheet.create({
    surface: {
        [iconTokens.color]: tokens.color.surface.onSurface,

        'line-height': makeVar(iconTokensExtern['line-height'], iconTokens['line-height']),
        'font-size': makeVar(iconTokensExtern['font-size'], iconTokens['font-size']),
        'font-family': makeVar(iconTokensExtern['font-family'], iconTokens['font-family']),
        color: makeVar(iconTokensExtern.color, iconTokens.color),

        'pointer-events': 'none',
        'user-select': 'none',
        'z-index': '0',
    },

    small: {
        [iconTokens['font-size']]: '22px',
        [iconTokens['line-height']]: '22px',
    },
    medium: {
        [iconTokens['font-size']]: '24px',
        [iconTokens['line-height']]: '24px',
    },
    large: {
        [iconTokens['font-size']]: '44px',
        [iconTokens['line-height']]: '44px',
    },

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
