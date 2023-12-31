import type { PropType } from 'vue'

export const props = {

    /**
     * @default middle-inset
     */
    variant: {
        default: 'middle-inset',
        type: String as PropType<'inset-left' | 'middle-inset' | 'inset-right' | 'no-inset'>
    },

    /**
     * @default horizontal
     */
    direction: {
        default: 'horizontal',
        type: String as PropType<'horizontal' | 'vertical'>,
    },

}
