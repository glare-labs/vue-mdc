import { defineComponent, type PropType, type SlotsType } from 'vue'
import css from './Icon.module.css'

export type TIconSize = 'small' | 'medium' | 'large'
export type TIconVariant = 'outlined' | 'rounded' | 'sharp'

export const enum EIconSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}
export const enum EIconVariant {
    Outlined = 'outlined',
    Rounded = 'rounded',
    Sharp = 'sharp',
}

export const Icon = defineComponent({
    name: 'GlareUi-Icon',
    props: {
        size: {
            type: String as PropType<TIconSize>,
            default: EIconSize.Medium,
        },
        variant: {
            type: String as PropType<TIconVariant>,
            default: EIconVariant.Rounded,
        },
    },
    slots: {} as SlotsType<{
        default: void
    }>,
    setup(props, { slots }) {

        return () => (
            <span class={[css.surface, css[props.size], css[props.variant]]}>
                {slots.default && slots.default()}
            </span>
        )
    },
})
