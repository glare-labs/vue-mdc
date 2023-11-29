import { StyleSheet } from 'aphrodite'
import { tokens } from '@/utils/tokens'

const elevationVar = '--elevation-level'

const iconSpacingVar = '--button-icon-spacing'

// for filled, outlined, text
const backgroundColorVar = '--button-background-color'
const onBackgroundColorVar = '--button-on-background-color'
// for filled-tonal, elevated
const backgroundContainerColorVar = '--button-background-continer-color'
const onBackgroundContainerColorVar = '--button-on-background-container-color'

export const buttonStyles = StyleSheet.create({

    root: {
        position: 'relative',
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'inline-flex',
        justifyContent: 'center',
        textDecorationLine: 'none',
        verticalAlign: 'middle',
        margin: 0,
        fontFamily: tokens.fontFamilyBase,
        outlineStyle: 'none',
        ':hover': {
            cursor: 'pointer',
        },
        transitionDuration: tokens.durationFaster,
        transitionProperty: 'background, border, color, box-shadow',
        transitionTimingFunction: tokens.curveEasyEase,
        '@media screen and (prefers-reduced-motion: reduce)': {
            transitionDuration: '0.01ms',
        },
        zIndex: 1,
    },
    iconRoot: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-flex',
        [iconSpacingVar]: tokens.spacingHorizontalSNudge,
    },

    /**
     * elevation shadow
     */
    activeElevationForever: {
        [elevationVar]: '3',
        ':active': {
            [elevationVar]: '0'
        }
    },
    activeElevationOnHover: {
        ':hover': {
            [elevationVar]: '3',
        },
        ':active': {
            [elevationVar]: '0'
        }
    },
    activeElevationNever: {
        [elevationVar]: '0',
    },

    /**
     * variant
     */
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
     * appearance
     */
    filled: {
        backgroundColor: `var(${backgroundColorVar})`,
        color: `var(${onBackgroundColorVar})`,
        ':hover': {
        },
        ':active': {
            boxShadow: 'none',
        },
    },
    'filled-tonal': {
        backgroundColor: `var(${backgroundContainerColorVar})`,
        color: `var(${onBackgroundContainerColorVar})`,
    },
    outlined: {
        backgroundColor: 'transparent',
        color: tokens.onSurface,
        border: `1px solid ${tokens.outline}`,
        ':hover': {
            backgroundColor: `color-mix(in srgb, var(${backgroundColorVar}) 5%, black 5%)`,
        }
    },
    elevated: {
        backgroundColor: `color-mix(in srgb, var(${backgroundContainerColorVar}) 50%, ${tokens.surfaceContainer})`,
        color: `color-mix(in srgb, var(${onBackgroundContainerColorVar}) 50%, ${tokens.onSurface})`,
    },
    text: {
        backgroundColor: 'transparent',
        color: `var(${onBackgroundColorVar.replace('on-', '')})`,
        ':hover': {
            backgroundColor: `color-mix(in srgb, var(${backgroundColorVar}) 5%, black 5%)`,
        }
    },

    /**
     * shape
     */
    circular: {
        borderRadius: tokens.borderRadiusCircular
    },
    rounded: {
        borderRadius: tokens.borderRadiusMedium
    },
    square: {
        borderRadius: tokens.borderRadiusNone
    },

    /**
     * size
     */
    small: {
        paddingLeft: tokens.spacingHorizontalM,
        paddingRight: tokens.spacingHorizontalM,
        minWidth: '64px',
        fontSize: tokens.fontSizeBase200,
        fontWeight: tokens.fontWeightRegular as 400,
        lineHeight: tokens.lineHeightBase200,
    },
    medium: {
        paddingLeft: tokens.spacingHorizontalL,
        paddingRight: tokens.spacingHorizontalL,
        minWidth: '96px',
        fontSize: tokens.fontSizeBase300,
        fontWeight: tokens.fontWeightMedium as 500,
        lineHeight: tokens.lineHeightBase300,
    },
    large: {
        paddingLeft: tokens.spacingHorizontalXL,
        paddingRight: tokens.spacingHorizontalXL,
        minWidth: '96px',
        fontSize: tokens.fontSizeBase400,
        fontWeight: tokens.fontWeightSemibold as 600,
        lineHeight: tokens.lineHeightBase400,
    },
    smallWithIcon: {
        paddingBottom: tokens.spacingVerticalS,
        paddingTop: tokens.spacingVerticalSNudge,
    },
    mediumWithIcon: {
        paddingBottom: tokens.spacingVerticalM,
        paddingTop: tokens.spacingVerticalMNudge,
    },
    largeWithIcon: {
        paddingBottom: tokens.spacingVerticalL,
        paddingTop: tokens.spacingVerticalL,
    },
    smallIcon: {
        height: '20px',
        width: '20px',
        [iconSpacingVar]: tokens.spacingHorizontalXXS,
    },
    mediumIcon: {
        height: '20px',
        width: '20px',
        [iconSpacingVar]: tokens.spacingHorizontalXS,
    },
    largeIcon: {
        height: '24px',
        width: '24px',
        [iconSpacingVar]: tokens.spacingHorizontalSNudge,
    },

    left: {
        marginRight: `var(${iconSpacingVar})`,
    },
    right: {
        marginLeft: `var(${iconSpacingVar})`,
    },

    /**
     * icon only
     */
    smallIconOnly: {
        minWidth: '24px',
    },
    mediumIconOnly: {
        minWidth: '32px',
    },
    largeIconOnly: {
        minWidth: '40px',
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
