import { defineComponent } from 'vue'
import { props, slots } from './Fab.type'
import { css } from 'aphrodite/no-important'
import { fabStyles } from './Fab.styles'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Fab': typeof renderFab,
    }
}

export const renderFab = defineComponent({
    name: 'AmFab',
    props,
    slots,
    computed: {
        classes() {
            return {
                root: css(
                    fabStyles.root,
                    fabStyles[this.variant],
                    fabStyles[`${this.size}Shape`],
                    fabStyles[this.size],
                    fabStyles[`${this.size}IconSize`],
                    this.lowered ? fabStyles.containerElevationLow : this.size === 'large' ? fabStyles.containerElevationHigh : fabStyles.containerElevation,
                    this.disabled && fabStyles.disabledRoot,
                ),
            }
        }
    },
    render() {
        return (
            <button
                class={this.classes.root}
                role='button'
                disabled={this.disabled}
                aria-disabled={this.disabled}
                aria-label={this.ariaLabel}
                aria-aria-labelledby={this.ariaLabelledby}
            >
                <am-elevation></am-elevation>
                <am-ripple disabled={this.disabled}></am-ripple>
                {this.$slots.default && this.$slots.default()}
            </button>
        )
    },
})
