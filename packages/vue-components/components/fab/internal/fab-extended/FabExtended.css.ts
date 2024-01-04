// @ts-nocheck

import { elevationTokens } from '../../../elevation/internal/Elevation.tokens'
import { iconTokens } from '../../../icon/internal/Icon.tokens'
import { makeComponentInnerTokens, tokens } from '../../../../utils/tokens'
import { fabExtendedTokens } from './FabExtended.tokens'
import { rippleTokens } from '../../../ripple/internal/Ripple.tokens'
import { style, styleVariants } from '@vanilla-extract/css'

export namespace FabExtendedStyles {

    const innerTokens = makeComponentInnerTokens(fabExtendedTokens)

    export const surface = style({
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
        [innerTokens.height]: '56px',
        [innerTokens.minWidth]: '80px',
        [innerTokens.shape]: tokens.shape.corner.large,
        borderRadius: `var(${fabExtendedTokens.shape}, var(${innerTokens.shape}))`,
        backgroundColor: `var(${fabExtendedTokens.background}, var(${innerTokens.background}))`,
        color: `var(${fabExtendedTokens.color}, var(${innerTokens.color}))`,
        height: `var(${fabExtendedTokens.height}, var(${innerTokens.height}))`,
        minWidth: `var(${fabExtendedTokens.minWidth}, var(${innerTokens.minWidth}))`,
        width: `var(${fabExtendedTokens.width}, var(${innerTokens.width}))`,
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
    })

    export const label = style({
        ...tokens.typescale.labelLarge,
    })

    export const icon = style({
        [iconTokens['font-size']]: '24px',
        [iconTokens.color]: `var(${innerTokens.color})`,
    })

    export const disabled = style({
        backgroundColor: `color-mix(in srgb, ${tokens.color.surface.surface} 12%, white 12%)`,
        color: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, white 38%)`,
        [iconTokens.color]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, white 38%)`,

        [elevationTokens.level]: tokens.elevation.level0,
        ':hover': {
            [elevationTokens.level]: tokens.elevation.level0,
        },
        ':hover:active': {
            [elevationTokens.level]: tokens.elevation.level0,
        },
    })

}
