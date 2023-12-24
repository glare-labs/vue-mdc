
export const tokens = {

    color: {
        primary: {
            primary: 'var(--md-sys-color-primary)',
            onPrimary: 'var(--md-sys-color-on-primary)',
            primaryContainer: 'var(--md-sys-color-primary-container)',
            onPrimaryContainer: 'var(--md-sys-color-on-primary-container)',
            inversePrimary: 'var(--md-sys-color-inverse-primary)',
        },
        secondary: {
            secondary: 'var(--md-sys-color-secondary)',
            onSecondary: 'var(--md-sys-color-on-secondary)',
            secondaryContainer: 'var(--md-sys-color-secondary-container)',
            onSecondaryContainer: 'var(--md-sys-color-on-secondary-container)',
        },
        tertiary: {
            tertiary: 'var(--md-sys-color-tertiary)',
            onTertiary: 'var(--md-sys-color-on-tertiary)',
            tertiaryContainer: 'var(--md-sys-color-tertiary-container)',
            onTertiaryContainer: 'var(--md-sys-color-on-tertiary-container)',
        },
        error: {
            error: 'var(--md-sys-color-error)',
            onError: 'var(--md-sys-color-on-error)',
            errorContainer: 'var(--md-sys-color-error-container)',
            onErrorContainer: 'var(--md-sys-color-on-error-container)',
        },
        background: {
            background: 'var(--md-sys-color-background)',
            onBackground: 'var(--md-sys-color-on-background)',
        },
        surface: {
            surface: 'var(--md-sys-color-surface)',
            onSurface: 'var(--md-sys-color-on-surface)',
            surfaceVariant: 'var(--md-sys-color-surface-variant)',
            onSurfaceVariant: 'var(--md-sys-color-on-surface-variant)',
            surfaceContainerLowest: 'var(--md-sys-color-surface-container-lowest)',
            surfaceContainerLow: 'var(--md-sys-color-surface-container-low)',
            surfaceContainer: 'var(--md-sys-color-surface-container)',
            surfaceContainerHigh: 'var(--md-sys-color-surface-container-high)',
            surfaceContainerHighest: 'var(--md-sys-color-surface-container-highest)',
            inverseSurface: 'var(--md-sys-color-inverse-surface)',
            inverseOnSurface: 'var(--md-sys-color-inverse-on-surface)',
        },
        outline: {
            outline: 'var(--md-sys-color-outline)',
            outlineVariant: 'var(--md-sys-color-outline-variant)',
        },
        shadow: {
            shadow: 'var(--md-sys-color-shadow)',
        },
        scrim: {
            scrim: 'var(--md-sys-color-scrim)',
        }
    },

    shape: {
        corner: {
            full: '9999px',
            extraLarge: '28px',
            large: '16px',
            medium: '12px',
            small: '8px',
            extraSmall: '4px',
            none: '0'
        },
    },

    elevation: {
        level5: '5',
        level4: '4',
        level3: '3',
        level2: '2',
        level1: '1',
        level0: '0',
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

    // WILL DEPRECATED
    /**
     * Spacing V -
     */
    spacingVerticalNone: '0',
    spacingVerticalXXS: '2px',
    spacingVerticalXS: '4px',
    spacingVerticalSNudge: '6px',
    spacingVerticalS: '8px',
    spacingVerticalMNudge: '10px',
    spacingVerticalM: '12px',
    spacingVerticalL: '16px',
    spacingVerticalXL: '20px',
    spacingVerticalXXL: '24px',
    spacingVerticalXXXL: '32px',

    /**
     * Spacing H |
     */
    spacingHorizontalNone: '0',
    spacingHorizontalXXS: '2px',
    spacingHorizontalXS: '4px',
    spacingHorizontalSNudge: '6px',
    spacingHorizontalS: '8px',
    spacingHorizontalMNudge: '10px',
    spacingHorizontalM: '12px',
    spacingHorizontalL: '16px',
    spacingHorizontalXL: '20px',
    spacingHorizontalXXL: '24px',
    spacingHorizontalXXXL: '32px',

} as const

export function makeComponentExternTokens<T extends Record<string, string>>(componentTokens: Record<string, string>) {
    const e = new Object() as Record<string, string>
    for (const i in componentTokens) {
        e[i] = componentTokens[i] + '-extern'
    }

    return e as Readonly<T>
}
export function makeComponentTokens<T extends Readonly<string[]>>(componentName: string, componentTokenNames: T) {
    const e = new Object() as Record<string, string>

    const componentNameKebabCase = toKebabCase(componentName)
    for (const i of componentTokenNames) {
        e[i] = `--mamv-${componentNameKebabCase}-${i}`
    }

    return e as Readonly<{
        [V in typeof componentTokenNames[number]]: string
    }>
}

function toKebabCase(s: string) {
    if (s.includes('-') && s == s.toLowerCase()) return s
    const arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'A' && s[i] <= 'Z') {
            arr.push('-')
            arr.push(s[i].toLowerCase())
        } else {
            arr.push(s[i])
        }
    }
    return arr.join('')
}

/**
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
