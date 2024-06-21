import { defineComponent, type PropType } from 'vue'
import css from './styles/divider.module.scss'
import { EDividerVariant, type TDividerVariant } from './DividerVariant'

class DividerComponent {
    private props = {
        variant: {
            type: String as PropType<TDividerVariant>,
            default: EDividerVariant.MiddleInset,
        },
    }

    public component = defineComponent({
        name: 'GlareUi-Divider',
        props: this.props,
        render() {
            const isNoInsert = this.variant === EDividerVariant.NoInset
            const isMiddle = this.variant === EDividerVariant.MiddleInset

            const variant = isNoInsert ? [] : isMiddle ? css.inset : css[this.variant]
            return (
                <span
                    data-component="divider"
                    aria-hidden="true"
                    class={[css.divider, variant]}
                ></span>
            )
        }
    })
}

export const Divider = new DividerComponent().component
