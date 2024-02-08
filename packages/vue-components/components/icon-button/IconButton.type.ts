
export type IconButtonAppearanceType = 'filled' | 'outlined' | 'filled-tonal' | 'standard'
export type IconButtonType = 'button' | 'submit' | 'reset'

export interface IIconButton {

    /**
     * @default 'standard'
     */
    appearance?: IconButtonAppearanceType

    /**
     * @default 'button
     */
    type?: IconButtonType

    /**
     * @default false
     */
    disabled?: boolean

    /**
     * @default false
     */
    toggle?: boolean

    /**
     * @default false
     */
    defaultSelected?: boolean

    /**
     * @default [defaultSelected]
     * @event update:modelValue
     */
    modelValue?: boolean
}
