import { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default filled
     */
    appearance: {
        default: 'filled',
        type: String as PropType<'filled' | 'outlined' | 'elevated' | 'filled-tonal' | 'text'>
    },

    /**
     * @default false
     */
    disabled: {
        default: false,
        type: Boolean as PropType<boolean>
    },

    /**
     * @default circular
     */
    shape: {
        default: 'circular',
        type: String as PropType<'rounded' | 'circular' | 'square'>
    },

    /**
     * @default 'medium
     */
    size: {
        default: 'medium',
        type: String as PropType<'small' | 'medium' | 'large'>
    },

    /**
     * @default left
     */
    iconPosition: {
        default: 'left',
        type: String as PropType<'left' | 'right'>
    },

    /**
     * @default false
     */
    iconOnly: {
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

export const emits = [
    'mousedown', 
    'mouseenter', 
    'mouseleave', 
    'mousemove', 
    'mouseout', 
    'mouseover', 
    'mouseup', 
    'click', 
    'auxclick', 
    'dblclick'
]

export const slots = Object as SlotsType<{
    default?: void
    icon?: void
}>
