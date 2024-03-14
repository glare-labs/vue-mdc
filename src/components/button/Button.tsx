import { defineComponent, type PropType, type SlotsType } from 'vue'
import css from './Button.module.css'
import { Ripple } from '../ripple/Ripple'
import { Elevation } from '../elevation/Elevation'

export type TButtonAppearance = 'filled' | 'outlined' | 'elevated' | 'filled-tonal' | 'text'
export type TButtonType = 'button' | 'submit' | 'reset'
export type TButtonIconPosition = 'left' | 'right'
export type TButtonShape = 'rounded' | 'circular' | 'square'

export const enum EButtonAppearance {
    Filled = 'filled',
    Outlined = 'outlined',
    Elevated = 'elevated',
    FilledTonal = 'filled-tonal',
    Text = 'text',
}
export const enum EButtonType {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
}
export const enum EButtonIconPosition {
    Left = 'left',
    Right = 'right',
}
export const enum EButtonShape {
    Rounded = 'rounded',
    Circular = 'circular',
    Square = 'square',
}

export const Button = defineComponent({
    name: 'GlareUi-Button',
    props: {
        appearance: {
            type: String as PropType<TButtonAppearance>,
            default: EButtonAppearance.Filled,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String as PropType<TButtonType>,
            default: EButtonType.Button,
        },
        shape: {
            type: String as PropType<TButtonShape>,
            default: EButtonShape.Circular,
        },
    },
    slots: {} as SlotsType<{
        default: void,
        icon: void
    }>,
    render() {
        return (
            <div
                class={[css.surface, css[this.appearance], this.disabled && css.disabled]}
                aria-disabled={this.disabled}
            >
                <Ripple></Ripple>
                <Elevation></Elevation>

                <div class={css.background}></div>
                <div class={css.outline}></div>

                <button
                    class={css.button}
                    type={this.type}
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                >
                    {this.$slots.icon && this.$slots.icon}
                    <span class={css.label}>
                        {this.$slots.default && this.$slots.default()}
                    </span>
                </button>
            </div>
        )
    }
})
