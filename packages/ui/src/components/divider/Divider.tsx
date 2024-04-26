import { defineComponent, type PropType } from 'vue'
import css from './Divider.module.css'

export type TDividerVariant = 'inset-left' | 'middle-inset' | 'inset-right' | 'no-inset'
export type TDividerDirection = 'horizontal' | 'vertical'

export const enum EDividerVariant {
    InsetLeft = 'inset-left',
    MiddleInset = 'middle-inset',
    InsetRight = 'inset-right',
    NoInset = 'no-inset',
}
export const enum EDividerDirection {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}

export const Divider = defineComponent({
    name: 'GlareUi-Divider',
    props: {
        direction: {
            type: String as PropType<TDividerDirection>,
            default: EDividerDirection.Horizontal,
        },
        variant: {
            type: String as PropType<TDividerVariant>,
            default: EDividerVariant.MiddleInset,
        },
    },
    setup(props, _) {
        return () => (
            <span class={[css.surface, css[props.direction], css[props.variant]]}></span>
        )
    },
})
