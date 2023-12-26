import { tokens } from '../../../utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'
import { typographyTokens, typographyTokensExtern } from './Typography.tokens'

export const typographyStyles = StyleSheet.create({
    root: {
        [typographyTokens.color]: tokens.color.surface.onSurface,
        color: `var(${typographyTokensExtern.color}, var(${typographyTokens.color}))`,
    },

    /**
     * variant
     */
    'label-small': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.labelSmall.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.labelSmall.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.labelSmall.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.labelSmall.letterSpacing})`,
    },
    'label-medium': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.labelMedium.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.labelMedium.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.labelMedium.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.labelMedium.letterSpacing})`,
    },
    'label-large': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.labelLarge.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.labelLarge.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.labelLarge.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.labelLarge.letterSpacing})`,
    },
    'body-small': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.bodySmall.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.bodySmall.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.bodySmall.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.bodySmall.letterSpacing})`,
    },
    'body-medium': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.bodyMedium.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.bodyMedium.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.bodyMedium.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.bodyMedium.letterSpacing})`,
    },
    'body-large': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.bodyLarge.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.bodyLarge.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.bodyLarge.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.bodyLarge.letterSpacing})`,
    },
    'title-small': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.titleSmall.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.titleSmall.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.titleSmall.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.titleSmall.letterSpacing})`,
    },
    'title-medium': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.titleMedium.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.titleMedium.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.titleMedium.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.titleMedium.letterSpacing})`,
    },
    'title-large': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.titleLarge.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.titleLarge.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.titleLarge.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.titleLarge.letterSpacing})`,
    },
    'headline-small': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.headlineSmall.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.headlineSmall.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.headlineSmall.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.headlineSmall.letterSpacing})`,
    },
    'headline-medium': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.headlineMedium.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.headlineMedium.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.headlineMedium.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.headlineMedium.letterSpacing})`,
    },
    'headline-large': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.headlineLarge.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.headlineLarge.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.headlineLarge.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.headlineLarge.letterSpacing})`,
    },
    'display-small': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.displaySmall.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.displaySmall.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.displaySmall.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.displaySmall.letterSpacing})`,
    },
    'display-medium': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.displayMedium.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.displayMedium.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.displayMedium.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.displayMedium.letterSpacing})`,
    },
    'display-large': {
        fontSize: `var(${typographyTokensExtern['font-size']}, ${tokens.typescale.displayLarge.fontSize})`,
        lineHeight: `var(${typographyTokensExtern['line-height']}, ${tokens.typescale.displayLarge.lineHeight})`,
        fontWeight: `var(${typographyTokensExtern['font-weight']}, ${tokens.typescale.displayLarge.fontWeight})` as any,
        'letter-spacing': `var(${typographyTokensExtern['letter-spacing']}, ${tokens.typescale.displayLarge.letterSpacing})`,
    },
})
