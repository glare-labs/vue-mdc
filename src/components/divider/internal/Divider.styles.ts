import { StyleSheet } from 'aphrodite'
import { dividerTokens, dividerTokensExtern } from './Divider.tokens'
import { tokens } from '@/utils/tokens'

export const dividerStyles = StyleSheet.create({
    root: {
        boxSizing: 'border-box',
        display: 'flex',

        [dividerTokens.thickness]: `var(${dividerTokensExtern.thickness}, 1px)`,
        [dividerTokens.color]: `var(${dividerTokensExtern.color}, ${tokens.color.outline.outlineVariant})`,
        [dividerTokens['margin-top']]: `var(${dividerTokensExtern['margin-top']}, 8px)`,
        [dividerTokens['margin-bottom']]: `var(${dividerTokensExtern['margin-bottom']}, 8px)`,

        width: `var(${dividerTokens.width})`,
        height: `var(${dividerTokens.thickness})`,
        color: `var(${dividerTokens.color})`,
        backgroundColor: `var(${dividerTokens.color})`,
        marginLeft: `var(${dividerTokens['margin-left']})`,
        marginRight: `var(${dividerTokens['margin-right']})`,
        marginTop: `var(${dividerTokens['margin-top']})`,
        marginBottom: `var(${dividerTokens['margin-bottom']})`,
    },

    'no-inset': {
        [dividerTokens.width]: `var(${dividerTokensExtern.width}, 100%)`,
        [dividerTokens['margin-left']]: `var(${dividerTokensExtern['margin-left']}, 0)`,
        [dividerTokens['margin-right']]: `var(${dividerTokensExtern['margin-right']}, 0)`,
    },
    'inset-left': {
        [dividerTokens['margin-left']]: `var(${dividerTokensExtern['margin-left']}, 16px)`,
        [dividerTokens['margin-right']]: `var(${dividerTokensExtern['margin-right']}, 0)`,
    },
    'inset-right': {
        [dividerTokens['margin-left']]: `var(${dividerTokensExtern['margin-left']}, 0)`,
        [dividerTokens['margin-right']]: `var(${dividerTokensExtern['margin-right']}, 16px)`,
    },
    'middle-inset': {
        [dividerTokens['margin-left']]: `var(${dividerTokensExtern['margin-left']}, 16px)`,
        [dividerTokens['margin-right']]: `var(${dividerTokensExtern['margin-right']}, 16px)`,
    }
})
