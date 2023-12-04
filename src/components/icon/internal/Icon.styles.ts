import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'

export const iconStyles = StyleSheet.create({
    root: {
        textTransform: 'none',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        direction: 'ltr',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        textRendering: 'optimizeLegibility',
        'font-feature-settings': 'liga',
    },
    
    small: {
        ...tokens.typescale.bodySmall,
    },
    medium: {
        ...tokens.typescale.bodyMedium,
    },
    large: {
        ...tokens.typescale.bodyLarge,
    },

    outlined: {
        fontFamily: 'Material Symbols Outlined',
    },
    rounded: {
        fontFamily: 'Material Symbols Rounded',
    },
    sharp: {
        fontFamily: 'Material Symbols Sharp',
    },
})
