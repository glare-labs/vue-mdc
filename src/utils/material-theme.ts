import { MaterialDynamicColors, Hct, SchemeContent, hexFromArgb, DynamicScheme, SchemeTonalSpot } from '@material/material-color-utilities'
import { toKebabCase } from './strings'


/**
 * 
 * MaterialSchemaGenerator can create a group of material schema tokens(P, S, T, E, N, NV), 
 * e.g.
 *      P0 P5 P10 P20 ... P100
 *      S0 ...
 *      T0 ...
 * 
 * 
 * MaterialDynamicThemeGenerator can transform tokens from schema to color tokens,
 * e.g.
 *      shadow -> MaterialDynamicColors.shadow -> N0 -> #000000 -> --md-sys-color-shadow: #000000;
 * 
 */


/**
 * A Mapping of color token name to MCU HCT color function generator.
 */
const materialColors = {
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
type TMaterialColors = typeof materialColors

export enum EMaterialContrastLevel {
    Reduced = -1.0,
    Default = 0,
    Medium = 0.5,
    High = 1.0,
}
export interface IMaterialGeneratorOptions {
    sourceColor: number
    isDark: boolean
    contrastLevel: number | EMaterialContrastLevel
}

export class MaterialDynamicColorGenerator {

    /**
     * 
     * @param options {sourceColor, isDark, contrastLevel}, [sourceColor] is required
     * @returns TMaterialColors
     */
    public static GenerateBySourceColor(options: Partial<IMaterialGeneratorOptions> & Pick<IMaterialGeneratorOptions, 'sourceColor'>): TMaterialColors {
        const scheme = new SchemeContent(
            Hct.fromInt(options.sourceColor),
            options.isDark ?? false,
            options.contrastLevel ?? EMaterialContrastLevel.Default
        )
        const theme: Record<string, any> = {}
        for (const [key, value] of Object.entries(materialColors)) {
            theme[toKebabCase(key)] = hexFromArgb(value.getArgb(scheme))
        }
        return theme as TMaterialColors
    }

    public static GenerateByScheme(scheme: DynamicScheme): TMaterialColors {
        const theme: Record<string, any> = {}
        for (const [key, value] of Object.entries(materialColors)) {
            theme[toKebabCase(key)] = hexFromArgb(value.getArgb(scheme))
        }
        return theme as TMaterialColors
    }

    public static ToStyleText(theme: TMaterialColors) {
        return Object.entries(theme).map(e => `--md-sys-color-${e[0]}: ${e[1]};`).reduce((l, c) => l + c)
    }
}


export type TMaterialSchemas = {
    primary: {
        P0: string
        P5: string
        P10: string
        P20: string
        P30: string
        P40: string
        P50: string
        P60: string
        P70: string
        P80: string
        P90: string
        P95: string
        P100: string
    },
    secondary: {
        S0: string
        S5: string
        S10: string
        S20: string
        S30: string
        S40: string
        S50: string
        S60: string
        S70: string
        S80: string
        S90: string
        S95: string
        S100: string
    },
    tertiary: {
        T0: string
        T5: string
        T10: string
        T20: string
        T30: string
        T40: string
        T50: string
        T60: string
        T70: string
        T80: string
        T90: string
        T95: string
        T100: string
    },
    error: {
        E0: string
        E5: string
        E10: string
        E20: string
        E30: string
        E40: string
        E50: string
        E60: string
        E70: string
        E80: string
        E90: string
        E95: string
        E100: string
    },
    neutral: {
        N0: string
        N5: string
        N10: string
        N20: string
        N30: string
        N40: string
        N50: string
        N60: string
        N70: string
        N80: string
        N90: string
        N95: string
        N100: string
    },
    neutralVariant: {
        NV0: string
        NV5: string
        NV10: string
        NV20: string
        NV30: string
        NV40: string
        NV50: string
        NV60: string
        NV70: string
        NV80: string
        NV90: string
        NV95: string
        NV100: string
    },
}
export class MaterialSchemaGenerator {
    private static readonly cl = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100]
    public static GenerateBySourceColor(options: Partial<IMaterialGeneratorOptions> & Pick<IMaterialGeneratorOptions, 'sourceColor'> & {
        cl: Array<number>
    }) {
        const scheme = new SchemeTonalSpot(
            Hct.fromInt(options.sourceColor),
            options.isDark ?? false,
            options.contrastLevel ?? EMaterialContrastLevel.Default
        )

        const r = {
            primary: {},
            secondary: {},
            tertiary: {},
            error: {},
            neutral: {},
            neutralVariant: {},
        } as Record<string, any>

        for (const l of options.cl ?? this.cl) {
            r.primary[`P${l}`] = hexFromArgb(scheme.primaryPalette.tone(l))
            r.secondary[`S${l}`] = hexFromArgb(scheme.secondaryPalette.tone(l))
            r.tertiary[`T${l}`] = hexFromArgb(scheme.tertiaryPalette.tone(l))
            r.error[`E${l}`] = hexFromArgb(scheme.errorPalette.tone(l))
            r.neutral[`N${l}`] = hexFromArgb(scheme.neutralPalette.tone(l))
            r.neutralVariant[`NV${l}`] = hexFromArgb(scheme.neutralVariantPalette.tone(l))
        }

        return r as TMaterialSchemas
    }
}
