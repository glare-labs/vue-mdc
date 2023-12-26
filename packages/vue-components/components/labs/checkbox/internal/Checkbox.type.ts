import { sharedProps } from '../../../../utils/shared.type'
import { PropType } from 'vue'

export const props = {

    ...sharedProps,

    /**
     * @default false
     */
    defaultChecked: {
        default: false,
        type: Boolean as PropType<boolean>,
    },

    /**
     * @default rounded
     */
    shape: {
        default: 'rounded',
        type: String as PropType<'rounded' | 'circular' | 'square'>
    },

    /**
     * @default 'medium
     */
    size: {
        default: 'medium',
        type: String as PropType<'small' | 'medium' | 'large'>
    },

    /**
     * @default false
     */
    disabled: {
        default: false,
        type: Boolean as PropType<boolean>
    },
}
