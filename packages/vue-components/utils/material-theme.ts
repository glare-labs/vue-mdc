import { argbFromHex, MaterialDynamicColors, Theme, Hct, SchemeContent, hexFromArgb } from '@material/material-color-utilities'

/**
 * A Mapping of color token name to MCU HCT color function generator.
 */
const materialColors = {
    background: MaterialDynamicColors.background,
    'on-background': MaterialDynamicColors.onBackground,
    surface: MaterialDynamicColors.surface,
    'surface-dim': MaterialDynamicColors.surfaceDim,
    'surface-bright': MaterialDynamicColors.surfaceBright,
    'surface-container-lowest': MaterialDynamicColors.surfaceContainerLowest,
    'surface-container-low': MaterialDynamicColors.surfaceContainerLow,
    'surface-container': MaterialDynamicColors.surfaceContainer,
    'surface-container-high': MaterialDynamicColors.surfaceContainerHigh,
    'surface-container-highest': MaterialDynamicColors.surfaceContainerHighest,
    'on-surface': MaterialDynamicColors.onSurface,
    'surface-variant': MaterialDynamicColors.surfaceVariant,
    'on-surface-variant': MaterialDynamicColors.onSurfaceVariant,
    'inverse-surface': MaterialDynamicColors.inverseSurface,
    'inverse-on-surface': MaterialDynamicColors.inverseOnSurface,
    outline: MaterialDynamicColors.outline,
    'outline-variant': MaterialDynamicColors.outlineVariant,
    shadow: MaterialDynamicColors.shadow,
    scrim: MaterialDynamicColors.scrim,
    'surface-tint': MaterialDynamicColors.surfaceTint,
    primary: MaterialDynamicColors.primary,
    'on-primary': MaterialDynamicColors.onPrimary,
    'primary-container': MaterialDynamicColors.primaryContainer,
    'on-primary-container': MaterialDynamicColors.onPrimaryContainer,
    'inverse-primary': MaterialDynamicColors.inversePrimary,
    secondary: MaterialDynamicColors.secondary,
    'on-secondary': MaterialDynamicColors.onSecondary,
    'secondary-container': MaterialDynamicColors.secondaryContainer,
    'on-secondary-container': MaterialDynamicColors.onSecondaryContainer,
    tertiary: MaterialDynamicColors.tertiary,
    'on-tertiary': MaterialDynamicColors.onTertiary,
    'tertiary-container': MaterialDynamicColors.tertiaryContainer,
    'on-tertiary-container': MaterialDynamicColors.onTertiaryContainer,
    error: MaterialDynamicColors.error,
    'on-error': MaterialDynamicColors.onError,
    'error-container': MaterialDynamicColors.errorContainer,
    'on-error-container': MaterialDynamicColors.onErrorContainer,
}

export function GenerateMaterialTheme(
    sourceColor: string,
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches
): string {
    // Generate Styles
    const theme = createThemeFromSourceColor(sourceColor, dark)

    // Generate StyleText
    const styleText = createStyleText(theme)

    return styleText
}
function createStyleText(theme: Theme): string {
    let styleString = ''
    for (const [k, v] of Object.entries(theme)) {
        styleString += `--md-sys-color-${k}: ${v};`
    }
    return styleString
}
function createThemeFromSourceColor(color: string, isDark: boolean): Theme {
    const scheme = new SchemeContent(Hct.fromInt(argbFromHex(color)), isDark, 0)

    const theme: Record<string, any> = {}

    for (const [key, value] of Object.entries(materialColors)) {
        theme[key] = hexFromArgb(value.getArgb(scheme))
    }
    return theme as Theme
}
