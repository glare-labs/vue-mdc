import type { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default false
     */
    disabled: {
        default: false,
        type: Boolean as PropType<boolean>
    },

    /**
     * @default ''
     */
    label: {
        default: '',
        type: String as PropType<string>
    },

    /**
     * @default false
     */
    iconOnly: {
        default: false,
        type: Boolean as PropType<boolean>
    },

}

export const slots = Object as SlotsType<{
    default?: void
}>
