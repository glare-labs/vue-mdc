import { PropType } from 'vue'

export const sharedProps = {

    ariaLabel: {
        default: null,
        type: String as PropType<string>
    },

    ariaLabelledby: {
        default: null,
        type: String as PropType<string>
    },



} as const

export const sharedEmits = [
    // 'click'
]