import { PropType } from 'vue'

export type TIconButtonAppearance = 'filled' | 'outlined' | 'filled-tonal' | 'standard'
export type TIconButtonType = 'button' | 'submit' | 'reset'

export const enum EIconButtonAppearance {
    Filled = 'filled',
    Outlined = 'outlined',
    FilledTonal = 'filled-tonal',
    Standard = 'standard',
}
export const enum EIconButtonType {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
}

export const propsShared = {
    appearance: {
        type: String as PropType<TIconButtonAppearance>,
        default: EIconButtonAppearance.Standard,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String as PropType<TIconButtonType>,
        default: EIconButtonType.Button,
    },
}
