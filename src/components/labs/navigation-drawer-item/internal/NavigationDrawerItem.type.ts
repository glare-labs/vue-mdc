import { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default value
     */
    defaultSelected: {
        default: false,
        type: Boolean as PropType<boolean>,
    },

}

export const slots = Object as SlotsType<{
    label?: void
    default?: void
    icon?: void
}>
