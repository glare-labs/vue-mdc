// @ts-nocheck

import { makeComponentInnerTokens, makeVar, tokens } from '../../../utils/tokens'
import { navigationBarTokens, navigationBarTokensExtern } from './NavigationBar.tokens'
import { elevationTokens } from '../../elevation/internal/Elevation.tokens'
import { style } from '@vanilla-extract/css'

export namespace NavigationBarStyles {

    const innerTokens = makeComponentInnerTokens(navigationBarTokens)

    export const container = style({
        [navigationBarTokens['container-color']]: tokens.color.surface.surfaceContainer,
        [navigationBarTokens['container-shape']]: tokens.shape.corner.none,
        [navigationBarTokens['container-height']]: '80px',
        [navigationBarTokens['container-min-width']]: '48px',
        [elevationTokens.level]: tokens.elevation.level2,

        position: 'relative',
        display: 'inline-flex',
        gap: '8px',
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
        zIndex: 0,
        userSelect: 'none',

        paddingLeft: '16px',
        paddingRight: '16px',

        height: makeVar(navigationBarTokens['container-height'], innerTokens['container-height']),
        minWidth: makeVar(navigationBarTokens['container-min-width'], innerTokens['container-min-width']),
        backgroundColor: makeVar(navigationBarTokens['container-color'], innerTokens['container-color']),
        borderRadius: makeVar(navigationBarTokens['container-shape'], innerTokens['container-shape']),
    })

}
