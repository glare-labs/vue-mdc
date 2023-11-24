import { PropType, SlotsType } from 'vue'

export const props = {
    size: {
        default: 'medium',
        type: String as PropType<'small' | 'medium' | 'large'>,
    },
    variant: {
        default: 'outlined',
        type: String as PropType<'outlined' | 'rounded' | 'sharp'>
    },
}

export const slots = Object as SlotsType<{
    default: void,
}>