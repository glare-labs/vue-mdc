import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { checkboxTokens, checkboxTokensExtern } from '..'

export const sharedCheckboxStyles = StyleSheet.create({
    root: {
        '-webkit-appearance': 'none',
        appearance: 'none',
        margin: 4,
        display: 'grid',
        'place-content': 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 0,

        height: `var(${checkboxTokensExtern.height}, var(${checkboxTokens.height}))`,
        width: `var(${checkboxTokensExtern.width}, var(${checkboxTokens.width}))`,
        outline: `var(${checkboxTokensExtern['border-width']}, var(${checkboxTokens['border-width']})) solid var(${checkboxTokensExtern['border-color']}, var(${checkboxTokens['border-color']}))`,
        backgroundColor: `var(${checkboxTokensExtern['background-color']}, var(${checkboxTokens['background-color']}))`,

        [checkboxTokens.shape]: tokens.shape.corner.extraSmall,
        borderRadius: `var(${checkboxTokensExtern.shape}, var(${checkboxTokens.shape}))`,

        transitionDuration: tokens.motion.duration.medium1,
        transitionTimingFunction: tokens.motion.easing.standardDecelerate,

        '::before': {
            content: '""',
            position: 'relative',
            height: `var(${checkboxTokensExtern['icon-size']}, var(${checkboxTokens['icon-size']}))`,
            width: `var(${checkboxTokensExtern['icon-size']}, var(${checkboxTokens['icon-size']}))`,
            backgroundColor: `var(${checkboxTokensExtern.color}, var(${checkboxTokens.color}))`,
            transitionDuration: tokens.motion.duration.medium1,
            transitionTimingFunction: tokens.motion.easing.standardDecelerate,
            transformOrigin: 'center center',
            'clip-path': 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
            zIndex: 0,
        },

        ':hover': {
            cursor: 'pointer',
        },
        ':hover:active': {
            cursor: 'pointer',
        },
    },

    /**
     * size
     */
    small: {
        [checkboxTokens.height]: '16px',
        [checkboxTokens.width]: '16px',
        [checkboxTokens['icon-size']]: '12px',
    },
    medium: {
        [checkboxTokens.height]: '18px',
        [checkboxTokens.width]: '18px',
        [checkboxTokens['icon-size']]: '12px',
    },
    large: {
        [checkboxTokens.height]: '24px',
        [checkboxTokens.width]: '24px',
        [checkboxTokens['icon-size']]: '16px',
    },

    /**
     * shape
     */
    circular: {
        [checkboxTokens.shape]: tokens.shape.corner.full,
    },
    rounded: {
        [checkboxTokens.shape]: tokens.shape.corner.extraSmall,
    },
    square: {
        [checkboxTokens.shape]: tokens.shape.corner.none,
    },

    /**
     * check states
     */
    unselect: {
        [checkboxTokens['background-color']]: 'transparent',
        [checkboxTokens['border-width']]: '2px',
        [checkboxTokens['border-color']]: tokens.color.surface.surfaceVariant,
        '::before': {
            [checkboxTokens.color]: tokens.color.surface.onSurface,
            transform: 'scale(0)',
        },
    },
    selected: {
        [checkboxTokens['background-color']]: tokens.color.primary.primary,
        [checkboxTokens['border-width']]: '0px',
        [checkboxTokens['border-color']]: tokens.color.primary.onPrimary,
        '::before': {
            [checkboxTokens.color]: tokens.color.primary.onPrimary,
            transform: 'scale(1)',
        },
    },

    /**
     * disabled
     */
    disabled: {
        pointerEvents: 'none',
        // [checkboxTokens['background-color']]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 12%, transparent 88%)`,
        backgroundColor: `color-mix(in srgb, var(${checkboxTokens['background-color']}) 12%, transparent 88%)`,
        [checkboxTokens['border-color']]: tokens.color.surface.surfaceVariant,
        '::before': {
            // [checkboxTokens.color]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%)`,
            color: `color-mix(in srgb, var(${checkboxTokens.color}) 38%, transparent 62%)`,
        },
    },
})
