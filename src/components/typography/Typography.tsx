import { type PropType, defineComponent } from 'vue'
import css from './Typography.module.css'

export type TTypographyVariant =
    'label-small' | 'label-medium' | 'label-large' |
    'body-small' | 'body-medium' | 'body-large' |
    'title-small' | 'title-medium' | 'title-large' |
    'headline-small' | 'headline-medium' | 'headline-large' |
    'display-small' | 'display-medium' | 'display-large'

export const Typography = defineComponent({
    name: 'GlareUi-Typography',
    props: {
        variant: {
            type: String as PropType<TTypographyVariant>,
            default: 'body-medium'
        },
    },
    render() {
        return (
            <span class={[css.surface, css[this.variant]]}>
                {this.$slots.default && this.$slots.default()}
            </span>
        )
    }
})
