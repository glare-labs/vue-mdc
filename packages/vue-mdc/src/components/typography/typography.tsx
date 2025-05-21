import { type PropType, type SlotsType, defineComponent } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import css from './styles/typography.module.scss'
import { ETypographyVariant, type TTypographyVariant } from './typography-variant'

class TypographyComponent {
    private readonly name = `${componentNamePrefix}-typography`

    private readonly props = {
        variant: {
            default: ETypographyVariant.BodyMedium,
            type: String as PropType<TTypographyVariant>,
        },
    }
    private readonly slots = {} as SlotsType<{
        default?: void
    }>
    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        render() {
            return (
                <span data-component="typography" class={[css.typography, css[this.variant]]}>
                    {this.$slots.default && this.$slots.default()}
                </span>
            )
        },
        inheritAttrs: true,
    })
}

export const Typography = new TypographyComponent().component
