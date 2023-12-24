import { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default value
     */
    defaultActiveIndex: {
        default: 0,
        type: Number as PropType<number>
    },

}

export const slots = Object as SlotsType<{
    default: ({
        activeIndex: number
        setActiveIndex: (e: number) => void
    })
}>