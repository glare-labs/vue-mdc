import { defineComponent } from 'vue'
import { props, slots } from './FabExtended.type'
import { FabExtendedStyles } from './FabExtended.css'
import { Ripple } from '../../../ripple'
import { Elevation } from '../../../elevation'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Fab-Extended': typeof renderFabExtended,
    }
}

export const renderFabExtended = defineComponent({
    name: 'AmFabExtended',
    props,
    slots,
    computed: {
        classes() {
            return [
                FabExtendedStyles.surface,
                FabExtendedStyles.variant[this.variant],
                FabExtendedStyles.label,
                FabExtendedStyles.icon,
                this.lowered ? FabExtendedStyles.elevationLevel.containerElevationLow : FabExtendedStyles.elevationLevel.containerElevation,
                this.disabled && FabExtendedStyles.disabled,
            ]
        }
    },
    render() {
        return (
            <button
                class={this.classes}
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
        Elevation,
    }
})
