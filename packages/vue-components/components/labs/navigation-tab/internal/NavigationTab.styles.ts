import { sharedStyles } from '../../../../utils/shared.styles'
import { makeVar, tokens } from '../../../../utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { navigationTabTokens, navigationTabTokensExtern } from './NavigationTab.tokens'
import { iconTokensExtern } from '../../../../components/icon'
import { rippleTokensExtern } from '../../../../components/ripple'

const indicatorKeyframes = {
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
}

export const sharedNavigationTabStyles = StyleSheet.create({

    container: {
        ...sharedStyles.base,
        ...sharedStyles.button,
        ...sharedStyles.buttonInputOptgroupSelectTextarea,

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
        '../../../..media screen and (prefers-reduced-motion: reduce)': {
            transitionDuration: '0.01ms',
        },
        zIndex: 1,
        'user-select': 'none',

        paddingTop: '12px',
        paddingBottom: '16px',

        width: '64px',

        backgroundColor: makeVar(navigationTabTokensExtern['container-color'], navigationTabTokens['container-color']),
        color: makeVar(navigationTabTokensExtern['color'], navigationTabTokens['color']),
    },
    indicator: {
        [navigationTabTokens['container-height']]: '32px',
        [navigationTabTokens['container-width']]: '64px',
        [navigationTabTokens['container-shape']]: tokens.shape.corner.full,


        height: makeVar(navigationTabTokensExtern['container-height'], navigationTabTokens['container-height']),
        width: makeVar(navigationTabTokensExtern['container-width'], navigationTabTokens['container-width']),
        backgroundColor: makeVar(navigationTabTokensExtern['container-color'], navigationTabTokens['container-color']),
        borderRadius: makeVar(navigationTabTokensExtern['container-shape'], navigationTabTokens['container-shape']),

        [iconTokensExtern.color]: tokens.color.secondary.onSecondaryContainer,

        // center icon
        position: 'relative',
        display: 'grid',
        verticalAlign: 'middle',
        alignItems: 'center',
        boxSizing: 'border-box',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    activeIndicator: {
        [navigationTabTokens['container-color']]: tokens.color.secondary.secondaryContainer,
        [navigationTabTokens['container-shape']]: tokens.shape.corner.full,

        animationName: [indicatorKeyframes],
        'animation-duration': tokens.motion.duration.long2,
        'animation-timing-function': tokens.motion.easing.legacyDecelerate,
        animationIterationCount: 'inherit',
    },

    stateLayer: {
        [rippleTokensExtern['hover-color']]: tokens.color.surface.onSurface,
    },

    label: {
        ...tokens.typescale.labelMedium,
        [navigationTabTokens.color]: tokens.color.surface.onSurface,
    },

    icon: {
        [iconTokensExtern['font-size']]: '24px',
    },

    disabled: {
        ...sharedStyles.disabled,
        filter: 'grayscale(1)',
        [navigationTabTokens['container-color']]: `color-mix(in srgb, ${tokens.color.surface.surface} 12%, transparent 88%)`,
        [navigationTabTokens.color]: `color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%)`,
    }
})
