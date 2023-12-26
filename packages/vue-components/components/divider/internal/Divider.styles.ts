import { StyleSheet } from 'aphrodite/no-important'
import { dividerTokens, dividerTokensExtern } from './Divider.tokens'
import { tokens } from '../../../utils/tokens'

export const sharedDividerStyles = StyleSheet.create({
    root: {
        boxSizing: 'border-box',

        [dividerTokens.thickness]: '1px',
        [dividerTokens.color]: `var(${dividerTokensExtern.color}, ${tokens.color.outline.outlineVariant})`,

        backgroundColor: `var(${dividerTokens.color})`,

        position: 'relative',
    },

    /**
     * direction
     */
    horizontal: {
        display: 'flex',

        width: `var(${dividerTokensExtern.width}, var(${dividerTokens.width}))`,
        height: `var(${dividerTokensExtern.thickness}, var(${dividerTokens.thickness}))`,

        marginLeft: `var(${dividerTokensExtern['margin-left']}, var(${dividerTokens['margin-left']}))`,
        marginRight: `var(${dividerTokensExtern['margin-right']}, var(${dividerTokens['margin-right']}))`,
        marginTop: `var(${dividerTokensExtern['margin-top']}, 8px)`,
        marginBottom: `var(${dividerTokensExtern['margin-bottom']}, 8px)`,
    },
    vertical: {
        display: 'inline-flex',

        width: `var(${dividerTokensExtern.thickness}, var(${dividerTokens.thickness}))`,
        height: `var(${dividerTokensExtern.height}, var(${dividerTokens.height}))`,

        marginLeft: `var(${dividerTokensExtern['margin-left']}, 8px)`,
        marginRight: `var(${dividerTokensExtern['margin-right']}, 8px)`,
        marginTop: `var(${dividerTokensExtern['margin-top']}, var(${dividerTokens['margin-top']}))`,
        marginBottom: `var(${dividerTokensExtern['margin-bottom']}, var(${dividerTokens['margin-bottom']}))`,
    },

    'no-inset': {
        [dividerTokens.width]: '100%',
        [dividerTokens.height]: '100%',

        [dividerTokens['margin-left']]: '0',
        [dividerTokens['margin-right']]: '0',
        [dividerTokens['margin-top']]: '0',
        [dividerTokens['margin-bottom']]: '0',
    },
    'inset-left': {
        [dividerTokens.height]: `calc(100% - var(${dividerTokens['margin-top']}))`,

        [dividerTokens['margin-left']]: '16px',
        [dividerTokens['margin-right']]: '0',
        [dividerTokens['margin-top']]: '16px',
        [dividerTokens['margin-bottom']]: '0',
    },
    'inset-right': {
        [dividerTokens.height]: `calc(100% - var(${dividerTokens['margin-bottom']}))`,

        [dividerTokens['margin-left']]: '0',
        [dividerTokens['margin-right']]: '16px',
        [dividerTokens['margin-top']]: '0',
        [dividerTokens['margin-bottom']]: '16px',
    },
    'middle-inset': {
        [dividerTokens.height]: `calc(100% - var(${dividerTokens['margin-top']}) - var(${dividerTokens['margin-bottom']}))`,

        [dividerTokens['margin-left']]: '16px',
        [dividerTokens['margin-right']]: '16px',
        [dividerTokens['margin-top']]: '16px',
        [dividerTokens['margin-bottom']]: '16px',
    }
})
