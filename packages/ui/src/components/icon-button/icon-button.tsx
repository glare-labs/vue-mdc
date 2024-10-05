import { defineComponent, type PropType, type SlotsType } from 'vue'
import { Ripple } from '../ripple/ripple'
import { EIconButtonAppearance, type TIconButtonAppearance } from './icon-button-appearance'
import { EIconButtonType, type TIconButtonType } from './icon-button-type'
import css from './styles/icon-button.module.scss'

class IconButtonComponent {
    private name: string = 'GlareUi-IconButton'
    private props = {
        appearance: {
            type: String as PropType<TIconButtonAppearance>,
            default: EIconButtonAppearance.Standard,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String as PropType<TIconButtonType>,
            default: EIconButtonType.Button,
        },
    }
    private slots = {} as SlotsType<{
        default: void
    }>

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        render() {
            const renderIcon = (
                <span class={css.icon}>
                    {this.$slots.default && this.$slots.default()}
                </span>
            )

            return (
                <button
                    class={[
                        css[this.appearance],
                        this.disabled && css.disabled
                    ]}
                    data-component="icon-button"
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                    type={this.type}
                >
                    <Ripple></Ripple>

                    <div aria-hidden="true" class={css.touch}></div>
                    <div aria-hidden="true" class={css.background}></div>
                    <div aria-hidden="true" class={css.outline}></div>

                    {renderIcon}
                </button>
            )
        }
    })
}

export const IconButton = new IconButtonComponent().component
