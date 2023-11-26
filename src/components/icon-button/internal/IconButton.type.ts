import { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default surface
     */
    variant: {
        default: 'primary',
        type: String as PropType<'surface' | 'primary' | 'secondary' | 'tertiary' | 'error'>
    },

    /**
     * @default medium
     */
    size: {
        default: 'medium',
        type: String as PropType<'small' | 'medium' | 'large'>
    },

    /**
     * @default false
     */
    selected: {
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
    
}

export const slots = Object as SlotsType<{
    default: void
}>

export const data = () => ({
    isSelected: false,
})
