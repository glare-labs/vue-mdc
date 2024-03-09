
export enum EElevationLevel {
    Level5 = 5,
    Level4 = 4,
    Level3 = 3,
    Level2 = 2,
    Level1 = 1,
    Level0 = 0,
}

export enum EShape {
    full = '9999px',
    extraLarge = '28px',
    large = '16px',
    medium = '12px',
    small = '8px',
    extraSmall = '4px',
    none = '0px',
}

export enum EMotionDuration {
    short1 = '50ms',
    short2 = '100ms',
    short3 = '150ms',
    short4 = '200ms',
    medium1 = '250ms',
    medium2 = '300ms',
    medium3 = '350ms',
    medium4 = '400ms',
    long1 = '450ms',
    long2 = '500ms',
    long3 = '550ms',
    long4 = '600ms',
    extraLong1 = '700ms',
    extraLong2 = '800ms',
    extraLong3 = '900ms',
    extraLong4 = '1000ms',
}

export enum EMotionEasing {
    standard = 'cubic-bezier(0.2, 0, 0, 1)',
    standardAccelerate = 'cubic-bezier(0.3, 0, 1, 1)',
    standardDecelerate = 'cubic-bezier(0, 0, 0, 1)',
    emphasized = 'cubic-beziercubic-bezier(0.2, 0, 0, 1)',
    emphasizedAccelerate = 'cubic-bezier(0.3, 0, 0.8, 0.15)',
    emphasizedDecelerate = 'cubic-bezier(0.05, 0.7, 0.1, 1)',
    legacy = 'cubic-bezier(0.4, 0, 0.2, 1)',
    legacyAccelerate = 'cubic-bezier(0.4, 0, 1, 1)',
    legacyDecelerate = 'cubic-bezier(0, 0, 0.2, 1)',
    linear = 'cubic-bezier(0, 0, 1, 1)',
}

export const Tokens = {
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
