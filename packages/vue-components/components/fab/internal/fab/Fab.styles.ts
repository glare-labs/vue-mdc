import { tokens } from '../../../../utils/tokens'
import { StyleSheet } from 'aphrodite'
import { fabTokens, fabTokensExtern } from './Fab.tokens'
import { elevationTokensExtern } from '../../../../components/elevation/internal/Elevation.tokens'
import { iconTokens, iconTokensExtern } from '../../../../components/icon/internal/Icon.tokens'
import { sharedStyles } from '../../../../utils/shared.styles'
import { rippleTokensExtern } from '../../../../components/ripple'

export const fabStyles = StyleSheet.create({
    root: {
        ...sharedStyles.base,
        ...sharedStyles.button,
        ...sharedStyles.buttonInputOptgroupSelectTextarea,

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
        zIndex: 0,
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
        [iconTokensExtern.color]: tokens.color.primary.onPrimaryContainer,
        ':hover': {
            [rippleTokensExtern['hover-color']]: tokens.color.primary.onPrimaryContainer,
            [rippleTokensExtern['hover-opacity']]: '0.08',
        },
        ':active': {
            [rippleTokensExtern['press-color']]: tokens.color.primary.onPrimaryContainer,
            [rippleTokensExtern['press-opacity']]: '0.1',
        }
    },
    secondary: {
        [fabTokens.background]: tokens.color.secondary.secondaryContainer,
        [fabTokens.color]: tokens.color.secondary.onSecondaryContainer,
        [iconTokensExtern.color]: tokens.color.secondary.onSecondaryContainer,
        ':hover': {
            [rippleTokensExtern['hover-color']]: tokens.color.secondary.onSecondaryContainer,
            [rippleTokensExtern['hover-opacity']]: '0.08',
        },
        ':active': {
            [rippleTokensExtern['press-color']]: tokens.color.secondary.onSecondaryContainer,
            [rippleTokensExtern['press-opacity']]: '0.1',
        }
    },
    tertiary: {
        [fabTokens.background]: tokens.color.tertiary.tertiaryContainer,
        [fabTokens.color]: tokens.color.tertiary.onTertiaryContainer,
        [iconTokensExtern.color]: tokens.color.tertiary.onTertiaryContainer,
        ':hover': {
            [rippleTokensExtern['hover-color']]: tokens.color.tertiary.onTertiaryContainer,
            [rippleTokensExtern['hover-opacity']]: '0.08',
        },
        ':active': {
            [rippleTokensExtern['press-color']]: tokens.color.tertiary.onTertiaryContainer,
            [rippleTokensExtern['press-opacity']]: '0.1',
        }
    },
    surface: {
        [fabTokens.background]: tokens.color.surface.surfaceContainer,
        [fabTokens.color]: tokens.color.surface.onSurface,
        [iconTokensExtern.color]: tokens.color.surface.onSurface,
        ':hover': {
            [rippleTokensExtern['hover-color']]: tokens.color.surface.onSurface,
            [rippleTokensExtern['hover-opacity']]: '0.08',
        },
        ':active': {
            [rippleTokensExtern['press-color']]: tokens.color.surface.onSurface,
            [rippleTokensExtern['press-opacity']]: '0.1',
        }
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
        [iconTokensExtern['font-size']]: '24px',
    },
    mediumIconSize: {
        [iconTokens['font-size']]: '24px',
    },
    largeIconSize: {
        [iconTokensExtern['font-size']]: '48px',
    },

    /**
     * disabled
     */
    disabledRoot: {
        ...sharedStyles.disabled,

        filter: 'grayscale(1)',
        backgroundColor: `color-mix(in srgb, ${tokens.color.surface.surface} 75%, gray 25%)`,
        color: `color-mix(in srgb, ${tokens.color.surface.onSurface} 5%, gray 95%)`,
        [iconTokensExtern.color]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 5%, gray 95%)`,
        borderColor: 'transparent',
        boxShadow: 'none',
        [elevationTokensExtern.level]: '0',
        ':hover': {
            [elevationTokensExtern.level]: '0',
        },
        ':active': {
            [elevationTokensExtern.level]: '0',
        },
    }
})
