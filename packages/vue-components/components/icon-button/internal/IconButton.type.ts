import { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default filled
     */
    appearance: {
        default: 'filled',
        type: String as PropType<'filled' | 'outlined' | 'filled-tonal' | 'standard'>
    },

    /**
     * @default medium
     */
    size: {
        default: 'medium',
        type: String as PropType<'small' | 'medium' | 'large'>
    },

    /**
     * @default circular
     */
    shape: {
        default: 'circular',
        type: String as PropType<'rounded' | 'circular' | 'square'>
    },

    /**
     * 组件的默认的选择状态
     * @default false
     */
    defaultSelected: {
        default: false,
        type: Boolean as PropType<boolean>
    },

    /**
     * @default false
     */
    disabled: {
        default: false,
        type: Boolean as PropType<boolean>
    },

    /**
     * @default false
     */
    toggle: {
        default: false,
        type: Boolean as PropType<boolean>
    },

    /**
     * @default 'button'
     */
    type: {
        default: 'button',
        type: String as PropType<'button' | 'submit' | 'reset'>
    },

}

export const slots = Object as SlotsType<{
    default: {
        selected: boolean
    }
}>
