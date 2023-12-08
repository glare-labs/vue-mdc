import { tokens } from '@/utils/tokens'
import { StyleSheet } from 'aphrodite'
import { typographyTokens, typographyTokensExtern } from './Typography.tokens'

export const typographyStyles = StyleSheet.create({
    root: {
        [typographyTokens['font-size']]: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.labelMedium.fontSize})`,
        [typographyTokens.color]: `var(${typographyTokensExtern.color}, ${tokens.color.surface.onSurface})`,
        
        fontSize: `var(${typographyTokens['font-size']})`,
        color: `var(${typographyTokens.color})`,
    },

    /**
     * variant
     */
    'label-small': {
        ...tokens.typescale.labelSmall,
    },
    'label-medium': {
        ...tokens.typescale.labelMedium,
    },
    'label-large': {
        ...tokens.typescale.labelLarge,
    },
    'body-small': {
        ...tokens.typescale.bodySmall,
    },
    'body-medium': {
        ...tokens.typescale.bodyMedium,
    },
    'body-large': {
        ...tokens.typescale.bodyLarge,
    },
    'title-small': {
        ...tokens.typescale.titleSmall,
    },
    'title-medium': {
        ...tokens.typescale.titleMedium,
    },
    'title-large': {
        ...tokens.typescale.titleLarge,
    },
    'headline-small': {
        ...tokens.typescale.headlineSmall,
    },
    'headline-medium': {
        ...tokens.typescale.headlineMedium,
    },
    'headline-large': {
        ...tokens.typescale.headlineLarge,
    },
    'display-small': {
        ...tokens.typescale.displaySmall,
    },
    'display-medium': {
        ...tokens.typescale.displayMedium,
    },
    'display-large': {
        ...tokens.typescale.displayLarge,
    },
})
