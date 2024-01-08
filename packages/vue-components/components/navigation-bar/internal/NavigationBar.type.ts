import type { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default value
     */
    defaultActiveIndex: {
        default: null,
        type: Number as PropType<number | null>
    },

    /**
     * @default false
     */
    modelValue: {
        default: null,
        type: Number as PropType<number | null>,
    },

}

export const emits = [
    'update:modelValue'
]

export const slots = Object as SlotsType<{
    default?: ({
        activeIndex: number | null
        setActiveIndex: (e: number) => void
        tabSize: number
    })
}>
