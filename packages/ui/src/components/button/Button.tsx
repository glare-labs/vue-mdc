import { defineComponent, type PropType, type SlotsType } from 'vue'
import { Ripple } from '../ripple/Ripple'
import { Elevation } from '../elevation/Elevation'
import css from './button.module.css'
import cssBase from './base.module.css'

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

const props = {
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
    iconPosition: {
        type: String as PropType<TButtonIconPosition>,
        default: EButtonIconPosition.Left,
    }
}
const slots = {} as SlotsType<{
    default: void,
    icon: void
}>

export const Button = defineComponent({
    name: 'GlareUi-Button',
    props,
    slots,
    render() {
        const renderIcon = this.$slots.icon && (
            <span class={cssBase.icon}>
                {this.$slots.icon()}
            </span>
        )
        const renderLabel = this.$slots.default && (
            <span class={[cssBase.label]}>
                {this.$slots.default()}
            </span>
        )
        const renderButton = (
            <button
                class={[cssBase.button, this.iconPosition === EButtonIconPosition.Right && cssBase.revert]}
                type={this.type}
                disabled={this.disabled}
                aria-disabled={this.disabled}
            >
                {renderIcon}
                {renderLabel}
            </button>
        )

        return (
            <div
                class={[css[this.appearance], cssBase.container, this.disabled && cssBase.disabled]}
                aria-disabled={this.disabled}
                role='button'

            >
                <Ripple></Ripple>
                <Elevation></Elevation>

                <div aria-hidden="true" class={[cssBase.background]}></div>
                <div aria-hidden="true" class={[cssBase.outline]}></div>

                {renderButton}
            </div>
        )
    }
})
