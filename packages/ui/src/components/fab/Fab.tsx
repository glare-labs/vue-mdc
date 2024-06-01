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
        disableElevation: {
            type: Boolean as PropType<boolean>,
            default: false,
        }
    },
    slots: {} as SlotsType<{
        default?: void
    }>,
    setup(props, { slots }) {
        const renderIcon = (
            <span class={css.icon}>
                {slots.default && slots.default()}
            </span>
        )
        const renderLabel = (
            <span class={css.label}>
                {props.label}
            </span>
        )


        return () => (
            <button class={[css.fab, props.label !== '' && css.extended, css[props.size], css[props.variant], props.disableElevation && css['disable-elevation']]}>
                <Ripple></Ripple>
                <Elevation></Elevation>

                <div class={css['touch-target']}></div>

                {renderIcon}
                {renderLabel}
            </button>
        )
    },
})
