import { defineComponent } from 'vue'
import { props, slots } from './Fab.type'
import { FabStyles } from './Fab.css'
import { Ripple } from '../../../ripple'
import { Elevation } from '../../../elevation'

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
            return [
                FabStyles.surface,
                FabStyles.variant[this.variant],
                FabStyles.shape[`${this.size}Shape`],
                FabStyles.size[this.size],
                FabStyles.iconSize[`${this.size}IconSize`],
                this.lowered ? FabStyles.elevationLevel.containerElevationLow : this.size === 'large' ? FabStyles.elevationLevel.containerElevationHigh : FabStyles.elevationLevel.containerElevation,
                this.disabled && FabStyles.disabled,
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
                {this.$slots.default && this.$slots.default()}
            </button>
        )
    },
    components: {
        Ripple,
        Elevation,
    }
})
