// @ts-nocheck

import { keyframes, style, styleVariants } from '@vanilla-extract/css'
import { checkboxTokens } from './Checkbox.tokens'
import { makeComponentInnerTokens, makeComponentTokens, makeVar, tokens } from '../../../utils/tokens'
import { rippleTokens } from '../../ripple/internal/Ripple.tokens'

const innerTokens = makeComponentInnerTokens(checkboxTokens)

const tempTokens = makeComponentTokens('checkbox-temp', [
    'background-opacity',
    'background-scale',
    'mark-transform',
    'mark-short-height',
    'mark-long-width',
    'mark-long-animation',
    'mark-transition-property',
    'mark-t-duration',
    'mark-t-tf',
    'mark-a-duration',
    'mark-a-tf',
])

const prevUnselectedToChecked = keyframes({
    'from': {
        width: 0,
    }
})

export namespace CheckboxStyles {

    export const container = style({
        borderRadius: makeVar(checkboxTokens['container-shape'], innerTokens['container-shape']),
        display: 'inline-flex',
        height: makeVar(checkboxTokens['container-height'], checkboxTokens['container-size'], innerTokens['container-size']),
        width: makeVar(checkboxTokens['container-width'], checkboxTokens['container-size'], innerTokens['container-size']),
        placeContent: 'center',
        placeItems: 'center',
        position: 'relative',
        zIndex: 0,
        margin: 0,
    })
    export const rippleTarget = style({
        [rippleTokens['hovered-color']]: tokens.color.primary.onPrimary,
        position: 'absolute',
        display: 'block',
        height: '32px',
        width: '32px',
        left: '50%',
        top: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        borderRadius: tokens.shape.corner.full,
    })
    export const input = style({
        appearance: 'none',
        height: '32px',
        width: '32px',
        margin: 0,
        opacity: 0,
        outline: 'none',
        position: 'absolute',
        zIndex: 1,
        cursor: 'inherit',
        pointerEvents: 'auto',
    })
    export const outline = style({
        inset: 0,
        position: 'absolute',
        borderRadius: 'inherit',
        borderColor: makeVar(checkboxTokens['container-outline-color'], innerTokens['container-outline-color']),
        borderStyle: 'solid',
        borderWidth: makeVar(checkboxTokens['container-outline-width'], innerTokens['container-outline-width']),
        boxSizing: 'border-box',
        zIndex: -1,
        pointerEvents: 'none',
    })
    export const background = style({
        inset: 0,
        position: 'absolute',
        borderRadius: 'inherit',
        backgroundColor: makeVar(checkboxTokens['container-color'], innerTokens['container-color']),
        opacity: makeVar(tempTokens['background-opacity']),
        transitionDuration: `${tokens.motion.duration.short3}, ${tokens.motion.duration.short1}`,
        transitionProperty: 'transform, opacity',
        transitionTimingFunction: tokens.motion.easing.emphasizedAccelerate,
        transform: makeVar(tempTokens['background-scale']),
        zIndex: -1,
        pointerEvents: 'none',
    })
    export const icon = style({
        inset: 0,
        position: 'absolute',
        opacity: makeVar(tempTokens['background-opacity']),
        transitionDuration: `${tokens.motion.duration.short3}, ${tokens.motion.duration.short1}`,
        transitionProperty: 'transform, opacity',
        transitionTimingFunction: tokens.motion.easing.emphasizedAccelerate,
        transform: makeVar(tempTokens['background-scale']),
        fill: makeVar(checkboxTokens['icon-color'], innerTokens['icon-color']),
        height: makeVar(checkboxTokens['icon-size'], innerTokens['icon-size']),
        width: makeVar(checkboxTokens['icon-size'], innerTokens['icon-size']),
        zIndex: -1,
        pointerEvents: 'none',
    })
    export const mark = style({
        animationDuration: makeVar(tempTokens['mark-a-duration']),
        animationTimingFunction: makeVar(tempTokens['mark-a-tf']),
        transitionDuration: makeVar(tempTokens['mark-t-duration']),
        transitionTimingFunction: makeVar(tempTokens['mark-t-tf']),
        transform: makeVar(tempTokens['mark-transform']),
        transitionProperty: makeVar(tempTokens['mark-transition-property'])
    })
    export const iconMarkShort = style({
        // DON'T FIX
        height: makeVar(tempTokens['mark-short-height']),
        width: '2px',
        transitionProperty: 'transform, height',
    })
    export const iconMarkLong = style({
        // DON'T FIX
        height: '2px',
        width: makeVar(tempTokens['mark-long-width']),
        transitionProperty: 'transform, width',
        animation: makeVar(tempTokens['mark-long-animation']),
    })

    export const state = styleVariants({
        init: [{
            [innerTokens['container-shape']]: '4px',
            [innerTokens['container-size']]: '18px',
            [innerTokens['container-outline-width']]: '2px',
            [innerTokens['container-outline-color']]: tokens.color.surface.onSurfaceVariant,
            [innerTokens['icon-size']]: '18px',
            [innerTokens['icon-color']]: tokens.color.primary.onPrimary,
            [tempTokens['background-opacity']]: 0,
            [tempTokens['background-scale']]: 'scale(0.6)',
            [tempTokens['mark-short-height']]: '2px',
            [tempTokens['mark-long-width']]: '10px',
            [tempTokens['mark-a-duration']]: `${tokens.motion.duration.short3}`,
            [tempTokens['mark-a-tf']]: tokens.motion.easing.emphasizedAccelerate,
            [tempTokens['mark-t-duration']]: `${tokens.motion.duration.short3}`,
            [tempTokens['mark-t-tf']]: tokens.motion.easing.emphasizedAccelerate,
            [tempTokens['mark-transition-property']]: 'all',
            ['--mamv-ripple-hover-color']: tokens.color.surface.onSurface,
        }],
        selected: [{
            [tempTokens['background-opacity']]: 1,
            [tempTokens['background-scale']]: 'scale(1)',
            [innerTokens['container-color']]: tokens.color.primary.primary,
            [innerTokens['container-outline-width']]: '0',
            [tempTokens['mark-a-duration']]: tokens.motion.duration.medium3,
            [tempTokens['mark-a-tf']]: tokens.motion.easing.emphasizedDecelerate,
            [tempTokens['mark-t-duration']]: tokens.motion.duration.medium3,
            [tempTokens['mark-t-tf']]: tokens.motion.easing.emphasizedDecelerate,
            ['--mamv-ripple-hover-color']: tokens.color.primary.primary,
        }],
        checked: [{
            [tempTokens['mark-transform']]: 'scaleY(-1) translate(7px, -14px) rotate(45deg)',
            [tempTokens['mark-short-height']]: '5.65685px',
            [tempTokens['mark-long-width']]: '11.31370px',
        }],
        prevCheckedButNowUnselected: [{
            [tempTokens['mark-transform']]: 'scaleY(-1) translate(7px, -14px) rotate(45deg)',
            [tempTokens['mark-short-height']]: '5.65685px',
            [tempTokens['mark-long-width']]: '11.31370px',
        }],
        indeterminate: [{
            [tempTokens['mark-transform']]: 'scaleY(-1) translate(4px, -10px) rotate(0deg)',
        }],
        prevIndeterminateButNowUnselected: [{
            [tempTokens['mark-transform']]: 'scaleY(-1) translate(4px, -10px) rotate(0deg)',
        }],
        prevUnselected: [{
            [tempTokens['mark-transition-property']]: 'none'
        }],
        prevUnselectedButNowChecked: [{
            [tempTokens['mark-long-animation']]: prevUnselectedToChecked,
        }],
        disabled: [{
            [innerTokens['container-outline-color']]: tokens.color.surface.onSurface,
            [innerTokens['container-color']]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%)`,
        }],
        disabledAndUnselected: [{
            [innerTokens['container-outline-width']]: '2px',
            [innerTokens['icon-color']]: tokens.color.primary.primary,

        }],
        disabledAndSelected: [{
            [innerTokens['container-outline-width']]: '0',
            [innerTokens['icon-color']]: tokens.color.surface.surface,

        }],
    })
}
