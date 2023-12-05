import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite'

const backgroundColorVar = '--button-background-color'
const onBackgroundColorVar = '--button-on-background-color'

const heightVar = '--height'
const minWidthVar = '--min-width'
const iconSizeVar = '--icon-size'
const elevationVar = '--elevation-level'

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
        'gap': '8px',
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
        paddingLeft: '16px',
        paddingRight: '16px',
    },

    /**
     * variant
     */
    primary: {
        [backgroundColorVar]: tokens.color.primary.primaryContainer,
        [onBackgroundColorVar]: tokens.color.primary.onPrimaryContainer,
    },
    secondary: {
        [backgroundColorVar]: tokens.color.secondary.secondaryContainer,
        [onBackgroundColorVar]: tokens.color.secondary.onSecondaryContainer,
    },
    tertiary: {
        [backgroundColorVar]: tokens.color.tertiary.tertiaryContainer,
        [onBackgroundColorVar]: tokens.color.tertiary.onTertiaryContainer,
    },
    surface: {
        [backgroundColorVar]: tokens.color.surface.surfaceContainer,
        [onBackgroundColorVar]: tokens.color.surface.onSurface,
    },

    containerColor: {
        backgroundColor: `var(${backgroundColorVar})`,
        color: `var(${onBackgroundColorVar})`,
    },

    containerShape: {
        borderRadius: tokens.shape.corner.large,
    },

    containerSize: {
        height: `var(${heightVar}, 56px)`,
        minWidth: `var(${minWidthVar}, 80px)`,
    },

    containerElevation: {
        [elevationVar]: tokens.elevation.level3,
        ':hover': {
            cursor: 'pointer',
            [elevationVar]: tokens.elevation.level4,
        },
        ':active': {
            [elevationVar]: tokens.elevation.level3,
        },
    },
    containerLowElevation: {
        [elevationVar]: tokens.elevation.level1,
        ':hover': {
            cursor: 'pointer',
            [elevationVar]: tokens.elevation.level2,
        },
        ':active': {
            [elevationVar]: tokens.elevation.level1,
        },
    },
    
    iconRoot: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-flex',
    },
    iconSize: {
        fontSize: `var(${iconSizeVar}, 24px)`,
        '--icon-font-size': '24px',
    },
    iconColor: {
        color: `var(${onBackgroundColorVar})`,
    },

    containerLabel: {
        ...tokens.typescale.labelLarge,
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
        [elevationVar]: '0',
        ':hover': {
            cursor: 'not-allowed',
            [elevationVar]: '0',
        },
        ':hover:active': {
            cursor: 'not-allowed',
            [elevationVar]: '0',
        },

    }
})