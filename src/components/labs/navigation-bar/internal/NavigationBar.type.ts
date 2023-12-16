import { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default value
     */
    defaultActiveIndex: {
        default: 0,
        type: Number as PropType<number>
    },

    tabs: {
        default: [],
        type: Array as PropType<string[]>
    }

}

export const slots = Object as SlotsType<{
    default?: void
}>