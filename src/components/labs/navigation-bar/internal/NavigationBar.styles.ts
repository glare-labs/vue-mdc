import { sharedStyles } from '@/utils/shared.styles'
import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { navigationBarTokens, navigationBarTokensExtern } from './NavigationBar.tokens'
import { elevationTokensExtern } from '@/components/elevation/internal/Elevation.tokens'
import { iconTokensExtern } from '@/components/icon'
import { rippleTokensExtern } from '@/components/ripple'

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

export const sharedNavigationBarStyles = StyleSheet.create({
    container: {
        [navigationBarTokens['container-color']]: tokens.color.surface.surfaceContainer,
        [navigationBarTokens['container-shape']]: tokens.shape.corner.none,
        [navigationBarTokens['container-height']]: '80px',
        [navigationBarTokens['container-min-width']]: '48px',
        [elevationTokensExtern.level]: tokens.elevation.level2,

        ...sharedStyles.base,

        position: 'relative',
        display: 'inline-flex',
        'gap': '8px',
        boxSizing: 'border-box',
        margin: 0,
        transitionDuration: tokens.motion.duration.medium1,
        transitionProperty: 'background, border, color, box-shadow',
        transitionTimingFunction: tokens.motion.easing.standard,
        '@media screen and (prefers-reduced-motion: reduce)': {
            transitionDuration: '0.01ms',
        },
        zIndex: 0,
        'user-select': 'none',


        paddingTop: '12px',
        paddingBottom: '16px',
        paddingLeft: '16px',
        paddingRight: '16px',

        height: `var(${navigationBarTokensExtern['container-height']}, var(${navigationBarTokens['container-height']}))`,
        minWidth: `var(${navigationBarTokensExtern['container-min-width']}, var(${navigationBarTokens['container-min-width']}))`,
        backgroundColor: `var(${navigationBarTokensExtern['container-color']}, var(${navigationBarTokens['container-color']}))`,
        borderRadius: `var(${navigationBarTokensExtern['container-shape']}, var(${navigationBarTokens['container-shape']}))`,
    },

    label: {
        ...tokens.typescale.labelMedium,
        [navigationBarTokens.color]: tokens.color.surface.onSurface,
    },

    icon: {
        [iconTokensExtern['font-size']]: '24px',
    },

    tab: {
        ...sharedStyles.base,
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
        '@media screen and (prefers-reduced-motion: reduce)': {
            transitionDuration: '0.01ms',
        },
        zIndex: 1,
        'user-select': 'none',

        width: '64px',

        color: `var(${navigationBarTokensExtern['color']}, var(${navigationBarTokens['color']}))`,
    },
    indicator: {
        [navigationBarTokens['indicator-height']]: '32px',
        [navigationBarTokens['indicator-width']]: '64px',

        height: `var(${navigationBarTokensExtern['indicator-height']}, var(${navigationBarTokens['indicator-height']}))`,
        width: `var(${navigationBarTokensExtern['indicator-width']}, var(${navigationBarTokens['indicator-width']}))`,
        backgroundColor: `var(${navigationBarTokensExtern['indicator-color']}, var(${navigationBarTokens['indicator-color']}))`,
        borderRadius: `var(${navigationBarTokensExtern['indicator-shape']}, var(${navigationBarTokens['indicator-shape']}))`,

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
        [navigationBarTokens['indicator-color']]: tokens.color.secondary.secondaryContainer,
        [navigationBarTokens['indicator-shape']]: tokens.shape.corner.full,

        animationName: [indicatorKeyframes],
        'animation-duration': tokens.motion.duration.long2,
        // 'animation-duration': '5s',
        'animation-timing-function': tokens.motion.easing.legacyDecelerate,
        animationIterationCount: 'inherit',
    },

    stateLayer: {
        [rippleTokensExtern['hover-color']]: tokens.color.surface.onSurface,
    },
})
