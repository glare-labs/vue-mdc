import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'

export const iconStyles = StyleSheet.create({
    root: {
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: 'normal',
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
        fontSize: tokens.fontSizeBase400,
    },
    medium: {
        fontSize: tokens.fontSizeBase500,
    },
    large: {
        fontSize: tokens.fontSizeBase600,
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
