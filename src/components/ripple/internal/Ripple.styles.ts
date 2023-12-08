import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { rippleTokens, rippleTokensExtern } from './Ripple.tokens'

export const sharedRippleStyles = StyleSheet.create({
    ripple: {
        position: 'absolute',
        borderRadius: tokens.shape.corner.full,
        background: 'radial-gradient(\
            closest-side,\
            var(--md-sys-color-shadow) max(calc(100% - 70px), 65%),\
            transparent 100%\
        )',
        opacity: 0.25,
        transition: 'all',
        zIndex: 1,
        pointerEvents: 'none',
    },
    root: {
        zIndex: 0,
        position: 'absolute',
        left: '0',
        top: '0',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 'inherit',
        '::before': {
            pointerEvents: 'none',
            content: '""',
            position: 'absolute',
            inset: 0,
            left: '0',
            top: '0',
            height: '100%',
            width: '100%',
            transition: 'all',
            transitionDuration: tokens.motion.duration.medium1,
            transitionTimingFunction: tokens.motion.easing.standardDecelerate,
            backgroundColor: `var(${rippleTokensExtern['hover-color']}, var(${rippleTokens['hover-color']}))`,
            opacity: 0.1,
        },
        ':hover': {
            [rippleTokens['hover-color']]: tokens.color.surface.inverseSurface,
        }
    }
})
