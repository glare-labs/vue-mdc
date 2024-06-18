import { type PropType, defineComponent } from 'vue'
import css from './styles/typography.module.scss'
import { ETypographyVariant, type TTypographyVariant } from './TypographyVariant'

export const Typography = defineComponent({
    name: 'GlareUi-Typography',
    props: {
        variant: {
            type: String as PropType<TTypographyVariant>,
            default: ETypographyVariant.BodyMedium,
        },
    },
    render() {
        return (
            <span class={[css.typography, css[this.variant]]}>
                {this.$slots.default && this.$slots.default()}
            </span>
        )
    }
})
