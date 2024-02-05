import type { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default 'medium'
     */
    size: {
        default: 'medium',
        type: String as PropType<'small' | 'medium' | 'large'>,
    },

    /**
     * @default 'outlined'
     */
    variant: {
        default: 'outlined',
        type: String as PropType<'outlined' | 'rounded' | 'sharp'>
    },

}

export const slots = Object as SlotsType<{
    default?: void
}>
