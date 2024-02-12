
export type TCardVariant = 'filled' | 'filled-tonal' | 'outlined' | 'elevated'

export interface ICard {

    disabledElevation: boolean
    disabledRipple: boolean

    disabled: boolean

    variant: TCardVariant
}
