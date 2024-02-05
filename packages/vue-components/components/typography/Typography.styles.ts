import { makeComponentInnerTokens, makeVarWithDefault, tokens } from '../../utils/tokens'
import { typographyTokens } from './Typography.tokens'
import type { TypographyType } from './Typography.type'

const innerTokens = makeComponentInnerTokens(typographyTokens)

/**
 * Generate Styles that are in use only.
 */
export const GenerateTypographyStyle = (e: TypographyType) => {
    const currentTypescale = e.replace(e[e.indexOf('-') + 1], e[e.indexOf('-') + 1].toUpperCase()).replace('-', '') as (keyof typeof tokens.typescale)

    return ({
        fontSize: makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale[currentTypescale].fontSize),
        lineHeight: makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale[currentTypescale].lineHeight),
        fontWeight: makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale[currentTypescale].fontWeight),
        letterSpacing: makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale[currentTypescale].letterSpacing),
    })
}

/**
 * @deprecated
 */
export const styles = [`
.label-small {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.labelSmall.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.labelSmall.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.labelSmall.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.labelSmall.letterSpacing)};
},
.label-medium {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.labelMedium.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.labelMedium.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.labelMedium.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.labelMedium.letterSpacing)};
},
.label-large {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.labelLarge.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.labelLarge.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.labelLarge.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.labelLarge.letterSpacing)};
},
.body-small {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.bodySmall.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.bodySmall.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.bodySmall.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.bodySmall.letterSpacing)};
},
.body-medium {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.bodyMedium.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.bodyMedium.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.bodyMedium.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.bodyMedium.letterSpacing)};
},
.body-large {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.bodyLarge.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.bodyLarge.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.bodyLarge.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.bodyLarge.letterSpacing)};
},
.title-small {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.titleSmall.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.titleSmall.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.titleSmall.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.titleSmall.letterSpacing)};
},
.title-medium {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.titleMedium.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.titleMedium.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.titleMedium.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.titleMedium.letterSpacing)};
},
.title-large {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.titleLarge.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.titleLarge.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.titleLarge.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.titleLarge.letterSpacing)};
},
.headline-small {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.headlineSmall.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.headlineSmall.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.headlineSmall.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.headlineSmall.letterSpacing)};
},
.headline-medium {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.headlineMedium.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.headlineMedium.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.headlineMedium.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.headlineMedium.letterSpacing)};
},
.headline-large {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.headlineLarge.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.headlineLarge.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.headlineLarge.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.headlineLarge.letterSpacing)};
},
.display-small {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.displaySmall.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.displaySmall.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.displaySmall.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.displaySmall.letterSpacing)};
},
.display-medium {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.displayMedium.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.displayMedium.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.displayMedium.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.displayMedium.letterSpacing)};
},
.display-large {
    font-size: ${makeVarWithDefault([typographyTokens['font-size'], innerTokens['font-size']], tokens.typescale.displayLarge.fontSize)};
    line-height: ${makeVarWithDefault([typographyTokens['line-height'], innerTokens['line-height']], tokens.typescale.displayLarge.lineHeight)};
    font-weight: ${makeVarWithDefault([typographyTokens['font-weight'], innerTokens['font-weight']], tokens.typescale.displayLarge.fontWeight)};
    letter-spacing: ${makeVarWithDefault([typographyTokens['letter-spacing'], innerTokens['letter-spacing']], tokens.typescale.displayLarge.letterSpacing)};
},
`]
