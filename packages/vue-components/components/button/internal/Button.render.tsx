import { defineSSRCustomElement } from 'vue'
import { props } from './Button.type'
import { sharedButtonStyles } from './Button.styles'

declare module 'vue' {
    export interface GlobalComponents {
        'am-button': typeof renderButton,
    }
}

/**
 * @alias am-button
 */
export const renderButton = defineSSRCustomElement({
    name: 'AmButton',
    props,
    computed: {
        classes() {
            return `surface ${this.shape} ${this.size} ${this.appearance} ${this.disabled ? 'disabled' : ''} ${this.iconOnly ? 'icon-only' : ''} ${this.iconPosition === 'left' ? 'icon-start' : 'icon-end'}`
        },
    },
    render() {
        return (
            <div
                role='button'
                aria-disabled={this.disabled}
                class={`surface container ${this.shape} ${this.size} ${this.appearance} ${this.disabled ? 'disabled' : ''}`}
            >

                <am-ripple disabled={this.disabled}></am-ripple>
                <am-elevation></am-elevation>

                <button
                    type={this.type}
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                    class="content"
                >
                    {this.iconPosition === 'left' && <slot name="icon"></slot>}
                    {!this.iconOnly && <slot class="label"></slot>}
                    {this.iconPosition === 'right' && <slot name="icon"></slot>}
                </button>
            </div >
        )
    },
    styles: [
        sharedButtonStyles
    ]
})
