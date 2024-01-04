import { defineComponent } from 'vue'
import { props, slots } from './Fab.type'
import { FabStyles } from './Fab.css'

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
                this.disabled && FabStyles.disabledRoot,
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
                <am-elevation></am-elevation>
                <am-ripple disabled={this.disabled}></am-ripple>
                {this.$slots.default && this.$slots.default()}
            </button>
        )
    },
})
