import { makeVar, tokens } from '../../../utils/tokens'
import { rippleTokens, rippleTokensExtern } from './Ripple.tokens'
import { StyleSheet } from 'aphrodite/no-important'

export const sharedRippleStyles = StyleSheet.create({
    surface: {
        display: 'flex',
        margin: 0,
        zIndex: 1,
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        borderRadius: 'inherit',
        position: 'absolute',
        overflow: 'hidden',
        '-webkit-tap-highlight-color': 'transparent',
        '::before': {
            content: '""',
            opacity: 0,
            position: 'absolute',
            height: '100%',
            width: '100%',
            [rippleTokens['hover-opacity']]: '0.08',
            [rippleTokens['hover-color']]: tokens.color.surface.inverseSurface,
            transition: 'opacity 15ms linear, background-color 15ms linear',
        },
        '::after': {
            content: '""',
            opacity: 0,
            position: 'absolute',
            [rippleTokens['press-color']]: tokens.color.surface.onSurface,
            [rippleTokens['press-opacity']]: '0.12',
            background: `radial-gradient(closest-side, ${makeVar(rippleTokensExtern['press-color'], rippleTokens['press-color'])} max(calc(100% - 70px), 65%), transparent 100%)`,
            'transform-origin': 'center center',
            transition: 'opacity 375ms linear',
        }
    },

    hovered: {
        '::before': {
            backgroundColor: makeVar(rippleTokensExtern['hover-color'], rippleTokens['hover-color']),
            // @ts-ignore
            opacity: makeVar(rippleTokensExtern['hover-opacity'], rippleTokens['hover-opacity']),
        }
    },
    pressed: {
        '::after': {
            // @ts-ignore
            opacity: makeVar(rippleTokensExtern['press-opacity'], rippleTokens['press-opacity']),
            'transition-duration': '105ms',
        }
    },

    disabled: {
        display: 'none',
        pointerEvents: 'none',
    },
})
