import { defineComponent, type PropType, type SlotsType } from 'vue'
import css from './Fab.module.css'
import { Ripple } from '../ripple/Ripple'
import { Elevation } from '../elevation/Elevation'

export type TFabSize = 'small' | 'medium' | 'large'
export type TFabVariant = 'primary' | 'secondary' | 'tertiary'

export const enum EFabSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}
export const enum EFabVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',

}

export const Fab = defineComponent({
    props: {
        size: {
            type: String as PropType<TFabSize>,
            default: EFabSize.Medium,
        },
        label: {
            type: String,
            default: '',
        },
        variant: {
            type: String as PropType<TFabVariant>,
            default: EFabVariant.Secondary,
        },
    },
    slots: {} as SlotsType<{
        default: void,
        icon: void
    }>,
    setup(props, { slots }) {


        return () => (
            <button class={[css.fab, props.label !== '' && css.extended, css[props.size], css[props.variant]]}>
                <Ripple></Ripple>
                <Elevation></Elevation>

                <div class={css['touch-target']}></div>
                <span class={css.icon}>
                    {slots.icon && slots.icon()}
                </span>

                <span class={css.label}>
                    {slots.default && slots.default()}
                </span>
            </button>
        )
    },
})
