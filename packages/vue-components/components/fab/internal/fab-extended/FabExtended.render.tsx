import { defineComponent } from 'vue'
import { props, slots } from './FabExtended.type'
import { css } from 'aphrodite/no-important'
import { fabStyles } from './FabExtended.styles'
import { Elevation } from '@/components/elevation'
import { Ripple } from '@/components/ripple'

export const renderFabExtended = defineComponent({
    name: 'MAMVFabExtended',
    props,
    slots,
    computed: {
        classes() {
            return {
                root: css(
                    fabStyles.root,
                    fabStyles[this.variant],
                    fabStyles.containerLabel,
                    fabStyles.containerIcon,
                    this.lowered ? fabStyles.containerElevationLow : fabStyles.containerElevation,
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
            >
                <Elevation></Elevation>
                <Ripple disabled={this.disabled}></Ripple>
                {this.iconPosition === 'left' && this.$slots.icon && this.$slots.icon()}
                {this.$slots.default && this.$slots.default()}
                {this.iconPosition === 'right' && this.$slots.icon && this.$slots.icon()}
            </button>
        )
    },
    components: {
        Ripple,
    }
})