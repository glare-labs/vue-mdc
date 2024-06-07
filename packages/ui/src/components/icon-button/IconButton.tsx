import { defineComponent } from 'vue'
import css from './iconButton.module.css'
import cssBase from './base.module.css'
import { Ripple } from '../ripple/Ripple'
import { BaseIconButton } from './BaseIconButton'

class IconButtonComponent extends BaseIconButton {
    protected name: string = 'GlareUi-IconButton'
    protected props = {
        ...super.getProps(),
    }
    
    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        emits: this.emits,
        slots: this.slots,
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
}

export const IconButton = new IconButtonComponent().component
