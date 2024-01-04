// @ts-nocheck

import { style, styleVariants } from '@vanilla-extract/css'
import { makeComponentInnerTokens, makeVar, makeVarWithDefault, tokens } from '../../../utils/tokens'
import { typographyTokens } from './Typography.tokens'

export namespace TypographyStyles {

    const innerTokens = makeComponentInnerTokens(typographyTokens)

    export const surface = style({
        [innerTokens.color]: tokens.color.surface.onSurface,
        color: makeVar(typographyTokens.color, innerTokens.color),
    })

    export const fonts = styleVariants({
        'label-small': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.labelSmall.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.labelSmall.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.labelSmall.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.labelSmall.letterSpacing),
        },
        'label-medium': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.labelMedium.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.labelMedium.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.labelMedium.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.labelMedium.letterSpacing),
        },
        'label-large': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.labelLarge.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.labelLarge.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.labelLarge.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.labelLarge.letterSpacing),
        },
        'body-small': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.bodySmall.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.bodySmall.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.bodySmall.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.bodySmall.letterSpacing),
        },
        'body-medium': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.bodyMedium.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.bodyMedium.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.bodyMedium.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.bodyMedium.letterSpacing),
        },
        'body-large': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.bodyLarge.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.bodyLarge.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.bodyLarge.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.bodyLarge.letterSpacing),
        },
        'title-small': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.titleSmall.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.titleSmall.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.titleSmall.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.titleSmall.letterSpacing),
        },
        'title-medium': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.titleMedium.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.titleMedium.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.titleMedium.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.titleMedium.letterSpacing),
        },
        'title-large': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.titleLarge.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.titleLarge.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.titleLarge.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.titleLarge.letterSpacing),
        },
        'headline-small': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.headlineSmall.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.headlineSmall.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.headlineSmall.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.headlineSmall.letterSpacing),
        },
        'headline-medium': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.headlineMedium.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.headlineMedium.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.headlineMedium.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.headlineMedium.letterSpacing),
        },
        'headline-large': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.headlineLarge.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.headlineLarge.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.headlineLarge.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.headlineLarge.letterSpacing),
        },
        'display-small': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.displaySmall.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.displaySmall.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.displaySmall.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.displaySmall.letterSpacing),
        },
        'display-medium': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.displayMedium.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.displayMedium.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.displayMedium.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.displayMedium.letterSpacing),
        },
        'display-large': {
            fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.displayLarge.fontSize),
            lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.displayLarge.lineHeight),
            fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.displayLarge.fontWeight),
            letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.displayLarge.letterSpacing),
        },
    })

}
