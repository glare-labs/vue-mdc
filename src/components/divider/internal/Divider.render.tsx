import { defineComponent } from 'vue'
import { props, slots } from './Divider.type'
import { css } from 'aphrodite'
import { dividerStyles } from './Divider.styles'

export const renderDivider = defineComponent({
    name: 'MAMVDivider',
    props,
    slots,
    computed: {
        classes() {
            return css(
                dividerStyles.root,
                dividerStyles[this.mode],
            )
        },
    },
    render() {
        return (
            <span class={this.classes}>

            </span>
        )
    },
})
