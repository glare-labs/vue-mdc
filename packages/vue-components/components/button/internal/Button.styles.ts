import { StyleSheet } from 'aphrodite/no-important'
import { tokens } from '../../../utils/tokens'
import { sharedStyles } from '../../../utils/shared.styles.ts'
import { buttonTokens, buttonTokensExtern } from './Button.tokens'
import { elevationTokensExtern } from '../../../components/elevation/internal/Elevation.tokens'
import { iconTokensExtern } from '../../../components/icon'

export const sharedButtonStyles = StyleSheet.create({

    root: {
        ...sharedStyles.base,
        ...sharedStyles.button,
        ...sharedStyles.buttonInputOptgroupSelectTextarea,

        shape: `var(${buttonTokensExtern.shape}, var(${buttonTokens.shape}))`,
        height: `var(${buttonTokensExtern.height}, var(${buttonTokens.height}))`,
        borderRadius: `var(${buttonTokens.shape})`,

        paddingLeft: `var(${buttonTokensExtern['padding-left']}, var(${buttonTokens['padding-left']}))`,
        paddingRight: `var(${buttonTokensExtern['padding-right']}, var(${buttonTokens['padding-right']}))`,

        backgroundColor: `var(${buttonTokensExtern['background-color']}, var(${buttonTokens['background-color']}))`,
        color: `var(${buttonTokensExtern['color']}, var(${buttonTokens['color']}))`,

        ...tokens.typescale.labelLarge,
        fontSize: `var(${buttonTokensExtern['font-size']}, var(${buttonTokens['font-size']}))`,

        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        justifyContent: 'center',
        'gap': '8px',
        textDecorationLine: 'none',
        verticalAlign: 'middle',
        margin: 0,
        outlineStyle: 'none',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
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
        [buttonTokens.shape]: tokens.shape.corner.full,
    },
    rounded: {
        [buttonTokens.shape]: tokens.shape.corner.medium,
    },
    square: {
        [buttonTokens.shape]: tokens.shape.corner.none,
    },

    /**
     * size
     */
    small: {
        [buttonTokens.height]: '36px',
        [iconTokensExtern['font-size']]: '18px',
        [buttonTokens['font-size']]: '14px',
    },
    medium: {
        [buttonTokens.height]: '40px',
        [iconTokensExtern['font-size']]: '18px',
        [buttonTokens['font-size']]: '14px',
    },
    large: {
        [buttonTokens.height]: '44px',
        [iconTokensExtern['font-size']]: '20px',
        [buttonTokens['font-size']]: '16px',
    },

    /**
     * padding
     */
    padding: {
        [buttonTokens['padding-left']]: '24px',
        [buttonTokens['padding-right']]: '24px',
    },
    paddingWithIcon: {
        [buttonTokens['padding-left']]: '16px',
        [buttonTokens['padding-right']]: '24px',
    },

    /**
     * icon-only
     */
    'icon-only': {
        [buttonTokens['padding-left']]: '24px',
    },

    disabled: {
        ...sharedStyles.disabled,

        backgroundColor: `color-mix(in srgb, ${tokens.color.surface.surface} 12%, transparent 88%)`,
        color: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%)`,
        [elevationTokensExtern.level]: '0',
        ':hover': {
            [elevationTokensExtern.level]: '0',
        },
        ':hover:active': {
            [elevationTokensExtern.level]: '0',
        },
    },

    /**
     * variant
     */
    elevated: {
        [buttonTokens['background-color']]: tokens.color.surface.surfaceContainerLow,
        [buttonTokens.color]: tokens.color.primary.primary,
        [iconTokensExtern.color]: tokens.color.primary.primary,

        [elevationTokensExtern.level]: '1',
        ':hover': {
            [elevationTokensExtern.level]: '2',
        },
        ':active': {
            [elevationTokensExtern.level]: '1',
        }

    },
    filled: {
        [buttonTokens['background-color']]: tokens.color.primary.primary,
        [buttonTokens.color]: tokens.color.primary.onPrimary,
        [iconTokensExtern.color]: tokens.color.primary.onPrimary,

        [elevationTokensExtern.level]: '0',
        ':hover': {
            [elevationTokensExtern.level]: '1',
        },
        ':active': {
            [elevationTokensExtern.level]: '0',
        }

    },
    'filled-tonal': {
        [buttonTokens['background-color']]: tokens.color.secondary.secondaryContainer,
        [buttonTokens.color]: tokens.color.secondary.onSecondaryContainer,
        [iconTokensExtern.color]: tokens.color.secondary.onSecondaryContainer,

        [elevationTokensExtern.level]: '0',
        ':hover': {
            [elevationTokensExtern.level]: '1',
        },
        ':active': {
            [elevationTokensExtern.level]: '0',
        }

    },
    outlined: {
        [buttonTokens['background-color']]: 'transparent',
        outline: `1px solid ${tokens.color.outline.outline}`,
        [buttonTokens.color]: tokens.color.primary.primary,
        [iconTokensExtern.color]: tokens.color.primary.primary,

        [elevationTokensExtern.level]: '0',
        ':hover': {
            [elevationTokensExtern.level]: '0',
        },
        ':active': {
            [elevationTokensExtern.level]: '0',
        }

    },
    text: {
        [buttonTokens['background-color']]: 'transparent',
        [buttonTokens.color]: tokens.color.primary.primary,
        [iconTokensExtern.color]: tokens.color.primary.primary,

        [elevationTokensExtern.level]: '0',
        ':hover': {
            [elevationTokensExtern.level]: '0',
        },
        ':active': {
            [elevationTokensExtern.level]: '0',
        }

    },

})
