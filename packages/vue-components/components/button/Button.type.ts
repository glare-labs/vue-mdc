
export type ButtonVariantType = 'filled' | 'outlined' | 'elevated' | 'filled-tonal' | 'text'
export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonIconPosition = 'left' | 'right'
export type ButtonShapeType = 'rounded' | 'circular' | 'square'

export interface IButton {

    /**
     * @default 'filled'
     */
    appearance?: ButtonVariantType

    /**
     * @default false
     */
    disabled?: boolean

    /**
     * @default 'button
     */
    type?: ButtonType

    shape?: ButtonShapeType

}
