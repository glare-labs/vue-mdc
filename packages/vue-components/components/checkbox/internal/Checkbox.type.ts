import type { PropType } from 'vue'

export const props = {

    /**
     * @default false
     */
    modelValue: {
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

    /**
     * @default false
     */
    required: {
        default: false,
        type: Boolean as PropType<boolean>
    }
}

export const emits = [
    'update:modelValue'
]
