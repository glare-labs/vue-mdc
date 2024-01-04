// @ts-nocheck

import { makeComponentInnerTokens, makeVar, tokens } from '../../../utils/tokens'
import { buttonTokens } from './Button.tokens'
import { elevationTokens } from '../../elevation/internal/Elevation.tokens'
import { iconTokens } from '../../icon/internal/Icon.tokens'
import { rippleTokens } from '../../ripple/internal/Ripple.tokens'
import { style, styleVariants } from '@vanilla-extract/css'

export namespace ButtonStyles {

    const innerTokens = makeComponentInnerTokens(buttonTokens)

    export const container = style({
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        borderWidth: 0,
        borderStyle: 'solid',
        transitionDuration: tokens.motion.duration.medium1,
        transitionProperty: 'background, border, color, box-shadow',
        transitionTimingFunction: tokens.motion.easing.standard,
        borderRadius: makeVar(innerTokens['container-shape'], innerTokens['container-shape']),
        cursor: 'pointer',
        [innerTokens['container-height']]: '40px',
        [iconTokens['font-size']]: '18px',
        [iconTokens['line-height']]: '18px',
    })

    export const label = style({
        display: 'inline',

        [innerTokens['label-font-size']]: tokens.typescale.labelLarge.fontSize,
        [innerTokens['label-font-weight']]: tokens.typescale.labelLarge.fontWeight,
        [innerTokens['label-letter-spacing']]: tokens.typescale.labelLarge.letterSpacing,
        [innerTokens['label-line-height']]: tokens.typescale.labelLarge.lineHeight,

        'font-weight': makeVar(buttonTokens['label-font-weight'], innerTokens['label-font-weight']),
        'letter-spacing': makeVar(buttonTokens['label-letter-spacing'], innerTokens['label-letter-spacing']),
        'line-height': makeVar(buttonTokens['label-line-height'], innerTokens['label-line-height']),
        'font-size': makeVar(buttonTokens['label-font-size'], innerTokens['label-font-size']),
        'padding-left': makeVar(buttonTokens['label-padding-left'], innerTokens['label-padding-left']),
        'padding-right': makeVar(buttonTokens['label-padding-right'], innerTokens['label-padding-right']),
    })

    export const button = style({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'inherit',
        outline: 'none',
        border: 'none',
        borderRadius: 'inherit',
        cursor: 'default',
        WebkitAppearance: 'none',
        verticalAlign: 'middle',
        textDecoration: 'none',
        background: 'transparent',
        width: '100%',
        height: '100%',
        minHeight: makeVar(buttonTokens['container-height'], innerTokens['container-height']),
        font: 'inherit',
        userSelect: 'none',
        padding: 0,
        margin: 0,
        zIndex: 0,

        paddingLeft: makeVar(innerTokens['container-padding-left'], innerTokens['container-padding-left']),
        paddingRight: makeVar(innerTokens['container-padding-right'], innerTokens['container-padding-right']),

        backgroundColor: makeVar(buttonTokens['container-color'], innerTokens['container-color']),
        color: makeVar(buttonTokens['label-color'], innerTokens['label-color']),
    })

    export const appearance = styleVariants({
        elevated: [{
            [innerTokens['container-color']]: tokens.color.surface.surfaceContainerLow,
            [innerTokens['label-color']]: tokens.color.primary.primary,
            [iconTokens.color]: tokens.color.primary.primary,
            [elevationTokens.level]: tokens.elevation.level2,
            ':hover': {
                [elevationTokens.level]: tokens.elevation.level2,
                [rippleTokens['hovered-color']]: tokens.color.primary.primary,
                [rippleTokens['hovered-opacity']]: '0.08',
            },
            ':active': {
                [elevationTokens.level]: tokens.elevation.level1,
                [rippleTokens['pressed-color']]: tokens.color.primary.primary,
                [rippleTokens['pressed-opacity']]: '0.1',
            },

            [innerTokens['container-padding-left']]: '16px',
            [innerTokens['container-padding-right']]: '16px',
            [innerTokens['label-padding-left']]: '8px',
            [innerTokens['label-padding-right']]: '8px',
        }],

        filled: [{
            [innerTokens['container-color']]: tokens.color.primary.primary,
            [innerTokens['label-color']]: tokens.color.primary.onPrimary,
            [iconTokens.color]: tokens.color.primary.onPrimary,
            [elevationTokens.level]: tokens.elevation.level0,
            ':hover': {
                [elevationTokens.level]: tokens.elevation.level1,
                [rippleTokens['hovered-color']]: tokens.color.primary.primary,
                [rippleTokens['hovered-opacity']]: '0.08',
            },
            ':active': {
                [elevationTokens.level]: tokens.elevation.level0,
                [rippleTokens['pressed-color']]: tokens.color.primary.primary,
                [rippleTokens['pressed-opacity']]: '0.1',
            },

            [innerTokens['container-padding-left']]: '16px',
            [innerTokens['container-padding-right']]: '16px',
            [innerTokens['label-padding-left']]: '8px',
            [innerTokens['label-padding-right']]: '8px',
        }],

        'filled-tonal': {
            [innerTokens['container-color']]: tokens.color.secondary.secondaryContainer,
            [innerTokens['label-color']]: tokens.color.secondary.onSecondaryContainer,
            [iconTokens.color]: tokens.color.secondary.onSecondaryContainer,
            [elevationTokens.level]: tokens.elevation.level0,
            ':hover': {
                [elevationTokens.level]: tokens.elevation.level1,
                [rippleTokens['hovered-color']]: tokens.color.secondary.onSecondaryContainer,
                [rippleTokens['hovered-opacity']]: '0.08',
            },
            ':active': {
                [elevationTokens.level]: tokens.elevation.level0,
                [rippleTokens['pressed-color']]: tokens.color.secondary.onSecondaryContainer,
                [rippleTokens['pressed-opacity']]: '0.1',
            },

            [innerTokens['container-padding-left']]: '16px',
            [innerTokens['container-padding-right']]: '16px',
            [innerTokens['label-padding-left']]: '8px',
            [innerTokens['label-padding-right']]: '8px',
        },

        outlined: {
            outline: `1px solid ${tokens.color.outline.outline}`,
            [innerTokens['container-color']]: 'transparent',
            [innerTokens['label-color']]: tokens.color.primary.primary,
            [iconTokens.color]: tokens.color.primary.primary,
            [elevationTokens.level]: tokens.elevation.level0,
            ':hover': {
                [elevationTokens.level]: tokens.elevation.level0,
                [rippleTokens['hovered-color']]: tokens.color.primary.primary,
                [rippleTokens['hovered-opacity']]: '0.08',
            },
            ':active': {
                [elevationTokens.level]: tokens.elevation.level0,
                [rippleTokens['pressed-color']]: tokens.color.primary.primary,
                [rippleTokens['pressed-opacity']]: '0.1',
            },

            [innerTokens['container-padding-left']]: '16px',
            [innerTokens['container-padding-right']]: '16px',
            [innerTokens['label-padding-left']]: '8px',
            [innerTokens['label-padding-right']]: '8px',
        },

        text: {
            [innerTokens['container-color']]: 'transparent',
            [innerTokens['label-color']]: tokens.color.primary.primary,
            [iconTokens.color]: tokens.color.primary.primary,
            [elevationTokens.level]: tokens.elevation.level0,
            ':hover': {
                [elevationTokens.level]: tokens.elevation.level0,
                [rippleTokens['hovered-color']]: tokens.color.primary.primary,
                [rippleTokens['hovered-opacity']]: '0.08',
            },
            ':active': {
                [elevationTokens.level]: tokens.elevation.level0,
                [rippleTokens['pressed-color']]: tokens.color.primary.primary,
                [rippleTokens['pressed-opacity']]: '0.1',
            },

            [innerTokens['container-padding-left']]: '12px',
            [innerTokens['container-padding-right']]: '12px',
            [innerTokens['label-padding-left']]: '8px',
            [innerTokens['label-padding-right']]: '8px',
        },
    })

    export const shape = styleVariants({
        circular: {
            [innerTokens['container-shape']]: tokens.shape.corner.full,
        },
        rounded: {
            [innerTokens['container-shape']]: tokens.shape.corner.medium,
        },
        square: {
            [innerTokens['container-shape']]: tokens.shape.corner.none,
        },
    })

    export const disabled = style({
        cursor: 'default',
        backgroundColor: `color-mix(in srgb, ${tokens.color.surface.surface} 12%, transparent 88%)`,
        color: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%)`,
        [iconTokens.color]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%)`,
        [elevationTokens.level]: tokens.elevation.level0,
        ':hover': {
            [elevationTokens.level]: tokens.elevation.level0,
        },
        ':active': {
            [elevationTokens.level]: tokens.elevation.level0,
        },
    })
}
