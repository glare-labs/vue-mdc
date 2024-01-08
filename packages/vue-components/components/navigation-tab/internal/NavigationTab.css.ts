// @ts-nocheck

import { makeComponentInnerTokens, makeVar, tokens } from '../../../utils/tokens'
import { navigationTabTokens } from './NavigationTab.tokens'
import { iconTokens } from '../../icon/internal/Icon.tokens'
import { rippleTokens } from '../../ripple/internal/Ripple.tokens'
import { keyframes, style } from '@vanilla-extract/css'

const indicatorKeyframes = keyframes({
    '0%': {
        background: 'transparent',
        width: '32px',
    },
    '5%': {
        background: 'inherit',
    },
    '25%': {
        width: '32px',

    }
})

export namespace NavigationTabStyles {

    const innerTokens = makeComponentInnerTokens(navigationTabTokens)

    export const container = style({
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        'gap': '4px',
        boxSizing: 'border-box',
        margin: 0,
        transitionDuration: tokens.motion.duration.medium1,
        transitionProperty: 'background, border, color, box-shadow',
        transitionTimingFunction: tokens.motion.easing.standard,
        '@media': {
            'screen and (prefers-reduced-motion: reduce)': {
                transitionDuration: '0.01ms',
            },
        },
        zIndex: 1,
        userSelect: 'none',

        paddingTop: '12px',
        paddingBottom: '16px',

        width: '64px',

        backgroundColor: makeVar(navigationTabTokens['container-color'], innerTokens['container-color']),
        color: makeVar(navigationTabTokens['color'], innerTokens['color']),
    })

    export const indicator = style({
        [innerTokens['container-height']]: '32px',
        [innerTokens['container-width']]: '64px',
        [innerTokens['container-shape']]: tokens.shape.corner.full,

        height: makeVar(navigationTabTokens['container-height'], innerTokens['container-height']),
        width: makeVar(navigationTabTokens['container-width'], innerTokens['container-width']),
        backgroundColor: makeVar(navigationTabTokens['container-color'], innerTokens['container-color']),
        borderRadius: makeVar(navigationTabTokens['container-shape'], innerTokens['container-shape']),

        [iconTokens.color]: tokens.color.secondary.onSecondaryContainer,

        // center icon
        position: 'relative',
        display: 'grid',
        verticalAlign: 'middle',
        alignItems: 'center',
        boxSizing: 'border-box',
        justifyContent: 'center',
        overflow: 'hidden',
    })

    export const activeIndicator = style({
        [navigationTabTokens['container-color']]: tokens.color.secondary.secondaryContainer,
        [navigationTabTokens['container-shape']]: tokens.shape.corner.full,

        animationName: indicatorKeyframes,
        animationDuration: tokens.motion.duration.medium2,
        animationTimingFunction: tokens.motion.easing.emphasizedDecelerate,
        animationIterationCount: 'inherit',
    })

    export const stateLayer = style({
        [rippleTokens['hover-color']]: tokens.color.surface.onSurface,
    })

    export const label = style({
        ...tokens.typescale.labelMedium,
        [innerTokens.color]: tokens.color.surface.onSurface,
    })

    export const icon = style({
        [iconTokens['font-size']]: '24px',
    })

    export const disabled = style({
        filter: 'grayscale(1)',
        [innerTokens['container-color']]: `color-mix(in srgb, ${tokens.color.surface.surface} 12%, transparent 88%)`,
        [innerTokens.color]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%)`,
    })
}
