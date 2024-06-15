import { defineComponent, type PropType, type SlotsType } from 'vue'
import { Ripple } from '../ripple/Ripple'
import { Elevation } from '../elevation/Elevation'
import css from './styles/button-styles.module.scss'
import { EButtonType, type TButtonType } from './ButtonType'
import { EButtonAppearance, type TButtonAppearance } from './ButtonAppearance'
import { EButtonShape, type TButtonShape } from './ButtonShape'

class ButtonComponent {
    private props = {
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
        }
    }
    private slots = {} as SlotsType<{
        default: void
        'leading-icon': void
        'trailing-icon': void
    }>

    public component = defineComponent({
        name: 'GlareUi-Button',
        props: this.props,
        slots: this.slots,
        render() {
            const needElevation = EButtonAppearance.Elevated  === this.appearance || EButtonAppearance.Filled === this.appearance || EButtonAppearance.FilledTonal === this.appearance
            const needOutline = this.appearance === EButtonAppearance.Outlined
            const iconState = this.$slots['leading-icon'] ? css.left : this.$slots['trailing-icon'] ? css.right : null

            const renderButton = (
                <button
                    class={[css.button]}
                    type={this.type}
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                >
                    <span class={css.touch}></span>
                    {this.$slots['leading-icon'] && this.$slots['leading-icon']()}
                    <span class={[css.label]}>
                        {this.$slots.default()}
                    </span>
                    {this.$slots['trailing-icon'] && this.$slots['trailing-icon']()}
                </button>
            )
    
            return (
                <button
                    data-component="button"
                    class={[css[this.appearance], iconState]}
                    aria-disabled={this.disabled}
                    role='button'
                    disabled={this.disabled}
                >
                    <Ripple></Ripple>

                    { needElevation && <Elevation></Elevation>}
                    { needOutline && <div aria-hidden="true" class={[css.outline]}></div>}
    
                    <div aria-hidden="true" class={[css.background]}></div>
    
                    {renderButton}
                </button>
            )
        }
    })
    
}

export const Button = new ButtonComponent().component
