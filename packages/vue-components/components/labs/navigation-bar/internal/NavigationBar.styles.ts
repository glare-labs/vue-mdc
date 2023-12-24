import { sharedStyles } from '@/utils/shared.styles'
import { makeVar, tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { navigationBarTokens, navigationBarTokensExtern } from './NavigationBar.tokens'
import { elevationTokensExtern } from '@/components/elevation/internal/Elevation.tokens'

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

        paddingLeft: '16px',
        paddingRight: '16px',

        height: makeVar(navigationBarTokensExtern['container-height'], navigationBarTokens['container-height']),
        minWidth: makeVar(navigationBarTokensExtern['container-min-width'], navigationBarTokens['container-min-width']),
        backgroundColor: makeVar(navigationBarTokensExtern['container-color'], navigationBarTokens['container-color']),
        borderRadius: makeVar(navigationBarTokensExtern['container-shape'], navigationBarTokens['container-shape']),
    },

})
