// @ts-nocheck

import { makeComponentInnerTokens, tokens } from '../../../../utils/tokens'
import { fabTokens } from './Fab.tokens'
import { elevationTokens } from '../../../elevation/internal/Elevation.tokens'
import { iconTokens } from '../../../icon/internal/Icon.tokens'
import { rippleTokens } from '../../../ripple/internal/Ripple.tokens'
import { style, styleVariants } from '@vanilla-extract/css'

export namespace FabStyles {

    const innerTokens = makeComponentInnerTokens(fabTokens)

    export const surface = style({
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
        '@media': {
            'screen and (prefers-reduced-motion: reduce)': {
                transitionDuration: '0.01ms',
            },
        },
        zIndex: 0,
        userSelect: 'none',
        borderRadius: `var(${fabTokens.shape}, var(${innerTokens.shape}))`,
        backgroundColor: `var(${fabTokens.background}, var(${innerTokens.background}))`,
        color: `var(${fabTokens.color}, var(${innerTokens.color}))`,
        height: `var(${fabTokens.height}, var(${innerTokens.height}))`,
        width: `var(${fabTokens.width}, var(${innerTokens.width}))`,
    })

    export const variant = styleVariants({
        primary: {
            [innerTokens.background]: tokens.color.primary.primaryContainer,
            [innerTokens.color]: tokens.color.primary.onPrimaryContainer,
            [iconTokens.color]: tokens.color.primary.onPrimaryContainer,
            ':hover': {
                [rippleTokens['hovered-color']]: tokens.color.primary.onPrimaryContainer,
                [rippleTokens['hovered-opacity']]: '0.08',
            },
            ':active': {
                [rippleTokens['pressed-color']]: tokens.color.primary.onPrimaryContainer,
                [rippleTokens['pressed-opacity']]: '0.1',
            }
        },
        secondary: {
            [innerTokens.background]: tokens.color.secondary.secondaryContainer,
            [innerTokens.color]: tokens.color.secondary.onSecondaryContainer,
            [iconTokens.color]: tokens.color.secondary.onSecondaryContainer,
            ':hover': {
                [rippleTokens['hovered-color']]: tokens.color.secondary.onSecondaryContainer,
                [rippleTokens['hovered-opacity']]: '0.08',
            },
            ':active': {
                [rippleTokens['pressed-color']]: tokens.color.secondary.onSecondaryContainer,
                [rippleTokens['pressed-opacity']]: '0.1',
            }
        },
        tertiary: {
            [innerTokens.background]: tokens.color.tertiary.tertiaryContainer,
            [innerTokens.color]: tokens.color.tertiary.onTertiaryContainer,
            [iconTokens.color]: tokens.color.tertiary.onTertiaryContainer,
            ':hover': {
                [rippleTokens['hovered-color']]: tokens.color.tertiary.onTertiaryContainer,
                [rippleTokens['hovered-opacity']]: '0.08',
            },
            ':active': {
                [rippleTokens['pressed-color']]: tokens.color.tertiary.onTertiaryContainer,
                [rippleTokens['pressed-opacity']]: '0.1',
            }
        },
        surface: {
            [innerTokens.background]: tokens.color.surface.surfaceContainer,
            [innerTokens.color]: tokens.color.surface.onSurface,
            [iconTokens.color]: tokens.color.surface.onSurface,
            ':hover': {
                [rippleTokens['hovered-color']]: tokens.color.surface.onSurface,
                [rippleTokens['hovered-opacity']]: '0.08',
            },
            ':active': {
                [rippleTokens['pressed-color']]: tokens.color.surface.onSurface,
                [rippleTokens['pressed-opacity']]: '0.1',
            }
        }
    })

    export const size = styleVariants({

        small: {
            [innerTokens.height]: '48px',
            [innerTokens.width]: '48px',
        },
        medium: {
            [innerTokens.height]: '56px',
            [innerTokens.width]: '56px',
        },
        large: {
            [innerTokens.height]: '96px',
            [innerTokens.width]: '96px',
        }
    })

    export const shape = styleVariants({
        smallShape: {
            [innerTokens.shape]: tokens.shape.corner.large,
        },
        mediumShape: {
            [innerTokens.shape]: tokens.shape.corner.large,
        },
        largeShape: {
            [innerTokens.shape]: tokens.shape.corner.extraLarge,
        }
    })

    export const elevationLevel = styleVariants({
        containerElevation: {
            [elevationTokens.level]: tokens.elevation.level3,
            ':hover': {
                cursor: 'pointer',
                [elevationTokens.level]: tokens.elevation.level4,
            },
            ':active': {
                [elevationTokens.level]: tokens.elevation.level3,
            },
        },
        containerElevationLow: {
            [elevationTokens.level]: tokens.elevation.level1,
            ':hover': {
                cursor: 'pointer',
                [elevationTokens.level]: tokens.elevation.level2,
            },
            ':active': {
                [elevationTokens.level]: tokens.elevation.level1,
            },
        },
        containerElevationHigh: {
            [elevationTokens.level]: tokens.elevation.level4,
            ':hover': {
                cursor: 'pointer',
                [elevationTokens.level]: tokens.elevation.level5,
            },
            ':active': {
                [elevationTokens.level]: tokens.elevation.level4,
            },
        },
    })

    export const iconSize = styleVariants({
        smallIconSize: {
            [iconTokens['font-size']]: '24px',
        },
        mediumIconSize: {
            [iconTokens['font-size']]: '24px',
        },
        largeIconSize: {
            [iconTokens['font-size']]: '48px',
        },
    })

    export const disabled = style({
        filter: 'grayscale(1)',
        backgroundColor: `color-mix(in srgb, ${tokens.color.surface.surface} 75%, gray 25%)`,
        color: `color-mix(in srgb, ${tokens.color.surface.onSurface} 5%, gray 95%)`,
        [iconTokens.color]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 5%, gray 95%)`,
        borderColor: 'transparent',
        boxShadow: 'none',
        [elevationTokens.level]: tokens.elevation.level0,
        ':hover': {
            [elevationTokens.level]: tokens.elevation.level0,
        },
        ':active': {
            [elevationTokens.level]: tokens.elevation.level0,
        },
    })
}
