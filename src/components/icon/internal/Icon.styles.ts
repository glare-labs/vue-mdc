import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'

const innerFontSizeVar = '--inner-icon-font-size'
const fontSizeVar = '--icon-font-size'

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
        [innerFontSizeVar]: '24px',
    },
    medium: {
        ...tokens.typescale.bodyMedium,
        [innerFontSizeVar]: '24px',
    },
    large: {
        ...tokens.typescale.bodyLarge,
        [innerFontSizeVar]: '48px',
    },

    outlined: {
        fontFamily: 'Material Symbols Outlined',
        fontSize: `var(${fontSizeVar}, ${innerFontSizeVar})`
    },
    rounded: {
        fontFamily: 'Material Symbols Rounded',
        fontSize: `var(${fontSizeVar}, ${innerFontSizeVar})`
    },
    sharp: {
        fontFamily: 'Material Symbols Sharp',
        fontSize: `var(${fontSizeVar}, ${innerFontSizeVar})`
    },
})
