import {
    hexFromArgb,
    SchemeMonochrome,
    Hct,
    SchemeNeutral,
    SchemeTonalSpot,
    SchemeVibrant,
    SchemeExpressive,
    SchemeFidelity,
    SchemeContent,
    argbFromHex,
    argbFromRgba,
    argbFromRgb,
} from '@material/material-color-utilities'
import { toKebabCase } from './strings'
import { MaterialDynamicColors } from '@material/material-color-utilities'

type THexColor = `#${string}`
type TRgbColor = `rgb(${number}, ${number}, ${number})`
type TRgbaColor = `rgb(${number}, ${number}, ${number}, ${number})`
export type TColor = THexColor | TRgbColor | TRgbaColor
export enum EColorType {
    Hex = 'hex',
    Rgb = 'rgb',
    Rgba = 'rgba',
}
export type TMaterialColors = Record<keyof typeof MaterialColors, string>

/**
 * A Mapping of color token name to MCU HCT color function generator.
 */
const MaterialColors = {
    primaryPaletteKeyColor: MaterialDynamicColors.primaryPaletteKeyColor,
    secondaryPaletteKeyColor: MaterialDynamicColors.secondaryPaletteKeyColor,
    tertiaryPaletteKeyColor: MaterialDynamicColors.tertiaryPaletteKeyColor,
    neutralPaletteKeyColor: MaterialDynamicColors.neutralPaletteKeyColor,
    neutralVariantPaletteKeyColor:
        MaterialDynamicColors.neutralVariantPaletteKeyColor,
    background: MaterialDynamicColors.background,
    onBackground: MaterialDynamicColors.onBackground,
    surface: MaterialDynamicColors.surface,
    surfaceDim: MaterialDynamicColors.surfaceDim,
    surfaceBright: MaterialDynamicColors.surfaceBright,
    surfaceContainerLowest: MaterialDynamicColors.surfaceContainerLowest,
    surfaceContainerLow: MaterialDynamicColors.surfaceContainerLow,
    surfaceContainer: MaterialDynamicColors.surfaceContainer,
    surfaceContainerHigh: MaterialDynamicColors.surfaceContainerHigh,
    surfaceContainerHighest: MaterialDynamicColors.surfaceContainerHighest,
    onSurface: MaterialDynamicColors.onSurface,
    surfaceVariant: MaterialDynamicColors.surfaceVariant,
    onSurfaceVariant: MaterialDynamicColors.onSurfaceVariant,
    inverseSurface: MaterialDynamicColors.inverseSurface,
    inverseOnSurface: MaterialDynamicColors.inverseOnSurface,
    outline: MaterialDynamicColors.outline,
    outlineVariant: MaterialDynamicColors.outlineVariant,
    shadow: MaterialDynamicColors.shadow,
    scrim: MaterialDynamicColors.scrim,
    surfaceTint: MaterialDynamicColors.surfaceTint,
    primary: MaterialDynamicColors.primary,
    onPrimary: MaterialDynamicColors.onPrimary,
    primaryContainer: MaterialDynamicColors.primaryContainer,
    onPrimaryContainer: MaterialDynamicColors.onPrimaryContainer,
    inversePrimary: MaterialDynamicColors.inversePrimary,
    secondary: MaterialDynamicColors.secondary,
    onSecondary: MaterialDynamicColors.onSecondary,
    secondaryContainer: MaterialDynamicColors.secondaryContainer,
    onSecondaryContainer: MaterialDynamicColors.onSecondaryContainer,
    tertiary: MaterialDynamicColors.tertiary,
    onTertiary: MaterialDynamicColors.onTertiary,
    tertiaryContainer: MaterialDynamicColors.tertiaryContainer,
    onTertiaryContainer: MaterialDynamicColors.onTertiaryContainer,
    error: MaterialDynamicColors.error,
    onError: MaterialDynamicColors.onError,
    errorContainer: MaterialDynamicColors.errorContainer,
    onErrorContainer: MaterialDynamicColors.onErrorContainer,
    primaryFixed: MaterialDynamicColors.primaryFixed,
    primaryFixedDim: MaterialDynamicColors.primaryFixedDim,
    onPrimaryFixed: MaterialDynamicColors.onPrimaryFixed,
    onPrimaryFixedVariant: MaterialDynamicColors.onPrimaryFixedVariant,
    secondaryFixed: MaterialDynamicColors.secondaryFixed,
    secondaryFixedDim: MaterialDynamicColors.secondaryFixedDim,
    onSecondaryFixed: MaterialDynamicColors.onSecondaryFixed,
    onSecondaryFixedVariant: MaterialDynamicColors.onSecondaryFixedVariant,
    tertiaryFixed: MaterialDynamicColors.tertiaryFixed,
    tertiaryFixedDim: MaterialDynamicColors.tertiaryFixedDim,
    onTertiaryFixed: MaterialDynamicColors.onTertiaryFixed,
    onTertiaryFixedVariant: MaterialDynamicColors.onTertiaryFixedVariant,
}

export type TMaterialVariant = 0 | 1 | 2 | 3 | 4 | 5 | 6
export enum EMaterialVariant {
    MONOCHROME = 0,
    NEUTRAL = 1,
    TONAL_SPOT = 2,
    VIBRANT = 3,
    EXPRESSIVE = 4,
    FIDELITY = 5,
    CONTENT = 6,
    // RAINBOW = 7,
    // FRUIT_SALAD = 8,
}
export type TMaterialContrastLevel = -1.0 | 0 | 0.5 | 1.0
export enum EMaterialContrastLevel {
    Reduced = -1.0,
    Default = 0,
    Medium = 0.5,
    High = 1.0,
}

export class MaterialThemeGenerator {

    private static _fromColorStringToInt(sourceColor: string): number {
        // #123456
        if (sourceColor.includes('#')) {
            return argbFromHex(sourceColor)
        }
        // rgba(1, 2, 3, 0)
        else if (sourceColor.includes('rgba(')) {
            const rgb = (
                sourceColor
                    .replace('rgba(', '')
                    .replace(')', '')
                    .split(',') as Array<string>
            ).map(s => parseInt(s))
            return argbFromRgba({ r: rgb[0], g: rgb[1], b: rgb[2], a: rgb[3] })
        }
        // rgb(1, 2, 3)
        else if (sourceColor.includes('rgb(')) {
            const rgb = (
                sourceColor
                    .replace('rgb(', '')
                    .replace(')', '')
                    .split(',') as Array<string>
            ).map(s => parseInt(s))
            return argbFromRgb(rgb[0], rgb[1], rgb[2])
        }
        throw new Error('The param [sourceColor] is not a color code.')
    }


    public static generate(
        sourceColor: TColor,
        options?: Partial<{
            isDark: boolean,
            contrastLevel: TMaterialContrastLevel,
            variant: TMaterialVariant,
        }>
    ): TMaterialColors {
        const colors = this._fromColorStringToInt(sourceColor)

        let scheme = null

        switch (options?.variant ?? EMaterialVariant.VIBRANT) {
            case EMaterialVariant.MONOCHROME:
                scheme = new SchemeMonochrome(
                    Hct.fromInt(colors),
                    options?.isDark ?? false,
                    options?.contrastLevel ?? EMaterialContrastLevel.Default
                )
                break
            case EMaterialVariant.NEUTRAL:
                scheme = new SchemeNeutral(
                    Hct.fromInt(colors),
                    options?.isDark ?? false,
                    options?.contrastLevel ?? EMaterialContrastLevel.Default
                )
                break
            case EMaterialVariant.TONAL_SPOT:
                scheme = new SchemeTonalSpot(
                    Hct.fromInt(colors),
                    options?.isDark ?? false,
                    options?.contrastLevel ?? EMaterialContrastLevel.Default
                )
                break
            case EMaterialVariant.VIBRANT:
                scheme = new SchemeVibrant(
                    Hct.fromInt(colors),
                    options?.isDark ?? false,
                    options?.contrastLevel ?? EMaterialContrastLevel.Default
                )
                break
            case EMaterialVariant.EXPRESSIVE:
                scheme = new SchemeExpressive(
                    Hct.fromInt(colors),
                    options?.isDark ?? false,
                    options?.contrastLevel ?? EMaterialContrastLevel.Default
                )
                break
            case EMaterialVariant.FIDELITY:
                scheme = new SchemeFidelity(
                    Hct.fromInt(colors),
                    options?.isDark ?? false,
                    options?.contrastLevel ?? EMaterialContrastLevel.Default
                )
                break
            case EMaterialVariant.CONTENT:
                scheme = new SchemeContent(
                    Hct.fromInt(colors),
                    options?.isDark ?? false,
                    options?.contrastLevel ?? EMaterialContrastLevel.Default
                )
                break
            default:
                throw new Error(
                    `Unaccepted parameter value [options.variant] [${options?.variant}]`
                )
        }

        const theme: Record<string, string> = {}
        for (const [key, value] of Object.entries(MaterialColors)) {
            theme[key] = hexFromArgb(value.getArgb(scheme))
        }
        return theme as TMaterialColors
    }

    public static toStyleText(tokens: TMaterialColors, options?: Partial<{
        prefix: string
    }>): string {
        return Object
            .entries(tokens)
            .map(e => `--${options?.prefix ?? 'md-sys-color'}-${toKebabCase(e[0])}: ${e[1]};`)
            .reduce((l, c) => l + c)
    }
}

