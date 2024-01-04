import { defineComponent } from 'vue'
import { props, slots } from './Button.type'
import { ButtonStyles } from './Button.css'
import { Ripple } from '../../ripple'
import { Elevation } from '../../elevation'
// import css from './Button.module.css'

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
                container: [
                    ButtonStyles.container,
                    ButtonStyles.shape[this.shape],
                    ButtonStyles.appearance[this.appearance],
                    this.disabled && ButtonStyles.disabled,
                ],
                button: [
                    ButtonStyles.button
                ],
                label: [
                    ButtonStyles.label,
                ],

            })
        },
    },
    render() {
        return (
            <div
                role='button'
                aria-disabled={this.disabled}
                class={this.classes.container}
            >

                <Ripple disabled={this.disabled}></Ripple>
                <Elevation></Elevation>

                <button
                    type={this.type}
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                    class={this.classes.button}
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
