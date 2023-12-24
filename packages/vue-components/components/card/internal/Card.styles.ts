import { makeVar, tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { cardTokens, cardTokensExtern } from './Card.tokens'
import { elevationTokensExtern } from '@/components/elevation/internal/Elevation.tokens'
import { sharedStyles } from '@/utils/shared.styles'

export const sharedCardStyles = StyleSheet.create({

    container: {
        [cardTokens['padding-left']]: '16px',
        [cardTokens['padding-right']]: '16px',
        paddingLeft: makeVar(cardTokensExtern['padding-left'], cardTokens['padding-left']),
        paddingRight: makeVar(cardTokensExtern['padding-right'], cardTokens['padding-right']),

        backgroundColor: makeVar(cardTokensExtern['container-color'], cardTokens['container-color']),
        borderRadius: makeVar(cardTokensExtern['container-shape'], cardTokens['container-shape']),

        position: 'relative',
        minWidth: '160px',
        margin: 0,

        ...sharedStyles.base,
    },

    /**
     * shape
     */
    rounded: {
        [cardTokens['container-shape']]: tokens.shape.corner.medium,
    },

    /**
     * appearance
     */
    elevated: {
        [cardTokens['container-color']]: tokens.color.surface.surfaceContainerLow,

        [elevationTokensExtern.level]: tokens.elevation.level1,
        ':hover': {
            [elevationTokensExtern.level]: tokens.elevation.level2,
        },
        ':active': {
            [elevationTokensExtern.level]: tokens.elevation.level1,
        },
        ':focus': {
            [elevationTokensExtern.level]: tokens.elevation.level1,
        }
    },

    disabled: {
        [elevationTokensExtern.level]: tokens.elevation.level1,
        [cardTokens['container-color']]: `color-mix(in srgb, ${tokens.color.surface.surface} 38%, transparent 62%)`,
    }
})
