// public glare-labs/material-tokens-generator
export {
    EMaterialContrastLevel,
    EMaterialVariant,
    type TMaterialColors,
    type TMaterialContrastLevel,
    type TMaterialVariant
} from '@glare-labs/material-tokens-generator'

export enum EMotionDuration {
    Short1 = '50ms',
    Short2 = '100ms',
    Short3 = '150ms',
    Short4 = '200ms',
    Medium1 = '250ms',
    Medium2 = '300ms',
    Medium3 = '350ms',
    Medium4 = '400ms',
    Long1 = '450ms',
    Long2 = '500ms',
    Long3 = '550ms',
    Long4 = '600ms',
    ExtraLong1 = '700ms',
    ExtraLong2 = '800ms',
    ExtraLong3 = '900ms',
    ExtraLong4 = '1000ms',
}

export enum EMotionEasing {
    Standard = 'cubic-bezier(0.2, 0, 0, 1)',
    StandardAccelerate = 'cubic-bezier(0.3, 0, 1, 1)',
    StandardDecelerate = 'cubic-bezier(0, 0, 0, 1)',
    Emphasized = 'cubic-bezier(0.2, 0, 0, 1)',
    EmphasizedAccelerate = 'cubic-bezier(0.3, 0, 0.8, 0.15)',
    EmphasizedDecelerate = 'cubic-bezier(0.05, 0.7, 0.1, 1)',
    Legacy = 'cubic-bezier(0.4, 0, 0.2, 1)',
    LegacyAccelerate = 'cubic-bezier(0.4, 0, 1, 1)',
    LegacyDecelerate = 'cubic-bezier(0, 0, 0.2, 1)',
    Linear = 'cubic-bezier(0, 0, 1, 1)',
}

export enum EShape {
    Full = '9999px',
    ExtraLarge = '28px',
    Large = '16px',
    Medium = '12px',
    Small = '8px',
    ExtraSmall = '4px',
    None = '0px',
}
