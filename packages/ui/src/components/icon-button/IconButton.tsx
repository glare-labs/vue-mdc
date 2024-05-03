import { defineComponent, type SlotsType } from 'vue'
import css from './iconButton.module.css'
import cssBase from './base.module.css'
import { Ripple } from '../ripple/Ripple'
import { propsShared } from './base'

const props = propsShared
const emits = {}
const slots = {} as SlotsType<{
    default: void
}>

export const IconButton = defineComponent({
    name: 'GlareUi-IconButton',
    props,
    emits,
    slots,
    render() {
        const renderIcon = (
            <span class={cssBase.icon}>
                {this.$slots.default && this.$slots.default()}
            </span>
        )

        return (
            <button
                class={[
                    cssBase.container,
                    css[this.appearance],
                    this.disabled && cssBase.disabled
                ]}
                disabled={this.disabled}
                type={this.type}
            >
                <Ripple></Ripple>

                <div aria-hidden="true" class={cssBase.touch}></div>
                <div aria-hidden="true" class={cssBase.background}></div>
                <div aria-hidden="true" class={cssBase.outline}></div>

                {renderIcon}
            </button>
        )
    }
})
