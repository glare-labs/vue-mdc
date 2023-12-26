import { defineComponent } from 'vue'
import { props, slots } from './Fab.type'
import { css } from 'aphrodite/no-important'
import { fabStyles } from './Fab.styles'
import { Elevation } from '../../../elevation'
import { Ripple } from '../../../ripple'

export const renderFab = defineComponent({
    name: 'MAMVFab',
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
                <Elevation></Elevation>
                <Ripple disabled={this.disabled}></Ripple>
                {this.$slots.default && this.$slots.default()}
            </button>
        )
    },
    components: {
        Ripple,
    },
})
