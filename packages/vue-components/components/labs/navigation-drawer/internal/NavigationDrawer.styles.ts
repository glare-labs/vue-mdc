import { elevationTokensExtern } from '@/components/elevation/internal/Elevation.tokens'
import { makeVar, tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { navigationDrawerTokens, navigationDrawerTokensExtern } from '..'

const containerOpenKeyframes = {
    from: {
        transform: 'translateX(calc(-100%))',
    },
    to: {
        transform: 'translateX(0%)',
    },
}

export const sharedNavigationDrawerStyles = StyleSheet.create({

    root: {
        position: 'relative',
        zIndex: 0,
    },

    containerOpen: {
        animationName: [containerOpenKeyframes],
        animationIterationCount: 1,
        'animation-duration': tokens.motion.duration.medium1,
        'animationT-timingF-function': tokens.motion.easing.emphasized,
        transform: 'translateX(0%)',
        transitionDuration: tokens.motion.duration.medium2,
        transitionTimingFunction: tokens.motion.easing.standard,
    },
    containerClose: {
        transform: 'translateX(calc(-100%))',
        transitionDuration: tokens.motion.duration.medium2,
        transitionTimingFunction: tokens.motion.easing.standard,
        animationIterationCount: 1,
        'animation-durition': tokens.motion.duration.medium1,
    },

    container: {
        backgroundColor: makeVar(navigationDrawerTokensExtern['container-color'], navigationDrawerTokens['container-color']),

        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: tokens.shape.corner.large,
        borderBottomRightRadius: tokens.shape.corner.large,

        [navigationDrawerTokens['container-width']]: '360px',
        [navigationDrawerTokens['container-height']]: '100%',

        width: makeVar(navigationDrawerTokensExtern['container-width'], navigationDrawerTokens['container-width']),
        height: makeVar(navigationDrawerTokensExtern['container-height'], navigationDrawerTokens['container-height']),
        paddingLeft: '28px',
        paddingRight: '28px',

        position: 'relative',
        zIndex: 0,
    },

    'container-standard': {
        [navigationDrawerTokens['container-color']]: tokens.color.surface.surface,
        [elevationTokensExtern.level]: tokens.elevation.level0,
    },
    'container-model': {
        [navigationDrawerTokens['container-color']]: tokens.color.surface.surfaceContainerLow,
        [elevationTokensExtern.level]: tokens.elevation.level1,
    },

    'container-scrim': {
        backgroundColor: tokens.color.scrim.scrim,
        opacity: 0.04,
        height: '100%',
        width: '100%',
        zIndex: 0,
        position: 'absolute',
        left: 0,
        top: 0,
    }
})
