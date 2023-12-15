import { defineComponent } from 'vue'
import { props } from './Divider.type'
import { css } from 'aphrodite/no-important'
import { sharedDividerStyles } from './Divider.styles'

export const renderDivider = defineComponent({
    name: 'MAMVDivider',
    props,
    computed: {
        classes() {
            return css(
                sharedDividerStyles.root,
                sharedDividerStyles[this.variant],
                sharedDividerStyles[this.direction],
            )
        },
    },
    render() {
        return (
            <span
                class={this.classes}
                aria-hidden='true'
            ></span>
        )
    },
})
