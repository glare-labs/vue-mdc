import { elevationTokensExtern } from '@/components/elevation/internal/Elevation.tokens'
import { iconTokensExtern } from '@/components/icon'
import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { iconButtonTokens, iconButtonTokensExtern } from './IconButton.tokens'

export const sharedIconButtonStyles = StyleSheet.create({

    root: {
        shape: `var(${iconButtonTokensExtern.shape}, var(${iconButtonTokens.shape}))`,
        height: `var(${iconButtonTokensExtern.height}, var(${iconButtonTokens.height}))`,
        width: `var(${iconButtonTokensExtern.width}, var(${iconButtonTokens.width}))`,
        borderRadius: `var(${iconButtonTokens.shape})`,
        
        ...tokens.typescale.labelLarge,

        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        justifyContent: 'center',
        textDecorationLine: 'none',
        verticalAlign: 'middle',
        margin: '8px',
        outlineStyle: 'none',
        ':hover': {
            cursor: 'pointer',
        },
        transitionDuration: tokens.motion.duration.medium1,
        transitionProperty: 'background, border, color, box-shadow',
        transitionTimingFunction: tokens.motion.easing.standard,
        '@media screen and (prefers-reduced-motion: reduce)': {
            transitionDuration: '0.01ms',
        },
        zIndex: 0,
        'user-select': 'none',
    },

    /**
     * shape
     */
    circular: {
        [iconButtonTokens.shape]: tokens.shape.corner.full,
    },
    rounded: {
        [iconButtonTokens.shape]: tokens.shape.corner.medium,
    },
    square: {
        [iconButtonTokens.shape]: tokens.shape.corner.none,
    },

    /**
     * size
     */
    small: {
        [iconButtonTokens.height]: '36px',
        [iconButtonTokens.width]: '36px',
        [iconTokensExtern['font-size']]: '18px',
    },
    medium: {
        [iconButtonTokens.height]: '40px',
        [iconButtonTokens.width]: '40px',
        [iconTokensExtern['font-size']]: '24px',
    },
    large: {
        [iconButtonTokens.height]: '44px',
        [iconButtonTokens.width]: '44px',
        [iconTokensExtern['font-size']]: '28px',
    },

    disabled: {
        backgroundColor: `color-mix(in srgb, ${tokens.color.surface.surface} 12%, transparent 88%)`,
        color: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%)`,
        cursor: 'not-allowed',
        [elevationTokensExtern.level]: '0',
        ':hover': {
            cursor: 'not-allowed',
            [elevationTokensExtern.level]: '0',
        },
        ':hover:active': {
            cursor: 'not-allowed',
            [elevationTokensExtern.level]: '0',
        },
    },

    /**
     * variant
     */
    filled: {
        [iconButtonTokens.color]: tokens.color.primary.onPrimary,
        [iconButtonTokens['toggle-unselect-color']]: tokens.color.primary.primary,
        [iconButtonTokens['toggle-selected-color']]: tokens.color.primary.onPrimary,
        [iconButtonTokens['container-color']]: tokens.color.primary.primary,
        [iconButtonTokens['unselect-container-color']]: tokens.color.surface.surfaceContainerHighest,
        [iconButtonTokens['selected-container-color']]: tokens.color.primary.primary,    
    },
    'filled-tonal': {
        [iconButtonTokens.color]: tokens.color.secondary.onSecondaryContainer,
        [iconButtonTokens['toggle-unselect-color']]: tokens.color.surface.onSurfaceVariant,
        [iconButtonTokens['toggle-selected-color']]: tokens.color.secondary.onSecondaryContainer,
        [iconButtonTokens['container-color']]: tokens.color.secondary.secondaryContainer,
        [iconButtonTokens['unselect-container-color']]: tokens.color.surface.surfaceContainerHighest,
        [iconButtonTokens['selected-container-color']]: tokens.color.secondary.secondaryContainer,
    },
    outlined: {
        [iconButtonTokens['toggle-unselect-color']]: tokens.color.surface.onSurfaceVariant,
        [iconButtonTokens['toggle-selected-color']]: tokens.color.surface.inverseOnSurface,
        [iconButtonTokens['container-color']]: 'transparent',
        [iconButtonTokens['unselect-container-color']]: 'transparent',
        [iconButtonTokens['selected-container-color']]: tokens.color.surface.inverseSurface,
        outline: `1px solid ${tokens.color.outline.outline}`,
    },
    standard: {
        // [iconButtonTokens.color]: tokens.color.secondary.onSecondaryContainer,
        [iconButtonTokens['toggle-unselect-color']]: tokens.color.surface.onSurfaceVariant,
        [iconButtonTokens['toggle-selected-color']]: tokens.color.primary.primary,
        [iconButtonTokens['container-color']]: 'transparent',
        [iconButtonTokens['unselect-container-color']]: 'transparent',
        [iconButtonTokens['selected-container-color']]: 'transparent',
    },

    /**
     * toggle and no-toggle
     */
    'toggle-unselect': {
        backgroundColor: `var(${iconButtonTokensExtern['unselect-container-color']}, var(${iconButtonTokens['unselect-container-color']}))`,
        color: `var(${iconButtonTokensExtern['toggle-unselect-color']}, var(${iconButtonTokens['toggle-unselect-color']}))`,
        [iconTokensExtern.color]:`var(${iconButtonTokensExtern['toggle-unselect-color']}, var(${iconButtonTokens['toggle-unselect-color']}))`,
    },
    'toggle-selected': {
        backgroundColor: `var(${iconButtonTokensExtern['selected-container-color']}, var(${iconButtonTokens['selected-container-color']}))`,
        color: `var(${iconButtonTokensExtern['toggle-selected-color']}, var(${iconButtonTokens['toggle-selected-color']}))`,
        [iconTokensExtern.color]:`var(${iconButtonTokensExtern['toggle-selected-color']}, var(${iconButtonTokens['toggle-selected-color']}))`,
    },
    'no-toggle': {
        backgroundColor: `var(${iconButtonTokensExtern['container-color']}, var(${iconButtonTokens['container-color']}))`,
        color: `var(${iconButtonTokensExtern['color']}, var(${iconButtonTokens['color']}))`,
        [iconTokensExtern.color]:`var(${iconButtonTokensExtern['color']}, var(${iconButtonTokens['color']}))`,
    }
})
