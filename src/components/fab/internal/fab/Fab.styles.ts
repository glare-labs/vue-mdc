import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite'
import { fabTokens, fabTokensExtern } from './Fab.tokens'
import { elevationTokensExtern } from '@/components/elevation/internal/Elevation.tokens'
import { iconTokens, iconTokensExtern } from '@/components/icon/internal/Icon.tokens'

export const fabStyles = StyleSheet.create({
    root: {
        position: 'relative',
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'inline-flex',
        justifyContent: 'center',
        textDecorationLine: 'none',
        verticalAlign: 'middle',
        alignSelf: 'flex-start',
        margin: 0,
        outlineStyle: 'none',
        transitionDuration: tokens.motion.duration.medium1,
        transitionProperty: 'background, border, color, box-shadow',
        transitionTimingFunction: tokens.motion.easing.standard,
        '@media screen and (prefers-reduced-motion: reduce)': {
            transitionDuration: '0.01ms',
        },
        zIndex: 1,
        'user-select': 'none',
        borderRadius: `var(${fabTokensExtern.shape}, var(${fabTokens.shape}))`,
        backgroundColor: `var(${fabTokensExtern.background}, var(${fabTokens.background}))`,
        color: `var(${fabTokensExtern.color}, var(${fabTokens.color}))`,
        height: `var(${fabTokensExtern.height}, var(${fabTokens.height}))`,
        width: `var(${fabTokensExtern.width}, var(${fabTokens.width}))`,
    },

    /**
     * variant
     */
    primary: {
        [fabTokens.background]: tokens.color.primary.primaryContainer,
        [fabTokens.color]: tokens.color.primary.onPrimaryContainer,
    },
    secondary: {
        [fabTokens.background]: tokens.color.secondary.secondaryContainer,
        [fabTokens.color]: tokens.color.secondary.onSecondaryContainer,
    },
    tertiary: {
        [fabTokens.background]: tokens.color.tertiary.tertiaryContainer,
        [fabTokens.color]: tokens.color.tertiary.onTertiaryContainer,
    },
    surface: {
        [fabTokens.background]: tokens.color.surface.surfaceContainer,
        [fabTokens.color]: tokens.color.surface.onSurface,
    },

    /**
     * size
     */
    small: {
        [fabTokens.height]: '48px',
        [fabTokens.width]: '48px',
    },
    medium: {
        [fabTokens.height]: '56px',
        [fabTokens.width]: '56px',
    },
    large: {
        [fabTokens.height]: '96px',
        [fabTokens.width]: '96px',
    },

    /**
     * shape
     */
    smallShape: {
        [fabTokens.shape]: tokens.shape.corner.large,
    },
    mediumShape: {
        [fabTokens.shape]: tokens.shape.corner.large,
    },
    largeShape: {
        [fabTokens.shape]: tokens.shape.corner.extraLarge,
    },

    /**
     * elevation
     */
    containerElevation: {
        [elevationTokensExtern.level]: tokens.elevation.level3,
        ':hover': {
            cursor: 'pointer',
            [elevationTokensExtern.level]: tokens.elevation.level4,
        },
        ':active': {
            [elevationTokensExtern.level]: tokens.elevation.level3,
        },
    },
    containerElevationLow: {
        [elevationTokensExtern.level]: tokens.elevation.level1,
        ':hover': {
            cursor: 'pointer',
            [elevationTokensExtern.level]: tokens.elevation.level2,
        },
        ':active': {
            [elevationTokensExtern.level]: tokens.elevation.level1,
        },
    },
    containerElevationHigh: {
        [elevationTokensExtern.level]: tokens.elevation.level4,
        ':hover': {
            cursor: 'pointer',
            [elevationTokensExtern.level]: tokens.elevation.level5,
        },
        ':active': {
            [elevationTokensExtern.level]: tokens.elevation.level4,
        },
    },
    
    /**
     * icon
     */
    smallIconSize: {
        [iconTokensExtern.fontSize]: '24px',
    },
    mediumIconSize: {
        [iconTokens.fontSize]: '24px',
    },
    largeIconSize: {
        [iconTokensExtern.fontSize]: '48px',
    },

    /**
     * disabled
     */
    disabledRoot: {
        filter: 'grayscale(1)',
        backgroundColor: `color-mix(in srgb, ${tokens.color.surface.surface} 75%, gray 25%)`,
        color: `color-mix(in srgb, ${tokens.color.surface.onSurface} 5%, gray 95%)`,
        borderColor: 'transparent',
        boxShadow: 'none',
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
    }
})