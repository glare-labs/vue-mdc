import type { PropType, SlotsType } from 'vue'

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

}

export const slots = Object as SlotsType<{
    default?: void
    icon?: void
}>
