
export enum ESplitButtonAppearance {
    Filled = 'filled',
    FilledTonal = 'filled-tonal',
    Outlined = 'outlined',
}

export type TSplitButtonAppearance = (typeof ESplitButtonAppearance)[keyof typeof ESplitButtonAppearance]
