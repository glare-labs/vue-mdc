import { argbFromHex, Hct, hexFromArgb, SchemeContent, SchemeExpressive, SchemeFidelity, SchemeMonochrome, SchemeNeutral, SchemeTonalSpot, SchemeVibrant } from '@material/material-color-utilities'
import { Strings } from '../utils/Strings'
import { MaterialColors, type TMaterialColors } from './MaterialColors'
import { EMaterialContrastLevel, type TMaterialContrastLevel } from './MaterialContrastLevel'
import { EMaterialVariant, type TMaterialVariant } from './MaterialVariant'

export type TSourceColorHex = string
export type TSourceColorHct = Hct

export type TMaterialThemeConfiguration = {
    sourceColor: TSourceColorHct
    isDark: boolean
    contrastLevel: TMaterialContrastLevel
    variant: TMaterialVariant
}

interface IMaterialThemeGenerative {
    generate: (options: Partial<TMaterialThemeConfiguration>) => unknown

}

export type TMaterialColorTokens = {
    [V in keyof TMaterialColors]: CSSStyleToken
}
class CSSStyleToken {
    constructor(
        private _tokenName: string,
        private _tokenValue: string
    ) {
    }

    get token() {
        return `--${this._tokenName}: ${this._tokenValue}`
    }

    get name() {
        return `--${this._tokenName}`
    }

    get value() {
        return this._tokenValue
    }

}

class MaterialThemeGenerator implements IMaterialThemeGenerative {
    private tokenNamePrefix = 'md-sys-color'

    public generate(options: Partial<TMaterialThemeConfiguration>) {
        let sourceColorHct: Hct = options.sourceColor ?? Hct.fromInt(argbFromHex('#1beed4'))
        const isDark = options.isDark ?? false
        const contrastLevel = options.contrastLevel ?? EMaterialContrastLevel.Default
        const variant = options.variant ?? EMaterialVariant.CONTENT

        let scheme = null
        switch (variant) {
            case EMaterialVariant.MONOCHROME:
                scheme = new SchemeMonochrome(sourceColorHct, isDark, contrastLevel)
                break
            case EMaterialVariant.NEUTRAL:
                scheme = new SchemeNeutral(sourceColorHct, isDark, contrastLevel)
                break
            case EMaterialVariant.TONAL_SPOT:
                scheme = new SchemeTonalSpot(sourceColorHct, isDark, contrastLevel)
                break
            case EMaterialVariant.VIBRANT:
                scheme = new SchemeVibrant(sourceColorHct, isDark, contrastLevel)
                break
            case EMaterialVariant.EXPRESSIVE:
                scheme = new SchemeExpressive(sourceColorHct, isDark, contrastLevel)
                break
            case EMaterialVariant.FIDELITY:
                scheme = new SchemeFidelity(sourceColorHct, isDark, contrastLevel)
                break
            case EMaterialVariant.CONTENT:
                scheme = new SchemeContent(sourceColorHct, isDark, contrastLevel)
                break
            default:
                throw new Error(`Unaccepted parameter value [options.variant] [${options?.variant}]`)
        }

        const theme: Record<string, CSSStyleToken> = {}
        for (const [key, value] of Object.entries(MaterialColors)) {
            theme[key] = new CSSStyleToken(`${this.tokenNamePrefix}-${Strings.toKebabCase(key)}`, hexFromArgb(value.getArgb(scheme)))
        }

        return {
            tokens: theme as TMaterialColorTokens,
            styleText: () => this.styling(theme as TMaterialColorTokens)
        }
    }

    public styling(tokens: TMaterialColorTokens) {
        return `:root {${Object.entries(tokens).map(token => token[1].token).reduce((pre, cur) => `${pre};${cur}`)}}`
    }

}

export class MaterialTheme {
    private static readonly instance: MaterialThemeGenerator = new MaterialThemeGenerator

    static get generate() {
        return this.instance.generate.bind(this.instance)
    }
}

