/**
 * @license
 * Copyright 2024 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

export type TMdColor = {
    Background: string
    OnBackground: string
    Surface: string
    SurfaceDim: string
    SurfaceBright: string
    SurfaceContainerLowest: string
    SurfaceContainerLow: string
    SurfaceContainer: string
    SurfaceContainerHigh: string
    SurfaceContainerHighest: string
    OnSurface: string
    SurfaceVariant: string
    OnSurfaceVariant: string
    InverseSurface: string
    InverseOnSurface: string
    Outline: string
    OutlineVariant: string
    Shadow: string
    Scrim: string
    SurfaceTint: string
    Primary: string
    OnPrimary: string
    PrimaryContainer: string
    OnPrimaryContainer: string
    InversePrimary: string
    Secondary: string
    OnSecondary: string
    SecondaryContainer: string
    OnSecondaryContainer: string
    Tertiary: string
    OnTertiary: string
    TertiaryContainer: string
    OnTertiaryContainer: string
    Error: string
    OnError: string
    ErrorContainer: string
    OnErrorContainer: string
    PrimaryFixed: string
    PrimaryFixedDim: string
    OnPrimaryFixed: string
    OnPrimaryFixedVariant: string
    SecondaryFixed: string
    SecondaryFixedDim: string
    OnSecondaryFixed: string
    OnSecondaryFixedVariant: string
    TertiaryFixed: string
    TertiaryFixedDim: string
    OnTertiaryFixed: string
    OnTertiaryFixedVariant: string
}

export enum EColor {
    Background = `var(--md-sys-color-background, #141218)`,
    OnBackground = `var(--md-sys-color-on-background, #e6e0e9)`,
    Surface = `var(--md-sys-color-surface, #141218)`,
    SurfaceDim = `var(--md-sys-color-surface-dim, #141218)`,
    SurfaceBright = `var(--md-sys-color-surface-bright, #3b383e)`,
    SurfaceContainerLowest = `var(--md-sys-color-surface-container-lowest, #0f0d13)`,
    SurfaceContainerLow = `var(--md-sys-color-surface-container-low, #1d1b20)`,
    SurfaceContainer = `var(--md-sys-color-surface-container, #211f26)`,
    SurfaceContainerHigh = `var(--md-sys-color-surface-container-high, #2b2930)`,
    SurfaceContainerHighest = `var(--md-sys-color-surface-container-highest, #36343b)`,
    OnSurface = `var(--md-sys-color-on-surface, #e6e0e9)`,
    SurfaceVariant = `var(--md-sys-color-surface-variant, #49454f)`,
    OnSurfaceVariant = `var(--md-sys-color-on-surface-variant, #cac4d0)`,
    InverseSurface = `var(--md-sys-color-inverse-surface, #e7e0ec)`,
    InverseOnSurface = `var(--md-sys-color-inverse-on-surface, #322f35)`,
    Outline = `var(--md-sys-color-outline, #938f99)`,
    OutlineVariant = `var(--md-sys-color-outline-variant, #49454f)`,
    Shadow = `var(--md-sys-color-shadow, #000)`,
    Scrim = `var(--md-sys-color-scrim, #000)`,
    SurfaceTint = `var(--md-sys-color-surface-tint, #d0bcff)`,
    Primary = `var(--md-sys-color-primary, #d0bcff)`,
    OnPrimary = `var(--md-sys-color-on-primary, #381e72)`,
    PrimaryContainer = `var(--md-sys-color-primary-container, #4f378b)`,
    OnPrimaryContainer = `var(--md-sys-color-on-primary-container, #eaddff)`,
    InversePrimary = `var(--md-sys-color-inverse-primary, #6750a4)`,
    Secondary = `var(--md-sys-color-secondary, #ccc2dc)`,
    OnSecondary = `var(--md-sys-color-on-secondary, #332d41)`,
    SecondaryContainer = `var(--md-sys-color-secondary-container, #4a4458)`,
    OnSecondaryContainer = `var(--md-sys-color-on-secondary-container, #e8def8)`,
    Tertiary = `var(--md-sys-color-tertiary, #efb8c8)`,
    OnTertiary = `var(--md-sys-color-on-tertiary, #492532)`,
    TertiaryContainer = `var(--md-sys-color-tertiary-container, #633b48)`,
    OnTertiaryContainer = `var(--md-sys-color-on-tertiary-container, #ffd8e4)`,
    Error = `var(--md-sys-color-error, #f2b8b5)`,
    OnError = `var(--md-sys-color-on-error, #601410)`,
    ErrorContainer = `var(--md-sys-color-error-container, #8c1d18)`,
    OnErrorContainer = `var(--md-sys-color-on-error-container, #f9dedc)`,
    PrimaryFixed = `var(--md-sys-color-primary-fixed, #eaddff)`,
    PrimaryFixedDim = `var(--md-sys-color-primary-fixed-dim, #d0bcff)`,
    OnPrimaryFixed = `var(--md-sys-color-on-primary-fixed, #21005d)`,
    OnPrimaryFixedVariant = `var(--md-sys-color-on-primary-fixed-variant, #4f378b)`,
    SecondaryFixed = `var(--md-sys-color-secondary-fixed, #e8def8)`,
    SecondaryFixedDim = `var(--md-sys-color-secondary-fixed-dim, #ccc2dc)`,
    OnSecondaryFixed = `var(--md-sys-color-on-secondary-fixed, #1d192b)`,
    OnSecondaryFixedVariant = `var(--md-sys-color-on-secondary-fixed-variant, #4a4458)`,
    TertiaryFixed = `var(--md-sys-color-tertiary-fixed, #ffd8e4)`,
    TertiaryFixedDim = `var(--md-sys-color-tertiary-fixed-dim, #efb8c8)`,
    OnTertiaryFixed = `var(--md-sys-color-on-tertiary-fixed, #31111d)`,
    OnTertiaryFixedVariant = `var(--md-sys-color-on-tertiary-fixed-variant, #633b48)`,
}
