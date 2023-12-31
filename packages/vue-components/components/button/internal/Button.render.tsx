import { defineComponent } from 'vue'
import { props, slots } from './Button.type'
import { sharedButtonStyles } from './Button.styles'
import { Ripple } from '../../ripple'
import { Elevation } from '../../elevation'
import { css } from 'aphrodite/no-important'


declare module 'vue' {
    export interface GlobalComponents {
        'Am-Button': typeof renderButton,
    }
}

/**
 * @alias am-button
 */
export const renderButton = defineComponent({
    name: 'AmButton',
    props,
    slots,
    computed: {
        classes() {
            return ({
                surface: css(
                    sharedButtonStyles.surface,
                    sharedButtonStyles[this.shape],
                    sharedButtonStyles[this.appearance],
                    this.disabled && sharedButtonStyles.disabled
                ),
                container: css(
                    sharedButtonStyles.content,
                ),
                label: css(
                    sharedButtonStyles.label,
                ),

            })
        },
    },
    render() {
        return (
            <div
                role='button'
                aria-disabled={this.disabled}
                class={this.classes.surface}
            >

                <Ripple disabled={this.disabled}></Ripple>
                <Elevation></Elevation>

                <button
                    type={this.type}
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                    class={this.classes.container}
                >
                    {this.iconPosition === 'left' && this.$slots.icon && this.$slots.icon()}

                    {
                        !this.iconOnly &&
                        <span class={this.classes.label}>
                            {this.$slots.default && this.$slots.default()}
                        </span>
                    }
                    {this.iconPosition === 'right' && this.$slots.icon && this.$slots.icon()}
                </button>
            </div >
        )
    },
    components: {
        Ripple,
        Elevation
    }
})
