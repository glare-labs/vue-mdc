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
