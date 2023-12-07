import { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default middle-inset
     */
    mode: {
        default: 'middle-inset',
        type: String as PropType<'inset-left' | 'middle-inset' | 'inset-right' | 'no-inset'>
    }

}

export const slots = Object as SlotsType<{
}>