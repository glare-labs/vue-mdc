
/**
 * Now, global property tokens are completely decoupled from components. 
 * All components no longer rely on the tokens property, but tokens are still available for use.
 * 
 * Tokens provide a convenient way to access CSS variables.
 */
export const tokens = {

    color: {
        primaryPaletteKeyColor: '--md-sys-color-primary-palette-key-color',
        secondaryPaletteKeyColor: '--md-sys-color-secondary-palette-key-color',
        tertiaryPaletteKeyColor: '--md-sys-color-tertiary-palette-key-color',
        neutralPaletteKeyColor: '--md-sys-color-neutral-palette-key-color',
        neutralVariantPaletteKeyColor: '--md-sys-color-neutral-variant-palette-key-color',
        background: '--md-sys-color-background',
        onBackground: '--md-sys-color-on-background',
        surface: '--md-sys-color-surface',
        surfaceDim: '--md-sys-color-surface-dim',
        surfaceBright: '--md-sys-color-surface-bright',
        surfaceContainerLowest: '--md-sys-color-surface-container-lowest',
        surfaceContainerLow: '--md-sys-color-surface-container-low',
        surfaceContainer: '--md-sys-color-surface-container',
        surfaceContainerhigh: '--md-sys-color-surface-container-high',
        surfaceContainerHighest: '--md-sys-color-surface-container-highest',
        onSurface: '--md-sys-color-on-surface',
        surfaceVariant: '--md-sys-color-surface-variant',
        onSurfaceVariant: '--md-sys-color-on-surface-variant',
        inverseSurface: '--md-sys-color-inverse-surface',
        inverseOnSurface: '--md-sys-color-inverse-on-surface',
        outline: '--md-sys-color-outline',
        outlineVariant: '--md-sys-color-outline-variant',
        shadow: '--md-sys-color-shadow',
        scrim: '--md-sys-color-scrim',
        surfaceTint: '--md-sys-color-surface-tint',
        primary: '--md-sys-color-primary',
        onPrimary: '--md-sys-color-on-primary',
        primaryContainer: '--md-sys-color-primary-container',
        onPrimaryContainer: '--md-sys-color-on-primary-container',
        inversePrimary: '--md-sys-color-inverse-primary',
        secondary: '--md-sys-color-secondary',
        onSecondary: '--md-sys-color-on-secondary',
        secondaryContainer: '--md-sys-color-secondary-container',
        onSecondaryContainer: '--md-sys-color-on-secondary-container',
        tertiary: '--md-sys-color-tertiary',
        onTertiary: '--md-sys-color-on-tertiary',
        tertiaryContainer: '--md-sys-color-tertiary-container',
        onTertiaryContainer: '--md-sys-color-on-tertiary-container',
        error: '--md-sys-color-error',
        onError: '--md-sys-color-on-error',
        errorContainer: '--md-sys-color-error-container',
        onErrorContainer: '--md-sys-color-on-error-container',
        primaryFixed: '--md-sys-color-primary-fixed',
        primaryFixedDim: '--md-sys-color-primary-fixed-dim',
        onPrimaryFixed: '--md-sys-color-on-primary-fixed',
        onPrimaryFixedVariant: '--md-sys-color-on-primary-fixed-variant',
        secondaryFixed: '--md-sys-color-secondary-fixed',
        secondaryFixedDim: '--md-sys-color-secondary-fixed-dim',
        onSecondaryFixed: '--md-sys-color-on-secondary-fixed',
        onSecondaryFixedVariant: '--md-sys-color-on-secondary-fixed-variant',
        tertiaryFixed: '--md-sys-color-tertiary-fixed',
        tertiaryFixedDim: '--md-sys-color-tertiary-fixed-dim',
        onTertiaryFixed: '--md-sys-color-on-tertiary-fixed',
        onTertiaryFixedVariant: '--md-sys-color-on-tertiary-fixed-variant',
    },

    shape: {
        full: '9999px',
        extraLarge: '28px',
        large: '16px',
        medium: '12px',
        small: '8px',
        extraSmall: '4px',
        none: '0'
    },

    elevation: {
        level5: 5,
        level4: 4,
        level3: 3,
        level2: 2,
        level1: 1,
        level0: 0,
    },

    motion: {
        easing: {
            standard: 'cubic-bezier(0.2, 0, 0, 1)',
            standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
            standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
            emphasized: 'cubic-beziercubic-bezier(0.2, 0, 0, 1)',
            emphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
            emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
            legacy: 'cubic-bezier(0.4, 0, 0.2, 1)',
            legacyAccelerate: 'cubic-bezier(0.4, 0, 1, 1)',
            legacyDecelerate: 'cubic-bezier(0, 0, 0.2, 1)',
            linear: 'cubic-bezier(0, 0, 1, 1)',
        },
        duration: {
            short1: '50ms',
            short2: '100ms',
            short3: '150ms',
            short4: '200ms',
            medium1: '250ms',
            medium2: '300ms',
            medium3: '350ms',
            medium4: '400ms',
            long1: '450ms',
            long2: '500ms',
            long3: '550ms',
            long4: '600ms',
            extraLong1: '700ms',
            extraLong2: '800ms',
            extraLong3: '900ms',
            extraLong4: '1000ms',
        },
        style: {
            linear: 'linear',
        },
    },

    typescale: {
        displayLarge: {
            fontSize: '57px',
            fontWeight: 400,
            lineHeight: '64px',
            letterSpacing: '-0.25px',
        },
        displayMedium: {
            fontSize: '45px',
            fontWeight: 400,
            lineHeight: '52px',
            letterSpacing: '0',
        },
        displaySmall: {
            fontSize: '36px',
            fontWeight: 400,
            lineHeight: '44px',
            letterSpacing: '0',
        },
        headlineLarge: {
            fontSize: '32px',
            fontWeight: 400,
            lineHeight: '40px',
            letterSpacing: '0',
        },
        headlineMedium: {
            fontSize: '28px',
            fontWeight: 400,
            lineHeight: '36px',
            letterSpacing: '0',
        },
        headlineSmall: {
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '32px',
            letterSpacing: '0',
        },
        titleLarge: {
            fontSize: '22px',
            fontWeight: 400,
            lineHeight: '28px',
            letterSpacing: '0',
        },
        titleMedium: {
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px',
            letterSpacing: '0.15px',
        },
        titleSmall: {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '0.1px',
        },
        bodyLarge: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '0.5px',
        },
        bodyMedium: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.25px',
        },
        bodySmall: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '0.4px',
        },
        labelLarge: {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '0.1px',
        },
        labelMedium: {
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '16px',
            letterSpacing: '0.5px',
        },
        labelSmall: {
            fontSize: '11px',
            fontWeight: 500,
            lineHeight: '16px',
            letterSpacing: '0.5px',
        },
    },
} as const

/**
 * @deprecated
 */
export function makeComponentExternTokens<T extends Record<string, string>>(componentTokens: Record<string, string>) {
    const e = new Object() as Record<string, string>
    for (const i in componentTokens) {
        e[i] = componentTokens[i] + '-extern'
    }

    return e as Readonly<T>
}
/**
 * @deprecated
 */
export function makeComponentTokens<C extends string, T extends string>(componentName: C, componentTokenNames: T[]) {
    const e = new Object() as Record<string, `--mamv-${string}-${T}`>

    const componentNameKebabCase = toKebabCase(componentName)
    for (const i of componentTokenNames) {
        e[i] = `--mamv-${componentNameKebabCase}-${i}`
    }

    return e as Readonly<{
        [V in typeof componentTokenNames[number]]: `--mamv-${C}-${V}`
    }>
}
/**
 * @deprecated
 */
export function makeComponentInnerTokens<C extends string, N extends string, T extends string>(tokens: Record<N, `--mamv-${C}-${T}`>) {
    const e = new Object() as Record<string, string>

    for (const i in tokens) {
        e[i] = `${tokens[i]}-inner`
    }

    return e as {
        [K in keyof typeof tokens]: `--mamv-${C}-${K}-inner`
    }
}

/**
 * 
 * @example
 *   MAMVButton -> m-a-m-v-button
 */
export function toKebabCase(str: string) {
    return str.split('').map((letter, idx) => {
        return letter.toUpperCase() === letter
            ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
            : letter
    }).join('')
}

/**
 * @deprecated
 * 
 * Converts string array to CSS variable.
 * 
 * @example
 * makeVar('--a') -> var(--a)
 * makeVar('--a', '--b') -> var(--a, var(--b))
 * makeVar('--a', '--b', '--c') -> var(--a, var(--b, var(--c)))
 */
export function makeVar(...tokens: string[]): string {
    if (tokens.length === 1) return `var(${tokens[0]})`
    return tokens.reduceRight((pre, cur, index) => `var(${cur}${index === tokens.length - 2 ? ', var(' + pre + ')' : ', ' + pre})`)
}

/**
 * @deprecated
 * 
 * Add a default value to the last CSS variable.
 * 
 * @example
 * makeVar(['--a'], 'red') -> var(--a, 'red')
 * makeVar(['--a', '--b'], 'red') -> var(--a, var(--b, 'red'))
 * makeVar(['--a', '--b', '--c'], 'red') -> var(--a, var(--b, var(--c, 'red')))
 */
export function makeVarWithDefault(tokens: string[], value: string | number): string {
    if (!Array.isArray(tokens)) throw new Error(`The first arguments ${tokens} is not a string[]`)
    return `${makeVar(...tokens).split(')', 1)}, ${value}${')'.repeat(tokens.length)}`
}

/**
 * @deprecated
 */
export function makeValues(...tokens: any[]): string {
    console.log(tokens.join(', '))

    return tokens.join(', ')
}
