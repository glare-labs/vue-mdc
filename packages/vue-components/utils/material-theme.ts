import { argbFromHex, MaterialDynamicColors, type Theme, Hct, SchemeContent, hexFromArgb, DynamicScheme } from '@material/material-color-utilities'
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

export function generateMaterialTheme(
    sourceColor: string,
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches,
    contrastLevel = 0,
) {
    return createThemeFromSourceColor(sourceColor, dark, contrastLevel)
}

export function generateMaterialThemeStyleText(
    sourceColor: string,
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches,
    contrastLevel = 0
): string {
    // Generate Styles
    const theme = createThemeFromSourceColor(sourceColor, dark, contrastLevel)

    // Generate StyleText
    return createStyleText(theme)
}

function createStyleText(theme: Record<string, any>): string {
    let styleString = ''
    for (const [k, v] of Object.entries(theme)) {
        styleString += `--md-sys-color-${k}: ${v};`
    }
    return styleString
}
function createThemeFromSourceColor(color: string, isDark: boolean, contrastLevel: number) {
    const scheme = new SchemeContent(Hct.fromInt(argbFromHex(color)), isDark, contrastLevel)

    const theme: Record<string, any> = {}

    for (const [key, value] of Object.entries(materialColors)) {
        /**
         * onSurface -> on-surface
         */
        theme[toKebabCase(key)] = hexFromArgb(value.getArgb(scheme))
    }

    return theme as typeof materialColors
}
