import { MaterialDynamicColors, Hct, SchemeContent, hexFromArgb, DynamicScheme } from '@material/material-color-utilities'
import { toKebabCase } from './tokens'

/**
 * A Mapping of color token name to MCU HCT color function generator.
 */
const materialColors = {
    // contentAccentToneDelta: MaterialDynamicColors.contentAccentToneDelta,
    // highestSurface: MaterialDynamicColors.highestSurface,
    primaryPaletteKeyColor: MaterialDynamicColors.primaryPaletteKeyColor,
    secondaryPaletteKeyColor: MaterialDynamicColors.secondaryPaletteKeyColor,
    tertiaryPaletteKeyColor: MaterialDynamicColors.tertiaryPaletteKeyColor,
    neutralPaletteKeyColor: MaterialDynamicColors.neutralPaletteKeyColor,
    neutralVariantPaletteKeyColor: MaterialDynamicColors.neutralVariantPaletteKeyColor,
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

export interface IMaterialDynamicThemeGeneratorOptions {
    isDark: boolean
    contrastLevel: number
}

export class MaterialDynamicThemeGenerator {
    public static GenerateBySourceColor(argb: number, options: IMaterialDynamicThemeGeneratorOptions) {
        const scheme = new SchemeContent(Hct.fromInt(argb), options.isDark, options.contrastLevel)
        const theme: Record<string, any> = {}
        for (const [key, value] of Object.entries(materialColors)) {
            theme[toKebabCase(key)] = hexFromArgb(value.getArgb(scheme))
        }
        return theme as typeof materialColors
    }

    public static GenerateByScheme(scheme: DynamicScheme) {
        const theme: Record<string, any> = {}
        for (const [key, value] of Object.entries(materialColors)) {
            theme[toKebabCase(key)] = hexFromArgb(value.getArgb(scheme))
        }
        return theme as typeof materialColors
    }

    public static ToStyleText(theme: typeof materialColors) {
        return Object.entries(theme).map(e => `--md-sys-color-${e[0]}: ${e[1]};`).reduce((l, c) => l + c)
    }
}

