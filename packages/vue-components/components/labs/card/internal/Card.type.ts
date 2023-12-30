import { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default filled
     */
    appearance: {
        default: 'filled',
        type: String as PropType<'filled' | 'outlined' | 'elevated' | 'filled-tonal' | 'text'>
    },

}

export const slots = Object as SlotsType<{
    default?: void
    headline?: void
    'supprting-text'?: void,
    footer?: void

}>
