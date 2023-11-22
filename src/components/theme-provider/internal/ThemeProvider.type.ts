import { PropType, SlotsType } from 'vue'

export const props = {
    /**
     * @default false
     */
    dark: {
        default: false,
        type: Boolean as PropType<boolean>
    },
    /**
     * @default '#2A6B3C'
     */
    sourceColor: {
        default: '#2A6B3C',
        type: String as PropType<string>
    }
}

export const slots = Object as SlotsType<{
    default: void
}>