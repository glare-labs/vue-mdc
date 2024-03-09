import { makeVar, tokens } from '../../../../utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { navigationDrawerItemTokens, navigationDrawerItemTokensExtern } from './NavigationDrawerItem.tokens'
import { iconTokensExtern } from '../../../../components/icon'
import { rippleTokensExtern } from '../../../../components/ripple'

export const sharedNavigationDrawerItemStyles = StyleSheet.create({

    headline: {
        color: tokens.color.surface.onSurfaceVariant,
        ...tokens.typescale.titleSmall,
    },

    label: {
        [navigationDrawerItemTokens.color]: tokens.color.surface.onSurface,
        color: makeVar(navigationDrawerItemTokensExtern.color, navigationDrawerItemTokens.color),
        ...tokens.typescale.labelLarge,
        ':hover': {
            [navigationDrawerItemTokens.color]: tokens.color.secondary.onSecondaryContainer,
        },
    },

    icon: {
        [navigationDrawerItemTokens['icon-color']]: tokens.color.surface.onSurface,
        [iconTokensExtern.color]: makeVar(navigationDrawerItemTokensExtern['icon-color'], navigationDrawerItemTokens['icon-color']),
        [iconTokensExtern['font-size']]: '24px',
        ':hover': {
            [navigationDrawerItemTokens['icon-color']]: tokens.color.secondary.onSecondaryContainer,
        },
    },

    indicator: {
        backgroundColor: makeVar(navigationDrawerItemTokensExtern['indicator-container-color'], navigationDrawerItemTokens['indicator-container-color']),

        [navigationDrawerItemTokens['container-width']]: '336px',
        [navigationDrawerItemTokens['container-height']]: '56px',

        width: makeVar(navigationDrawerItemTokensExtern['container-width'], navigationDrawerItemTokens['container-width']),
        height: makeVar(navigationDrawerItemTokensExtern['container-height'], navigationDrawerItemTokens['container-height']),

        borderRadius: tokens.shape.corner.full,

        position: 'relative',
        zIndex: 0,

        display: 'inline-flex',
        alignItems: 'center',
        'gap': '12px',

        paddingLeft: '16px',
        paddingRight: '24px',
        marginLeft: '-12px',
        marginRight: '12px',

        [rippleTokensExtern['hover-color']]: tokens.color.surface.onSurface,
        [rippleTokensExtern['press-opacity']]: '0.08',
        ':hover': {
            [rippleTokensExtern['hover-color']]: tokens.color.secondary.onSecondaryContainer,
        },
        ':active': {
            [rippleTokensExtern['press-opacity']]: '0.1',
        }
    },
    activeIndicator: {
        [navigationDrawerItemTokens['indicator-container-color']]: tokens.color.secondary.secondaryContainer,
    },

})
