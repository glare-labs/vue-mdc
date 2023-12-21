import { sharedProps } from '@/utils/shared.type'
import { PropType, SlotsType } from 'vue'

export const props = {

    ...sharedProps,

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

    /**
     * 指定一个表单的选择器，用于触发reset或submit
     * @default undefined
     */
    form: {
        default: undefined,
        type: String as PropType<string | undefined>
    }
}

export const slots = Object as SlotsType<{
    default?: {
        selected: boolean
    }
}>
