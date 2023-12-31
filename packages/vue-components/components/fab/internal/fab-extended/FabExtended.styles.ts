import { elevationTokensExtern } from '../../../../components/elevation/internal/Elevation.tokens'
import { iconTokensExtern } from '../../../../components/icon/internal/Icon.tokens'
import { tokens } from '../../../../utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { fabExtendedTokens, fabExtendedTokensExtern } from './FabExtended.tokens'
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
        'gap': '8px',
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
        paddingLeft: '16px',
        paddingRight: '16px',
        [fabExtendedTokens.height]: '56px',
        [fabExtendedTokens.minWidth]: '80px',
        [fabExtendedTokens.shape]: tokens.shape.corner.large,
        borderRadius: `var(${fabExtendedTokensExtern.shape}, var(${fabExtendedTokens.shape}))`,
        backgroundColor: `var(${fabExtendedTokensExtern.background}, var(${fabExtendedTokens.background}))`,
        color: `var(${fabExtendedTokensExtern.color}, var(${fabExtendedTokens.color}))`,
        height: `var(${fabExtendedTokensExtern.height}, var(${fabExtendedTokens.height}))`,
        minWidth: `var(${fabExtendedTokensExtern.minWidth}, var(${fabExtendedTokens.minWidth}))`,
        width: `var(${fabExtendedTokensExtern.width}, var(${fabExtendedTokens.width}))`,
    },

    /**
     * variant
     */
    primary: {
        [fabExtendedTokens.background]: tokens.color.primary.primaryContainer,
        [fabExtendedTokens.color]: tokens.color.primary.onPrimaryContainer,
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
        [fabExtendedTokens.background]: tokens.color.secondary.secondaryContainer,
        [fabExtendedTokens.color]: tokens.color.secondary.onSecondaryContainer,
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
        [fabExtendedTokens.background]: tokens.color.tertiary.tertiaryContainer,
        [fabExtendedTokens.color]: tokens.color.tertiary.onTertiaryContainer,
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
        [fabExtendedTokens.background]: tokens.color.surface.surfaceContainer,
        [fabExtendedTokens.color]: tokens.color.surface.onSurface,
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

    /**
     * fab's label
     */
    containerLabel: {
        ...tokens.typescale.labelLarge,
    },

    /**
     * icon
     */
    containerIcon: {
        [iconTokensExtern['font-size']]: '24px',
        [iconTokensExtern.color]: `var(${fabExtendedTokens.color})`,
    },

    /**
     * disabled
     */
    disabledRoot: {
        ...sharedStyles.disabled,

        backgroundColor: `color-mix(in srgb, ${tokens.color.surface.surface} 12%, white 12%)`,
        color: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, white 38%)`,
        [iconTokensExtern.color]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, white 38%)`,

        [elevationTokensExtern.level]: '0',
        ':hover': {
            [elevationTokensExtern.level]: '0',
        },
        ':hover:active': {
            [elevationTokensExtern.level]: '0',
        },
    }
})
