import { defineComponent } from 'vue'
import { props, slots } from './Typography.type'
import { css } from 'aphrodite'
import { typographyStyles } from './Typography.styles'

export const renderTypography = defineComponent({
    name: 'MAMVTypography',
    props,
    slots,
    computed: {
        classes() {
            return css(
                typographyStyles.root,
                typographyStyles[this.variant],
            )
        },
    },
    render() {
        return (
            <span class={this.classes}>
                {
                    this.$slots.default && this.$slots.default()
                }
            </span>
        )
    },
})
