import { defineComponent } from 'vue'
import { props, slots } from './Typography.type'
import { css } from 'aphrodite/no-important'
import { typographyStyles } from './Typography.styles'

export const renderTypography = defineComponent({
    name: 'MAMVTypography',
    props,
    slots,
    computed: {
        classes() {
            return css(
                typographyStyles[this.variant],
                typographyStyles.root,
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
