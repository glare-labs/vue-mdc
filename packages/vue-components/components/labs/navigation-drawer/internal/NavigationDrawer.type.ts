import { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default false
     */
    defaultOpen: {
        default: false,
        type: Boolean as PropType<boolean>
    },

    /**
     * @default false
     */
    model: {
        default: false,
        type: Boolean as PropType<boolean>
    },

    /**
     * @default false
     */
    contained: {
        default: false,
        type: Boolean as PropType<boolean>
    }

}

export const slots = Object as SlotsType<{
    default?: void
}>
