import { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default surface
     */
    variant: {
        default: 'surface',
        type: String as PropType<'primary' | 'secondary' | 'tertiary' | 'surface'>
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
    disabled: {
        default: false,
        type: Boolean as PropType<boolean>
    },

    /**
     * @default false
     */
    lowered: {
        default: false,
        type: Boolean as PropType<boolean>
    },
        
}

export const slots = Object as SlotsType<{
    default: void
    icon?: void
}>