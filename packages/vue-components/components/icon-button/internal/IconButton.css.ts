// @ts-nocheck

import { style, styleVariants } from '@vanilla-extract/css'
import { elevationTokens } from '../../elevation/internal/Elevation.tokens'
import { iconTokens } from '../../icon/internal/Icon.tokens'
import { makeComponentInnerTokens, tokens } from '../../../utils/tokens'
import { iconButtonTokens } from './IconButton.tokens'

export namespace IconButtonStyle {

    const innerTokens = makeComponentInnerTokens(iconButtonTokens)

    export const surface = style({
        shape: `var(${iconButtonTokens.shape}, var(${innerTokens.shape}))`,
        height: `var(${iconButtonTokens.height}, var(${innerTokens.height}))`,
        width: `var(${iconButtonTokens.width}, var(${innerTokens.width}))`,
        borderRadius: `var(${innerTokens.shape})`,

        ...tokens.typescale.labelLarge,

        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        justifyContent: 'center',
        textDecorationLine: 'none',
        verticalAlign: 'middle',
        margin: '8px',
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

        [innerTokens.height]: '40px',
        [innerTokens.width]: '40px',
        [iconTokens['font-size']]: '24px',
    })

    export const shape = styleVariants({
        circular: {
            [innerTokens.shape]: tokens.shape.corner.full,
        },
        rounded: {
            [innerTokens.shape]: tokens.shape.corner.medium,
        },
        square: {
            [innerTokens.shape]: tokens.shape.corner.none,
        }
    })

    export const disabled = style({
        [innerTokens['container-color']]: `color-mix(in srgb, ${tokens.color.surface.surface} 12%, transparent 88%)`,
        [innerTokens.color]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%)`,

        [elevationTokens.level]: tokens.elevation.level0,
        ':hover': {
            [elevationTokens.level]: tokens.elevation.level0,
        },
        ':hover:active': {
            [elevationTokens.level]: tokens.elevation.level0,
        },
    })

    export const appearance = styleVariants({
        filled: {
            [innerTokens.color]: tokens.color.primary.onPrimary,
            [innerTokens['toggle-unselect-color']]: tokens.color.primary.primary,
            [innerTokens['toggle-selected-color']]: tokens.color.primary.onPrimary,
            [innerTokens['container-color']]: tokens.color.primary.primary,
            [innerTokens['unselect-container-color']]: tokens.color.surface.surfaceContainerHighest,
            [innerTokens['selected-container-color']]: tokens.color.primary.primary,
        },
        'filled-tonal': {
            [innerTokens.color]: tokens.color.secondary.onSecondaryContainer,
            [innerTokens['toggle-unselect-color']]: tokens.color.surface.onSurfaceVariant,
            [innerTokens['toggle-selected-color']]: tokens.color.secondary.onSecondaryContainer,
            [innerTokens['container-color']]: tokens.color.secondary.secondaryContainer,
            [innerTokens['unselect-container-color']]: tokens.color.surface.surfaceContainerHighest,
            [innerTokens['selected-container-color']]: tokens.color.secondary.secondaryContainer,
        },
        outlined: {
            [innerTokens['toggle-unselect-color']]: tokens.color.surface.onSurfaceVariant,
            [innerTokens['toggle-selected-color']]: tokens.color.surface.inverseOnSurface,
            [innerTokens['container-color']]: 'transparent',
            [innerTokens['unselect-container-color']]: 'transparent',
            [innerTokens['selected-container-color']]: tokens.color.surface.inverseSurface,
            outline: `1px solid ${tokens.color.outline.outline}`,
        },
        standard: {
            // [innerTokens.color]: tokens.color.secondary.onSecondaryContainer,
            [innerTokens['toggle-unselect-color']]: tokens.color.surface.onSurfaceVariant,
            [innerTokens['toggle-selected-color']]: tokens.color.primary.primary,
            [innerTokens['container-color']]: 'transparent',
            [innerTokens['unselect-container-color']]: 'transparent',
            [innerTokens['selected-container-color']]: 'transparent',
        },
    })

    /**
     * toggle and no-toggle
     */
    export const toggle = styleVariants({
        'toggle-unselect': {
            backgroundColor: `var(${iconButtonTokens['unselect-container-color']}, var(${innerTokens['unselect-container-color']}))`,
            color: `var(${iconButtonTokens['toggle-unselect-color']}, var(${innerTokens['toggle-unselect-color']}))`,
            [iconTokens.color]: `var(${iconButtonTokens['toggle-unselect-color']}, var(${innerTokens['toggle-unselect-color']}))`,
        },
        'toggle-selected': {
            backgroundColor: `var(${iconButtonTokens['selected-container-color']}, var(${innerTokens['selected-container-color']}))`,
            color: `var(${iconButtonTokens['toggle-selected-color']}, var(${innerTokens['toggle-selected-color']}))`,
            [iconTokens.color]: `var(${iconButtonTokens['toggle-selected-color']}, var(${innerTokens['toggle-selected-color']}))`,
        },
        'no-toggle': {
            backgroundColor: `var(${iconButtonTokens['container-color']}, var(${innerTokens['container-color']}))`,
            color: `var(${iconButtonTokens['color']}, var(${innerTokens['color']}))`,
            [iconTokens.color]: `var(${iconButtonTokens['color']}, var(${innerTokens['color']}))`,
        }
    })

}
