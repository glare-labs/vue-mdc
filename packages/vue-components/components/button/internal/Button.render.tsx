import { defineComponent } from 'vue'
import { emits, props, slots } from './Button.type'
import { sharedButtonStyles } from './Button.styles'
import { css } from 'aphrodite/no-important'
import { Elevation } from '../../elevation'
import { Ripple } from '../../ripple'

export const renderButton = defineComponent({
    name: 'MAMVButton',
    props,
    slots,
    emits,
    computed: {
        classes() {
            return css(
                sharedButtonStyles.root,
                sharedButtonStyles[this.shape],
                sharedButtonStyles[this.size],
                sharedButtonStyles[this.appearance],
                this.$slots.icon !== undefined ? sharedButtonStyles.paddingWithIcon : sharedButtonStyles.padding,
                this.iconOnly && sharedButtonStyles['icon-only'],
                this.disabled && sharedButtonStyles.disabled,
            )

        },
    },
    render() {
        return (
            <button
                role='button'
                type={this.type}
                aria-label={this.ariaLabel}
                aria-labelledby={this.ariaLabelledby}
                aria-disabled={this.disabled}
                disabled={this.disabled}
                class={this.classes}
            >
                <Ripple disabled={this.disabled}></Ripple>
                <Elevation></Elevation>
                {(this.iconPosition === 'left' && this.$slots.icon) && this.$slots.icon()}
                {!this.iconOnly && this.$slots.default && this.$slots.default()}
                {(this.iconPosition === 'right' && this.$slots.icon) && this.$slots.icon()}
            </button>
        )
    },
    components: {
        Elevation,
        Ripple
    }
})
