import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite'

// for filled
const backgroundColorVar = '--button-background-color'
const onBackgroundColorVar = '--button-on-background-color'
const backgroundContainerColorVar = '--button-background-continer-color'
const onBackgroundContainerColorVar = '--button-on-background-container-color'

export const iconButtonStyles = StyleSheet.create({
    root: {
        position: 'relative',
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'inline-flex',
        justifyContent: 'center',
        textDecorationLine: 'none',
        verticalAlign: 'middle',
        margin: 0,
        outlineStyle: 'none',
        transitionDuration: tokens.durationFaster,
        transitionProperty: 'background, border, color',
        transitionTimingFunction: tokens.curveEasyEase,
        '@media screen and (prefers-reduced-motion: reduce)': {
            transitionDuration: '0.01ms',
        },
        zIndex: 0,
        borderRadius: tokens.borderRadiusCircular,
        'aspect-ratio': '1/1',
        cursor: 'pointer',
        'user-select': 'none',
    },
    iconRoot: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-flex',
    },

    toggle: {
        backgroundColor: `var(${backgroundContainerColorVar})`,
        color: `var(${onBackgroundContainerColorVar})`,
        ':hover': {
            backgroundColor: `color-mix(in srgb, var(${backgroundContainerColorVar}) 75%, black 15%)`,
        }
    },
    untoggle: {
        backgroundColor: `var(${backgroundColorVar})`,
        color: `var(${onBackgroundColorVar})`,
        ':hover': {
            backgroundColor: `color-mix(in srgb, var(${backgroundColorVar}) 75%, white 15%)`,
        },
    },

    /**
     * size
     */
    small: {
        padding: tokens.spacingHorizontalL,
        height: '24px',
        width: '24px',
    },
    medium: {
        padding: tokens.spacingHorizontalXL,
        height: '32px',
        width: '32px',
    },
    large: {
        padding: tokens.spacingHorizontalXXL,
        height: '40px',
        width: '40px',
    },

    smallIcon: {
    },
    mediumIcon: {
    },
    largeIcon: {
    },

    /**
     * variant
     */
    surface: {
        [backgroundColorVar]: tokens.surface,
        [onBackgroundColorVar]: tokens.onSurface,
        ':hover': {
            [backgroundColorVar]: `color-mix(in srgb, ${tokens.surface} 5%, black 15%)`,
        }
    },
    primary: {
        [backgroundColorVar]: tokens.primary,
        [onBackgroundColorVar]: tokens.onPrimary,
        [backgroundContainerColorVar]: tokens.primaryContainer,
        [onBackgroundContainerColorVar]: tokens.onPrimaryContainer,
    },
    secondary: {
        [backgroundColorVar]: tokens.secondary,
        [onBackgroundColorVar]: tokens.onSecondary,
        [backgroundContainerColorVar]: tokens.secondaryContainer,
        [onBackgroundContainerColorVar]: tokens.onSecondaryContainer,
    },
    tertiary: {
        [backgroundColorVar]: tokens.tertiary,
        [onBackgroundColorVar]: tokens.onTertiary,
        [backgroundContainerColorVar]: tokens.tertiaryContainer,
        [onBackgroundContainerColorVar]: tokens.onTertiaryContainer,
    },
    error: {
        [backgroundColorVar]: tokens.error,
        [onBackgroundColorVar]: tokens.onError,
        [backgroundContainerColorVar]: tokens.errorContainer,
        [onBackgroundContainerColorVar]: tokens.onErrorContainer,
    },

    /**
     * disabled
     */
    disabledRoot: {
        filter: 'grayscale(1)',
        backgroundColor: `color-mix(in srgb, ${tokens.surface} 75%, gray 25%)`,
        color: `color-mix(in srgb, ${tokens.onSurface} 5%, gray 95%)`,
        borderColor: 'transparent',
        boxShadow: 'none',
        cursor: 'not-allowed',
        ':hover': {
            cursor: 'not-allowed',
        },
        ':hover:active': {
            cursor: 'not-allowed',
        },

    }
})
