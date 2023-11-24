import { PropType, SlotsType } from 'vue'

export const props = {
    /**
     * @default primary
     */
    variant: {
        default: 'primary',
        type: String as PropType<'primary' | 'secondary' | 'tertiary' | 'error'>
    },

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
     * @default rounded
     */
    shape: {
        default: 'rounded',
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
    default: void
    icon: void
}>
