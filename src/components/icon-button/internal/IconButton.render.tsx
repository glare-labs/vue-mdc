import { defineComponent } from 'vue'
import { props, slots } from './IconButton.type'
import { css } from 'aphrodite/no-important'
import { sharedIconButtonStyles } from './IconButton.styles'
import { Ripple } from '@/components/ripple'

export const renderIconButton = defineComponent({
    name: 'MAMVIconButton',
    props,
    slots,
    data: () => ({
        selected: false,
    }),
    computed: {
        classes() {
            return css(
                sharedIconButtonStyles.root,
                sharedIconButtonStyles[this.size],
                sharedIconButtonStyles[this.appearance],
                sharedIconButtonStyles[this.shape],
                this.toggle ? this.selected ? sharedIconButtonStyles['toggle-selected'] : sharedIconButtonStyles['toggle-unselect'] : sharedIconButtonStyles['no-toggle'],
                this.disabled && sharedIconButtonStyles.disabled,
            )
        },
    },
    render() {
        return (
            <button
                role='button'
                disabled={this.disabled}
                aria-disabled={this.disabled}
                aria-label={this.ariaLabel}
                aria-aria-labelledby={this.ariaLabelledby}
                class={this.classes}
            >
                <Ripple disabled={this.disabled}></Ripple>
                {
                    this.$slots.default && this.$slots.default()
                }

            </button>
        )
    },
    created() {
        this.selected = this.defaultSelected
    },
    components: {
        Ripple,
    }
})